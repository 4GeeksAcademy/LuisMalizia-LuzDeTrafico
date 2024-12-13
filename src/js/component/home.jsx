import React, { useState } from "react";

//create your first component
const Home = () => {
  const [color1, setColor1] = useState("rojo");
  const [color2, setColor2] = useState("amarillo");
  const [color3, setColor3] = useState("verde");

  function cambiarcolor1() {
    setColor1("rojo");
    setColor2("amarillo-opaco");
    setColor3("verde-brillante");
  }

  function cambiarcolor2() {
    setColor2("amarillo");
    setColor1("rojo-brillante");
    setColor3("verde-brillante");
  }

  function cambiarcolor3() {
    setColor3("verde");
    setColor1("rojo-brillante");
    setColor2("amarillo-opaco");
  }

  return (
    <div className="container">
      <div className={color1} onClick={cambiarcolor1}></div>
      <div className={color2} onClick={cambiarcolor2}></div>
      <div className={color3} onClick={cambiarcolor3}></div>
    </div>
  );
};
export default Home;
