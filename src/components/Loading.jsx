import React from "react";
import loading from "assets/loading.svg";

const Loading = () => {
  return (
    <div className="flex justify-center">
      <img src={loading} alt="loading" />
    </div>
  );
};

export default Loading;
