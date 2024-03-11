import React from "react";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { Button } from "antd";

const ToogleThemeButton = ({ darkTheme, toogleTheme }) => {
  return (
    <div className="toogle-theme-btn">
      <Button onClick={toogleTheme}>
        {darkTheme ? <HiOutlineSun /> : <HiOutlineMoon />}
      </Button>
    </div>
  );
};

export default ToogleThemeButton;
