import React, { useEffect } from "react";

const Alert = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]); //dependancy array every time it change will render
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
