import React, { Component } from 'react'
import '../../css/instant-video-room.css'
import { FormInput, GradiantButton, P } from '../styles'
import $ from "jquery"
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Emmojis from '../../data/emmoji.json'
import InstantUsers from './instantusers'
import ChatBot from '../build/i-chatbox';
import SubToolTip from '../build/i-chatbox/toolTip';


var ii = 0;
var min = 0;
var sec = 0;
class InstantRoom extends Component {


    constructor(props) {
        super(props);
        this.state = {
            emmojis: [],
            p_em: '',
            own: true,
            mr: true,
            media: {
                audio: true,
                video: true
            }
        }

        this.chatBoxShow = this.chatBoxShow.bind(this);
        this.getTime = this.getTime.bind(this);
        this.stopTime = this.stopTime.bind(this);
        this.cleartime = this.cleartime.bind(this);
        this.EmmojiHandler = this.EmmojiHandler.bind(this);
    }


    componentDidMount() {
       
        this.setState({ emmojis: Emmojis });
        setTimeout(() => {
            $("#preloder").css('display', 'none');
            $("body").addClass("open");
        }, 2000);

        // if (window.history && window.history.pushState) {

        //     window.history.pushState('instant-room', null, './instant-room');

        //     $(window).on('popstate', function () {
        //         $("body").removeClass("open");
        //     });
        // }
        $(document).on("click", ".excute-show", function () {
            $(this).closest(".profile-item").find(".subtoolTip").slideToggle();
        })

        console.log($('.own-img-wrapper').height());


    }

    chatBoxShow() {
        $(".hidden-bottom").slideToggle();
    }

    stopTime() {
        // console.log("test");
        this.intervalID = setInterval(() => { this.getTime() }, 1000);
    }

    getTime() {
        // console.log("sdfsdf");
        var result;
        ii++;
        sec = ii % 60;
        min = Math.floor(ii / 60);
        sec = ("0" + sec).slice(-2);
        min = ("0" + min).slice(-2);
        result = min + ":" + sec;
        this.setState({ recordedtime: result });
        console.log(this.state.recordedtime);
    }

    cleartime() {
        // alert();
        ii = 0;
        clearInterval(this.intervalID)
        this.setState({ recordedtime: '' });
        var newtime = "00:00";
        // console.log(newtime);
        this.setState({ recordedtime: newtime });
    }

    participantShow() {
        $(".participants").slideToggle();
    }

    EmmojiHandler(index) {
        console.log(this.state.emmojis[index]);
        this.setState({ p_em: index });
        if (!(this.state.own)) {
            setTimeout(function () {
                $('.s-emmiji').addClass('emmoji-animate');
            }, 700);
            $('.emmoji-show').slideToggle();
            $('.emoji-icon').css('background-color', '#4E5165');
            $('.emmoji-text').css('color', '#4E5165');
            this.setState({ own: !this.state.own });

            $('.s-emmiji').css('font-size', ('50px'));
            setTimeout(function () {
                $('.s-emmiji').css('font-size', ('0px'));
                $('.s-emmiji').removeClass('emmoji-animate');
            }, 2100);
        }
    }

    toggleVideo = () => {
        const { media } = this.state;
        media.video = !media.video;
        console.log("toggleVideo", media);
        this.setState({ media });
    }

    toggleAudio = () => {
        const { media } = this.state;
        media.audio = !media.audio;
        console.log("toggleAudio", media);
        this.setState({ media });
    }

    render() {
        return (
            <div className="instant-video-room-container">

                <div id="preloder">
                    <div className="loader">
                        <img src={'../../assets/icons/loading.gif'} alt="loading" />
                    </div>
                </div>
                <div className="panel left"></div>
                <div className="panel right"></div>

                <div className="instant-video-room-header-conatiner pos-re">
                    <div className="d-flex">
                        <div>
                            <img src={'../../assets/icons/phiz_icon.png'} alt="phiz icon" />
                        </div>
                        <div className="ml-4 mr-4">
                            <P fontWeight="bold" color="#FF8300" fontSize="20px" uppercase="uppercase">instant room name here</P>
                            <div className="horizontal-center">
                                <P>live broadcast here: </P>
                                <P color="#FF8300">user name</P>
                            </div>
                        </div>
                        <div className="limit-container mt-2">50 limit</div>
                    </div>
                    <div className="horizontal-center">
                        <FormInput className="mr-4" width="595px" height="45px" fontSize="23px" placeholder="https:\\www.phiz.live.instanatroom123456" />
                        <GradiantButton width="130px" height="45px" fontSize="12px" value="copy link" />
                    </div>

                    <div className="screen-recod-wrapper" style={{ display: "none" }}>
                        <div className="recoding-alram"></div>
                        <div className="recoding-time" id="recordedTime">{this.state.recordedtime}</div>
                    </div>
                </div>

                <div className="webCam-content">
                    <div className="instantUser-wraper">
                        <InstantUsers handEmjod={this.state.p_em} media={this.state.media} {...this.props} />
                    </div>

                    <div className="hidden-bottom">
                        <div className="chat-box-body">
                            <ChatBot />
                        </div>
                    </div>

                    <div className="emmoji-show pos-ab">
                        <div className="emmoji-wraper">
                            <div className="getmore-wrapper">
                                <div className="getmorebtn g-back bunHover">Get More</div>
                            </div>
                            <div className="pt-0 emmojis-items">
                                {
                                    this.state.emmojis.map((emmoji, i) => {
                                        return (
                                            <p className="chated-emmoji" onClick={() => this.EmmojiHandler(emmoji)} key={i}>{String.fromCodePoint(emmoji)}</p>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    <div className="participants">
                        <div className="chatbot-header">
                            <h5>Participants</h5>
                        </div>
                        <div className="chatbot-content overflowVissible p-0">
                            <div className="p-2 border-body">
                                <div className="search-box">
                                    <div className="searchIcon">
                                        <SearchIcon />
                                    </div>
                                    <InputBase
                                        placeholder="Search…"
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                </div>
                            </div>

                            <div className="profile-items">

                                <div className="profile-item horizontal-center pb-2 pl-2 ">
                                    <div className="horizontal-center">
                                        <span className="u-name">JD</span>
                                        <span className="r-name">John Doe</span>
                                    </div>
                                    <div className="mr-3 mt-2 excute-show"></div>
                                    <div className="subtoolTip">
                                        <SubToolTip />
                                    </div>
                                </div>

                                <div className="profile-item horizontal-center pb-2 pl-2">
                                    <div className="horizontal-center">
                                        <span className="u-name">JD</span>
                                        <span className="r-name">John Doe</span>
                                    </div>
                                    <div className="mr-3 mt-2 excute-show"></div>
                                    <div className="subtoolTip">
                                        <SubToolTip />
                                    </div>
                                </div>

                                <div className="profile-item horizontal-center pb-2 pl-2">
                                    <div className="horizontal-center">
                                        <span className="u-name">JD</span>
                                        <span className="r-name">John Doe</span>
                                    </div>
                                    <div className="mr-3 mt-2 excute-show"></div>
                                    <div className="subtoolTip">
                                        <SubToolTip />
                                    </div>
                                </div>
                                <div className="profile-item horizontal-center pb-2 pl-2">
                                    <div className="horizontal-center">
                                        <span className="u-name">JD</span>
                                        <span className="r-name">John Doe</span>
                                    </div>
                                    <div className="mr-3 mt-2 excute-show"></div>
                                    <div className="subtoolTip">
                                        <SubToolTip />
                                    </div>
                                </div>
                                <div className="profile-item horizontal-center pb-2 pl-2">
                                    <div className="horizontal-center">
                                        <span className="u-name">JD</span>
                                        <span className="r-name">John Doe</span>
                                    </div>
                                    <div className="mr-3 mt-2 excute-show"></div>
                                    <div className="subtoolTip">
                                        <SubToolTip />
                                    </div>
                                </div>
                                <div className="profile-item horizontal-center pb-2 pl-2">
                                    <div className="horizontal-center">
                                        <span className="u-name">JD</span>
                                        <span className="r-name">John Doe</span>
                                    </div>
                                    <div className="mr-3 mt-2 excute-show"></div>
                                    <div className="subtoolTip">
                                        <SubToolTip />
                                    </div>
                                </div>
                                <div className="profile-item horizontal-center pb-2 pl-2">
                                    <div className="horizontal-center">
                                        <span className="u-name">JD</span>
                                        <span className="r-name">John Doe</span>
                                    </div>
                                    <div className="mr-3 mt-2 excute-show"></div>
                                    <div className="subtoolTip">
                                        <SubToolTip />
                                    </div>
                                </div>
                                <div className="profile-item horizontal-center pb-2 pl-2">
                                    <div className="horizontal-center">
                                        <span className="u-name">JD</span>
                                        <span className="r-name">John Doe</span>
                                    </div>
                                    <div className="mr-3 mt-2 excute-show"></div>
                                    <div className="subtoolTip">
                                        <SubToolTip />
                                    </div>
                                </div>
                                <div className="profile-item horizontal-center pb-2 pl-2">
                                    <div className="horizontal-center">
                                        <span className="u-name">JD</span>
                                        <span className="r-name">John Doe</span>
                                    </div>
                                    <div className="mr-3 mt-2 excute-show"></div>
                                    <div className="subtoolTip">
                                        <SubToolTip />
                                    </div>
                                </div>
                                <div className="profile-item horizontal-center pb-2 pl-2 bb-available">
                                    <div className="horizontal-center">
                                        <span className="u-name">JD</span>
                                        <span className="r-name">John Doe</span>
                                    </div>
                                    <div className="mr-3 mt-2 excute-show"></div>
                                    <div className="subtoolTip">
                                        <SubToolTip />
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                </div>

                <div className="instant-video-room-bottom-container">
                    <div className="instant-room-button-container" onClick={this.participantShow}>
                        <div className="participants-icon" />
                        <P fontSize="17px">Participants</P>
                    </div>
                    <div className="instant-video-room-control-container">
                        <div className="instant-room-button-container g-back bunHover inside-white" onClick={() => {
                            $("body").removeClass("open");
                            this.props.history.push('/dashboard/home')
                        }}>
                            <div className="exit-icon" />
                            <P fontSize="17px" >End</P>
                        </div>

                        <div className="instant-room-button-container"

                            onClick={() => {
                                this.toggleAudio();
                                if (this.state.own) {
                                    $('.mute-wraper').css("display", "block");
                                    $('.mic-icon').css('background-color', '#ff8300');
                                    $('.mic-text').css('color', '#ff8300');
                                    $('.rh-contacted-users').css('pointer-events', 'none');
                                    this.setState({ own: !this.state.own });
                                } else {
                                    $('.mute-wraper').css("display", "none");
                                    $('.mic-icon').css('background-color', '#4E5165');
                                    $('.mic-text').css('color', '#4e5165');
                                    $('.rh-contacted-users').css('pointer-events', 'unset');

                                    this.setState({ own: !this.state.own });
                                }
                            }}>
                            <div className="mic-icon" />
                            <P fontSize="17px" className='mic-text'>Mute</P>
                        </div>

                        <div className="instant-room-button-container" onClick={() => {
                            this.toggleVideo();
                            if (this.state.own) {
                                $('.camera-icon').addClass('uncamera');
                                $(".stop-video-text").css('color', '#ff8300');
                                $('.onwVideo').css('display', 'none');
                                $('.own-videoStop').css('display', 'flex');
                                this.setState({ own: !this.state.own });
                            } else {
                                $('.camera-icon').removeClass('uncamera');
                                $(".stop-video-text").css('color', '#4e5165');
                                $('.onwVideo').css('display', 'block');
                                $('.own-videoStop').css('display', 'none');
                                this.setState({ own: !this.state.own });
                            }
                        }}>
                            <div className="camera-icon" />
                            <P fontSize="17px" className="stop-video-text">Stop video</P>
                        </div>

                        <div className="instant-room-button-container recode-start" onClick={() => {
                            if (this.state.own) {
                                $("#chip").css('border', '7px solid red');
                                $('.screen-recod-wrapper').css('display', 'flex');
                                $('.recode-stop').css('display', 'flex');
                                $('.recode-start').css('display', 'none');
                                this.stopTime();
                                this.setState({ own: !this.state.own });
                            }
                        }}>
                            <div className="record-icon" />
                            <P fontSize="17px">Record</P>
                        </div>
                        <div className="instant-room-button-container recode-stop" style={{ display: "none" }} onClick={() => {
                            if (!(this.state.own)) {
                                $('.recode-stop').css('display', 'none');
                                $('.recode-start').css('display', 'flex');
                                $("#chip").css('border', 'none');
                                $('.screen-recod-wrapper').css('display', 'none');
                                this.cleartime();
                                this.setState({ own: !this.state.own });
                            }
                        }}>
                            <div className="recode-stop-icon" />
                            <P fontSize="17px" style={{ color: "red" }} >Stop</P>
                        </div>

                        <div className="instant-room-button-container" onClick={() => {
                            if (this.state.own) {
                                $('.share-screen-body').slideToggle();
                                $('.InsliderUsers').addClass('screen-active');
                                $('.share-screen-icon').css('background-color', '#ff8300');
                                $('.share-scrren-text').css('color', '#ff8300');
                                $('.pageNext').css('display', 'none')
                                $('.pagePreview').css('display', 'none')
                                this.setState({ own: !this.state.own });
                            } else {
                                $('.share-screen-body').slideToggle();
                                $('.InsliderUsers').removeClass('screen-active');
                                $('.share-screen-icon').css('background-color', '#4e5165');
                                $('.share-scrren-text').css('color', '#4e5165');
                                $('.pageNext').css('display', 'flex')
                                $('.pagePreview').css('display', 'flex')
                                this.setState({ own: !this.state.own });
                            }
                        }}>
                            <div className="share-screen-icon" />
                            <P fontSize="17px" className="share-scrren-text">Share screen</P>
                        </div>

                        <div className="instant-room-button-container" onClick={() => {
                            if (this.state.own) {
                                $('.emmoji-show').slideToggle();
                                $('.emoji-icon').css('background-color', '#ff8300');
                                $('.emmoji-text').css('color', '#ff8300');
                                this.setState({ own: !this.state.own });
                            } else {
                                $('.emmoji-show').slideToggle();
                                $('.emoji-icon').css('background-color', '#4E5165');
                                $('.emmoji-text').css('color', '#4E5165');
                                this.setState({ own: !this.state.own });
                            }
                        }}>
                            <div className="emoji-icon" />
                            <P fontSize="17px" className="emmoji-text">Emojis</P>
                        </div>
                    </div>
                    <div className="instant-room-button-container" onClick={this.chatBoxShow}>
                        <div className="chart-icon" />
                        <P fontSize="17px">Chart</P>
                    </div>
                </div>
            </div>
        )
    }
}

export default InstantRoom;
