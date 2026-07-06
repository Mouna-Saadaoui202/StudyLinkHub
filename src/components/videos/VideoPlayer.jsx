import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const defaultVideoSrc = `${import.meta.env.BASE_URL}stydylink%20modifier.mp4`;

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
  src={src || defaultVideoSrc}
  width="100%"
  height="600px"
  style={{ display: "block", position: "relative",background:"black" }}
  controls
/>
      </Popup>
    </>
  );
};
