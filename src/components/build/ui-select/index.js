import React, { Component } from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import $ from "jquery";



export class selectMic extends Component {
  constructor(props){
    super(props);
    this.state={
        flag1:true,
        selectedMic:'',
        preMicImg:"../../assets/icons/microphonbefore.png"
    }

    this.handleSelect = this.handleSelect.bind(this); 
    this.handleVal = this.handleVal.bind(this); 


}

handleSelect(){ 
  if(this.state.flag1){    
    $('.MuiSvgIcon-root').css('transform','rotate(-180deg)');
    $('.microphone-items').slideDown();
    this.setState({flag1:!this.state.flag1});
  }else{
    $('.MuiSvgIcon-root').css('transform','rotate(0deg)');
    $('.microphone-items').fadeToggle();
    this.setState({flag1:!this.state.flag1});
  }
}


handleVal = (event) => {
    // console.log(event.target.innerText); 
    this.setState({selectedMic:event.target.innerText});
    $('.mic-select-img2').css('background','#ff8300');
    $('.select-body').css('background','white');
    $('.microphone-items').slideToggle();
    $('.MuiSvgIcon-root').css('transform','rotate(0deg)');
    this.setState({flag1:true});
    this.props.aa("checked");
}



  render() {
    return (
      <div className="select-body pos-re"> 
        <div className="made-val">
          <img src={this.state.preMicImg} alt="" style={{display:`${(this.state.selectedMic!=='')?"inline-block":"none"}` , height: "35px", marginRight:"5px"}}></img>
          {this.state.selectedMic}
        </div>       
        <ArrowDropDownIcon onClick={this.handleSelect}/>
        <ul className="microphone-items" style={{display:"none"}}>
          <li><p onClick={this.handleVal}>Default - Microphone (Realtek High Definition Audio)</p></li>
          <li><p onClick={this.handleVal}>Moving-Neumann TLM 102MT Studio Condenser Microphone</p></li>
          <li><p onClick={this.handleVal}>Pressure-Gradient Microphone.</p></li>
          <li><p onClick={this.handleVal}>Low-Back Electret Condenser Microphone.</p></li>
        </ul>
      </div>
    )
  }
}

export default selectMic

