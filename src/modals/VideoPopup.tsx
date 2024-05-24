import React from "react";
import ModalVideo from "react-modal-video";

interface VideoPopupProps {
  isVideoOpen: boolean;
  setIsVideoOpen: (isOpen: boolean) => void;
  videoId?: string;
}

const VideoPopup: React.FC<VideoPopupProps> = ({
  isVideoOpen,
  setIsVideoOpen,
  videoId = "UBdUpt6oTOE",
}) => {
  return (
    <>
      <ModalVideo
        channel="youtube"
        // autoplay
        isOpen={isVideoOpen}
        videoId={videoId}
        onClose={() => setIsVideoOpen(false)}
      />
    </>
  );
};

export default VideoPopup;
