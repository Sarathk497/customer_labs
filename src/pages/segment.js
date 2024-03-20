import React from "react";
import { MdArrowBackIos } from "react-icons/md";

const segment = ({ handleisSaveAudience }) => {
  return (
    <div className="main_container">
      <div className="main_container__inner">
        <header>
          <MdArrowBackIos size={30} />
          View Audience
        </header>
        <button className="save_btn" onClick={handleisSaveAudience}>
          Save Segment
        </button>
      </div>
    </div>
  );
};

export default segment;
