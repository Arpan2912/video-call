import React, { Component } from 'react'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import { GradiantButton, TransparentButton, P } from '../../components/styles'
import Checkbox from '@material-ui/core/Checkbox';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import $ from "jquery"


export class roomSetup extends Component {
    constructor(props){
        super(props);
        this.routeChange = this.routeChange.bind(this);
        this.state={
            age: '',
            name: 'hai',
            flag: true

        }
        this.handleChange=this.handleChange.bind(this)
        this.arrowChange=this.arrowChange.bind(this)
    }

    componentDidMount(){
        this.props.handleLinkActive('randomState');

        $(document).on('click', '.age-item', function() {
            const aa = $(this).text();
            $('.ageeee').val(aa); 
            $(".select-arrow-icon").css("transform" , "rotate(0deg)");
            $(".select-arrow-icon").css("transition" , "0.3s");            
            $(".hidden-item-list").css("display","none"); 
        });   
       
    }

    handleChange (event) {
        const name = event.target.name;
        this.setState({
        //   ...state,
          [name]: event.target.value,
        });
    }

    routeChange(){
        let path = `/random_room`;
        this.props.history.push(path);
    }

    arrowChange(){   

        if(this.state.flag){
            $(".select-arrow-icon").css("transform" , "rotate(180deg)")
        }else{
            $(".select-arrow-icon").css("transform" , "rotate(0deg)")
        }
        $(".hidden-item-list").slideToggle();

        this.setState({flag:!this.state.flag});

    }

    render() {
        return (
            <div className="room-setup-container">
                <div className="search-bar-container">
                    <p className="gray-color font-20 text-uppercase mb-0 font-weight-bold">Random Connect</p>
                    <div className="search-input-container">
                        <SearchRoundedIcon className="search-icon"/>
                        <input type="text" className="search-textbox" placeholder="Search..." />
                    </div>
                </div>

                <div style={{paddingTop: "180px"}} className="justify-align-center">
                    <div className="room-setup-form-conatiner">
                        <P fontSize="29px" color="#FF8300" fontWeight="bold">SEARCH PREFERENCES</P>
                        <div className="horizontal-center">
                            <P fontSize="23px" className="check-label mr-3 font-weight-bold">Gender:</P>
                            <div>
                                <input type="radio" name="radiog_dark" id="radio4" className="css-checkbox" />
                                <label htmlFor="radio4" className="css-label radGroup2 mr-3 mb-0">Male</label>
                                <input type="radio" name="radiog_dark" id="radio5" className="css-checkbox" />
                                <label htmlFor="radio5" className="css-label radGroup2 mb-0">Female</label>
                            </div>
                        </div>

                        <div className="horizontal-center">
                            <P fontSize="23px" className="check-label mr-3 font-weight-bold">Age:</P>                            
                            <div className="pos-re custom-select justify-align-center">
                                <input type="text" className="ageeee" disabled  placeholder="Select Age Group" ></input>
                                <ExpandMoreIcon className="select-arrow-icon" onClick={this.arrowChange} />
                                <ul className="hidden-item-list">
                                    <li className="age-item">10 - 15 ages</li>
                                    <li className="age-item">16 - 25 ages</li>
                                    <li className="age-item">26 - 35 ages</li>
                                    <li className="age-item">36 - 45 ages</li>
                                    <li className="age-item">46 - 60 ages</li>
                                    <li className="age-item">61 - 80 ages</li>                                    
                                </ul>
                            </div>
                        </div>

                        <div className="horizontal-center">
                            <Checkbox className="checkbox" size="medium"/>
                            <P fontSize="18px">Do a random search</P>
                        </div>
                        <div>
                            <GradiantButton onClick={this.routeChange} width="200px" height="60px" fontSize="16px" value="broadcast now" style={{marginRight: "30px"}}/>
                            <TransparentButton width="200px" height="60px" fontSize="16px" value="cancel" style={{marginLeft: "30px"}}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default roomSetup
