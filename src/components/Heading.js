import React from "react";

function Heading(props) {
  return (<h1>Arithmetic Computation : {props.children} </h1>);
}

/*
//Arrow Function
const Heading = () => {
  return ();
}
*/
export default Heading;  //외부에서 접근할 수 있도록 추출