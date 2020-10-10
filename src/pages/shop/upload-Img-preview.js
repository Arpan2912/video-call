import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { Button } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';


const Modal = props => {
  let modalVeil = null;
  let modalDialog = null;
  let modalContent = null;

  const [modalTween] = useState(gsap.timeline({ paused: true }));
  


  const [state, setState] = React.useState({
    file: []
  });
  

  useEffect(()=>{
    setState({
      file:props.dataFromParent,
    });
  },[props.dataFromParent]);

  useEffect(() => {
    modalTween
      .to(modalVeil, 0.25, { autoAlpha: 1 })
      .to(modalDialog, 0.35, { y: 0, autoAlpha: 1 })
      .from(
        modalContent.children,
        0.35,
        { y: 15, opacity: 0, stagger: 0.1 },
        "-=0.15"
      )
      .reverse();
  }, []);

  useEffect(() => {
    modalTween.reversed(!props.visible);
  }, [props.visible]);


 

  const closeModal = () => {
    modalTween.reverse();
    gsap.delayedCall(modalTween.duration(), props.close);
    const counte = state.file.length;
   
    props.ImgLen(counte);
  };

  function removeImg(index){
    var arr = [];
    arr.push.apply(arr,state.file); 
    arr.splice(index, 1); 
    setState({
      ...state,          
      file:arr,
    });
  }

  return (
    <div className="shop-modal">
      <div className={`preview-container modal-container${props.visible ? " show" : ""}`}>
        <div
          className="modal-img-preview"
          ref={e => (modalVeil = e)}
          
        />
        <div className="modal-dialog uploaded-image-window"  ref={e => (modalDialog = e)}>
          <div ref={e => (modalContent = e)} className="uploaded-image-wrapper">
              <h3>
                Uploaded Images 
              </h3>
              <div className="form-group multi-preview">
                {(state.file|| []).map((url ,j) => (
                    <div className="pos-re preview-product-image" key={j}>
                      <div className="preview-image-wrapper pos-re"  >
                        <img src={url} alt="..." />
                      </div>
                      <button className="size-reduce-btn remove-close-btn" onClick={()=>removeImg(j)}>
                          <CloseIcon className="arrow-back-icon"/>
                      </button>
                    </div>
                ))}
              </div>
          </div>
          <div className="product-add-modal-footer">
            <Button className="g-back bunHover" onClick={closeModal} >Ok</Button>
            <Button className="t-back bugHover" onClick={closeModal} >Cancel</Button>
        </div>
        </div>
      </div>
    </div>
    
  );
};

export default Modal;
