import React, { useState } from "react";
import myContext from "./InfoContext";
const InfoState = (props) => {
  const arr = [];
  const [info, setInfo] = useState(arr);
  const saveData = (data) => {
    setInfo({ ...info, data });
    console.log("data:",data)
  };
  return (
    <div>
      <myContext.Provider value={{ info, saveData }}>
        {props.children}
      </myContext.Provider>
    </div>
  );
};

export default InfoState;
