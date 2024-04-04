import React from "react";
import PropTypes from "prop-types";

//random() 함수를 정의 Math.random() : 0~1사이의 임의의 실수값
const random = (min, max) => Math.floor(Math.random() * (max-min+1) + min)
const oplist = ['+', '-', '*', '/'];

function Arithmetic() {
  //10~30 사이의 임의의 수 2개 생성
  //0~3 사이의 임의의 수 1개 생성
  const op1 = random(10,30);
  const op2 = random(10,30);
  const op = random(0,3);
  let result = 0;
  //if 문으로 연산자 종류에 따라 연산 수행
  if (op === 0) result = op1 + op2;
  else if (op === 1) result = op1 - op2;
  else if (op === 2) result = op1 * op2;
  else if (op === 3) result = op1 / op2;

  //웹페이지에 출력할 형식을 작성
  const output = `${op1} ${oplist[op]} ${op2} = ${result}`
  return (
  <>
    <h2>{output}</h2>
    <Arithmetic2 op1 = {op1} op2={op2}/>
  </>
  );
}


function Arithmetic2(props) { //Properties 받아서 입력으로 처리
  /*
  const op1 = props.op1;
  const op2 = props.op2;
  const op = props.op;
  let result = 0;
  */
  const {op1, op2, op} = props;  //Destructuring 비구조화
  let result = 0;
  //if 문으로 연산자 종류에 따라 연산 수행
  if (op === 0) result = op1 + op2;
  else if (op === 1) result = op1 - op2;
  else if (op === 2) result = op1 * op2;
  else if (op === 3) result = op1 / op2;

  //웹페이지에 출력할 형식을 작성
  const output = `${op1} ${oplist[op]} ${op2} = ${result}`
  return (<h2>{output}</h2>);
}

//디폴트 속성을 정의하는 것
Arithmetic2.defaultProps = {
  op: 0
}


//속성의 타입 선언
Arithmetic2.propTypes = {
  op: PropTypes.number,
  op1: PropTypes.number,
  op2: PropTypes.number
}

export default Arithmetic;