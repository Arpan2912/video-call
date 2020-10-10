import React, { useState, useEffect } from "react";
import { gsap } from "gsap";

import ModalContent from "./CreateModalContent";

const Modal = props => {
  let modalVeil = null;
  let modalDialog = null;
  let modalContent = null;

  const [modalTween] = useState(gsap.timeline({ paused: true }));

  useEffect(() => {
    modalTween
      .to(modalVeil, 0.25, { autoAlpha: 1 })
      .to(modalDialog, 0.55, { y: 0, autoAlpha: 1 })
      .from(
        modalContent.children,
        0.35,
        { y: 40, opacity: 0, stagger: 0.1 },
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
  };

  const closeSendModal = (text) => {
    modalTween.reverse();
    gsap.delayedCall(modalTween.duration(), props.close);
    console.log(text)
  };

  function callbackFunction(filearry) {  
    props.parentCallback(filearry); //send image data to productSide

  }

  return (
    <div className="shop-modal">
      <div className={`modal-container${props.visible ? " show" : ""}`}>
        <div
          className="modal-veil"
          ref={e => (modalVeil = e)}
        />
        <div className="modal-dialog"  ref={e => (modalDialog = e)}>
          <ModalContent ref={e => (modalContent = e)} ImgLength={props.ImgNum} CloseModal={closeModal} CloseSendModal={closeSendModal} parentCallback={callbackFunction} />
        </div>
      </div>
    </div>
    
  );
};

export default Modal;
