import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import DoneIcon from '@material-ui/icons/Done';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import $ from "jquery"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <div className="pos-re promote-chat" style={{minHeight:"93vh"}}>{children}</div>
        </Box>
        
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [ flag, setFlag] = React.useState(true);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleModal = () =>{
    if(flag){
      $(".select-arrow-icon").css("transform" , "rotate(180deg)")
    }else{
      $(".select-arrow-icon").css("transform" , "rotate(0deg)")
    }
      $(".hidden-item-list").slideToggle();
     setFlag(!flag);
   };


  

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Public" {...a11yProps(0)} />
          <Tab label="Private" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <>
      <TabPanel value={value} index={0}>
      <div className="chatbot-content">
            <div className="chats">
                <div className="chat-line">
                    <span className="u-profile mr-3" style={{width:"40px", height:"40px"}}><img src="../../assets/profile/avata1.png" width="40px"  alt=""/></span>
                    <span className="u1 chat pos-re"> <span className="wirter-name">Imelda Hopkins</span>
                      Hey , how are you doing. today was your birthday back with the money.<br></br> &#x1F618; &#x1F62A;                      
                    </span>
                    <span style={{display:"flex", alignItems:"center"}}><MoreHorizIcon></MoreHorizIcon></span>
                </div>
                <div className="chat-under-line">                  
                  <div className="padding-arrond"><span role="img" aria-label="Snowman">&#x1F919;</span> 6</div>                   
                  <div className="send-time">3:52</div>                     
                </div>

                <div className="chat-line">
                    <span className="u-profile mr-3" style={{width:"40px", height:"40px"}}><img src="../../assets/profile/avata5.png" width="40px"  alt=""/></span>
                    <span className="u1 chat pos-re"> <span className="wirter-name">Ivory Adams</span>
                    I bought a New camera Nikon & series Here is the some pics of it &#x1F60D; &#x1F60D; &#x1F60D; &#x1F60D;                   
                    </span>
                    <span style={{display:"flex", alignItems:"center"}}><MoreHorizIcon></MoreHorizIcon></span>
                </div>
                <div className="chat-under-line">                  
                    <img className="mr-1" src="../../assets/profile/avata2.png" width="40px" alt="" />
                    <img className="mr-1" src="../../assets/profile/avata4.png" width="40px" alt=""/>
                    <img className="mr-1" src="../../assets/profile/avata7.png" width="40px" alt="" />
                    <img className="mr-1" src="../../assets/profile/avata9.png" width="40px" alt="" />                  
                  <div className="send-time">3:55</div>                     
                </div>

                <div className="chat-line">
                    <span className="u-profile mr-3" style={{width:"40px", height:"40px"}}><img src="../../assets/profile/avata8.png" width="40px"  alt=""/></span>
                    <span className="u1 chat pos-re"> <span className="wirter-name">Davey Jones</span>
                     <img src="../../assets/profile/avata4.png" width="40px" alt=""></img> 
                     <img src="../../assets/profile/dser.svg" width="70%" alt=""></img>                                       
                    </span>
                    <span style={{display:"flex", alignItems:"center"}}><MoreHorizIcon></MoreHorizIcon></span>
                </div>
                <div className="chat-under-line">
                  <div className="padding-arrond"> <span role="img" aria-label="Snowman">&#x1F4AA;</span> 6</div>
                  <div className="padding-arrond"><span role="img" aria-label="Snowman">&#x1F496;</span> 6</div>                   
                  <div className="padding-arrond"><span role="img" aria-label="Snowman">&#x1F919;</span> 3</div>                   
                  <div className="send-time">3:52</div>                     
                </div>

                <div className="chat-line">
                    <span className="u-profile mr-3" style={{width:"40px", height:"40px"}}><img src="../../assets/profile/avata1.png" width="40px" alt=""/></span>
                    <span className="u1 chat pos-re"> <span className="wirter-name">Imelda Hopkins</span>
                      Hey , how are you doing. today was your birthday back with the money.<br></br> &#x1F618; &#x1F62A;                      
                    </span>
                    <span style={{display:"flex", alignItems:"center"}}><MoreHorizIcon></MoreHorizIcon></span>
                </div>
                <div className="chat-under-line">                  
                  <div className="padding-arrond"><span role="img" aria-label="tde">&#x1F919;</span> 6</div> 


                  <div className="send-time">3:52</div>                     
                </div>

                <div className="chat-line own-chat mt-0"> 
                    <span style={{display:"flex", alignItems:"center"}}><MoreHorizIcon></MoreHorizIcon></span>                   
                    <span className="u2 chat">Hello good morning, am I late to the feast?<br></br> &#x1F618; &#x1F62A;</span>
                </div>
                <div className="own-chat-under-line">
                  <div className="u2-under-line">
                    <div className="send-time">3:52</div> 
                    <div className="mr-3 own-check"><DoneIcon/><DoneIcon/></div> 
                  </div>                                    
                </div>
                
            </div>
        </div>
          <div className="chatbot-footer pos-ab" style={{bottom:"0"}}>
              <img src={'../../assets/icons/small-plus.svg'} alt="phiz icon"></img>
              <textarea id="message" placeholder="Send a message..." required="" minLength="1" maxLength="1500"/>
              <img src={'../../assets/icons/messageSend.svg'} alt="phiz icon"></img>
          </div>
        
      </TabPanel>
      </>
      <TabPanel value={value} index={1}>
        <div className="pos-re custom-select justify-align-center select-user">
          <input type="text" className="ageeee"  placeholder="Type Username" ></input>
          <ExpandMoreIcon className="select-arrow-icon" onClick={()=>handleModal()}/>
          <ul className="hidden-item-list">
              <li>
                <div className="horizontal-center">
                    <span className="u-profile">
                      <img src={'../../assets/profile/avata1.png'} width={"35px"} alt=""></img>
                    </span>
                    <span className="r-name mt-0" style={{fontSize:"14px"}}>abc</span>
                </div>
              </li>
              <li>
                <div className="horizontal-center">
                    <span className="u-profile">
                      <img src={'../../assets/profile/avata2.png'} width={"35px"} alt=""></img>
                    </span>
                    <span className="r-name mt-0" style={{fontSize:"14px"}}>wete</span>
                </div>
              </li>
              <li>
                <div className="horizontal-center">
                    <span className="u-profile">
                      <img src={'../../assets/profile/avata3.png'} width={"35px"} alt=""></img>
                    </span>
                    <span className="r-name mt-0" style={{fontSize:"14px"}}>cxvsdfd</span>
                </div>
              </li>
              <li>
                <div className="horizontal-center">
                    <span className="u-profile">
                      <img src={'../../assets/profile/avata4.png'} width={"35px"} alt=""></img>
                    </span>
                    <span className="r-name mt-0" style={{fontSize:"14px"}}>eyreter</span>
                </div>
              </li>
              <li>
                <div className="horizontal-center">
                    <span className="u-profile">
                      <img src={'../../assets/profile/avata5.png'} width={"35px"} alt=""></img>
                    </span>
                    <span className="r-name mt-0" style={{fontSize:"14px"}}>werewr</span>
                </div>
              </li>
              <li>
                <div className="horizontal-center">
                    <span className="u-profile">
                      <img src={'../../assets/profile/avata6.png'} width={"35px"} alt=""></img>
                    </span>
                    <span className="r-name mt-0" style={{fontSize:"14px"}}>gjh</span>
                </div>
              </li>
              <li>
                <div className="horizontal-center">
                    <span className="u-profile">
                      <img src={'../../assets/profile/avata8.png'} width={"35px"} alt=""></img>
                    </span>
                    <span className="r-name mt-0" style={{fontSize:"14px"}}>tyityu</span>
                </div>
              </li>
              <li>
                <div className="horizontal-center">
                    <span className="u-profile">
                      <img src={'../../assets/profile/avata9.png'} width={"35px"} alt=""></img>
                    </span>
                    <span className="r-name mt-0" style={{fontSize:"14px"}}>bmnb</span>
                </div>
              </li>                                     
          </ul>
        </div>
        <div>

        </div>
      </TabPanel>
    </div>
  );
}
