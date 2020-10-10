import React, { forwardRef } from "react";
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import NumberFormat from 'react-number-format';
import { Button } from "@material-ui/core";
import ImageUpload from './image-uplold'
import CheckIcon from '@material-ui/icons/Check';

function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;
  
    return (
      <NumberFormat
        {...other}
        getInputRef={inputRef}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        isNumericString
        prefix="$ "
      />
    );
  }

const ModalContent = forwardRef((props, ref) => {

    const [values, setValues] = React.useState({
        numberformat: '',
        le:'',
      });

      const handleChange = (event) => {
        setValues({
          ...values,          
          [event.target.name]: event.target.value, 
        });
      };

      function callbackFunction(filearry) {           
        props.parentCallback(filearry); //send image data to creteProduct
      }

      const closeModal = () => {
        props.CloseModal()
      };

      const closeSendModal = () =>{
        props.CloseSendModal('ok');

      } 

  return (
    <div className="modal-content-container" ref={ref}>
        <div className="upload-modal-title">
            <h3>Post Product Listing</h3>
        </div>
        <div className="upload-modal-content row">
            <div className='col-4'>
                <div className={(props.ImgLength)?"multi-upload-feature justify-align-center pos-re borderactive":"multi-upload-feature justify-align-center pos-re"}>
                    {
                      (props.ImgLength)?
                        <React.Fragment>
                          <CheckIcon className="check-icon"/>
                          <h5>{props.ImgLength} Image Uploaded</h5>
                        </React.Fragment>
                          :
                        <React.Fragment>
                          <div className="upload-icon"></div>
                          <h6>Upload up to 10 images</h6> 
                        </React.Fragment>
                    }
                    <div className={(props.ImgLength)?'dn':"upload-image-preview pos-ab"}>
                        <ImageUpload parentCallback = {callbackFunction}/>
                    </div>
                </div>                
            </div>
            <div className='col-8'>
                <form noValidate>     
                    <InputBase
                        id="pName"
                        className="product-add-input hover-height-fix"
                        placeholder="Product Name"
                        defaultValue=""
                        inputProps={{ 'aria-label': 'naked' }}
                    />
                    
                    <TextField
                        className="product-add-input hover-height-fix number-input"
                        value={values.numberformat}
                        placeholder="Product Cost"
                        onChange={handleChange}
                        name="numberformat"
                        id="formatted-numberformat-input"
                        InputProps={{
                            inputComponent: NumberFormatCustom,
                        }}
                    />
                    <TextField
                        style={{height:'228px'}}
                        placeholder="Description here..."
                        className="product-add-input"
                        id="outlined-multiline-static"
                        multiline
                        rows={12}
                        defaultValue=""
                        variant="outlined"
                    />
                </form>
            </div>
        </div>
        <div className="product-add-modal-footer">
            <Button className="g-back bunHover" onClick={closeSendModal} >Ok</Button>
            <Button className="t-back bugHover" onClick={closeModal} >Cancel</Button>
        </div>
    </div>
  );
});

export default ModalContent;
