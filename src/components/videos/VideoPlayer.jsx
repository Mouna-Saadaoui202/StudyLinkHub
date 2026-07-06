import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import video from '../../assets/img/stydylink modifier.mp4'

export const VideoPlayer = ({ trigger, src }) => {
  return (
    <>
      <Popup
        trigger={trigger}
        position=""
        modal={true}
        lockScroll
      >
        <video
  src={video}
  width="100%"
  height="600px"
  style={{ display: "block", position: "relative",background:"black" }}
  controls
/>
      </Popup>
    </>
  );
};
