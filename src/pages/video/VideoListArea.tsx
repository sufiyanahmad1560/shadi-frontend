
import { useState } from 'react';

import { Link } from 'react-router-dom';
import VideoPopup from '../../modals/VideoPopup';


const video_data = [
    {
        id: "UBdUpt6oTOE",
        img: "vid1.jpg"
    },
    {
        id: "UBdUpt6oTOE",
        img: "vid3.jpg"
    },
    {
        id: "UBdUpt6oTOE",
        img: "vid2.jpg"
    },
    {
        id: "UBdUpt6oTOE",
        img: "vid1.jpg"
    },
    {
        id: "UBdUpt6oTOE",
        img: "vid3.jpg"
    },
    {
        id: "UBdUpt6oTOE",
        img: "vid1.jpg"
    },
    {
        id: "UBdUpt6oTOE",
        img: "vid2.jpg"
    },
    {
        id: "UBdUpt6oTOE",
        img: "vid1.jpg"
    },
    {
        id: "UBdUpt6oTOE",
        img: "vid3.jpg"
    },
    {
        id: "UBdUpt6oTOE",
        img: "vid1.jpg"
    },
    {
        id: "UBdUpt6oTOE",
        img: "vid2.jpg"
    },
    {
        id: "UBdUpt6oTOE",
        img: "vid1.jpg"
    },
    {
        id: "UBdUpt6oTOE",
        img: "vid3.jpg"
    },
    {
        id: "UBdUpt6oTOE",
        img: "vid1.jpg"
    },
    {
        id: "UBdUpt6oTOE",
        img: "vid2.jpg"
    },
    {
        id: "UBdUpt6oTOE",
        img: "vid1.jpg"
    }
]


const VideoListArea = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);


    return (
        <>
            <div className="col-lg-12">
                <article className="postbox post format-image mb-40">
                    <div className="container-fluid">
                        <div className="row gx-2 gy-2">
                            {video_data.map((item, index) =>
                                <div key={index} className="col-xs-12 col-sm-6 col-md-4 col-xl-3">
                                    <div className="postbox__video sh-postbox__video ">
                                        <img src={require(`../../assets/img/video/${item.img}`)} alt="blog" />
                                        <Link to={""} className="popup-video video-btn sh-video-btn"
                                            onClick={() => setIsVideoOpen(true)}
                                            style={{ cursor: "pointer" }}
                                        ><i className="fas fa-play"></i></Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </article>
            </div>

            {/* video modal start */}
            <VideoPopup
                isVideoOpen={isVideoOpen}
                setIsVideoOpen={setIsVideoOpen}
                videoId={'UBdUpt6oTOE'}
            />
            {/* video modal end */}

        </>
    );
};

export default VideoListArea;