import React, { useState } from "react";
import LocaleHOC from "./LocaleHOC";

interface Props {
  name: string;
}

const Button: React.FC<Props> = ({ name = 'dd' }) => {
  return (
    <button>{name}</button>
  )
}

console.log(LocaleHOC(Button))

export default LocaleHOC(Button);
