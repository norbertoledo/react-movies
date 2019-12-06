import React, {useState, useEffect} from 'react';
import {Modal} from 'antd';
import ReactPlayer from 'react-player';
import './VideoModal.scss';

const VideoModal = (props) => {

    const {videoKey, videoPlatform, isOpen, close} = props;

    const [urlVideo, setUrlVideo] = useState(null);



    useEffect(()=>{

        switch(videoPlatform){
            case "YouTube":
                setUrlVideo(`https://youtu.be/${videoKey}`);
                break;
            case "Vimeo":
                setUrlVideo(`https://vimeo.com/${videoKey}`);
                break;
            default: break;
        }
    },[videoKey, videoPlatform]);

    return (
        <Modal
            className="video-modal"
            visible={isOpen}
            onCancel={close}
            footer={false}
            destroyOnClose={true}
        >
            <ReactPlayer
                url={urlVideo}
                controls
            />
        </Modal>
    );
}

export default VideoModal;
