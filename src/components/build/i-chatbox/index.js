import React, { Component } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';


class ChatBot extends Component {
  render() {
    return (
      <div className="chatbot-box">
        <div className="chatbot-header">
            <h5>Public Chat</h5>
        </div>
        <div className="chatbot-content">
            <div className="search-box">
                <div className="searchIcon">
                <SearchIcon />
                </div>
                <InputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </div>

            <div className="chats">
                <div className="chat-line">
                    <span className="u-name">JD</span>
                    <span className="u1 chat">Hey sam, whats up?</span>
                </div>
                <div className="chat-line own-chat">
                    <span className="u2 chat">nothing here how 'bout u?</span>
                </div>
                <div className="chat-line">
                    <span className="u-name">JD</span> 
                    <span className="u1 chat">I'm just heading up to your neck of the woods for some work related stuff.</span>
                </div>
                <div className="chat-line">
                    <span className="u-name">JD</span>
                    <span className="u1 chat">driveing through mcdonalds right now</span>
                </div>
                <div className="chat-line own-chat">                    
                    <span className="u2 chat">cool! where exactly will you be?</span>
                </div>
                <div className="chat-line">
                    <span className="u-name">JD</span>
                    <span className="u1 chat">up in the ridgway, mt. horab area</span>
                </div>
            </div>
        </div>
        <div className="chatbot-footer">
            <img src={'../../assets/icons/small-plus.svg'} alt="phiz icon"></img>
            <textarea id="message" placeholder="Send a message..." required="" minLength="1" maxLength="1500"/>
            <img src={'../../assets/icons/messageSend.svg'} alt="phiz icon"></img>
        </div>
      </div>

   
    )
  }
}

export default ChatBot


