import React, { Component } from 'react'
import DoneIcon from '@material-ui/icons/Done';
import friendData from '../../data/friendData.json';




export class friendList extends Component {
    constructor(props){
        super(props);
        this.state={
            fr_data:[], 
            leftbar_state:true,           
        };

        this.handleChangecontent = this.handleChangecontent.bind(this);


    }
    componentDidMount(){
        this.setState({fr_data: friendData}); 
        // console.log(this.props.sendState);
        this.setState({leftbar_state:this.props.sendState});

    }

    handleChangecontent(f_key_num){
        this.props.ch(f_key_num);        
    }
   

    render() {
        return (

            <div className="fr-list-body">
                {
                    this.state.fr_data.map((f_data,k)=>{
                        return(
                            <div className="fr-item-wrapper" key={k}>
                                <div className="fr-item">
                                    <div className='fr-item-left' onClick={()=>this.handleChangecontent(k)}>
                                        <div className="fr-face mr-3">
                                            <img src={f_data.face} alt="" style={{width:"100%",height:"100%"}}></img>
                                        </div>
                                        <div className="fr-namedate">
                                            <h6 className="fr-name mb-0">{f_data.name}</h6>                                
                                            <p className="fr-last-text mb-0"><span className={(f_data.check) ?"own-check":"dn"}><DoneIcon/><DoneIcon/></span>{f_data.lastText}</p>
                                        </div>
                                    </div>
                                    <div className='fr-item-right'>
                                        <div className="fr-time-wrapper">
                                            <span>{f_data.lastTime}</span>
                                        </div>
                                        <div className="more-function-icon-wrapper"> 
                                            <div className="m-f-icon"></div>                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default friendList
