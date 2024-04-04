import React from "react";

/*
const Summarize = (props) => {
  const data = props.data;
  let total = 0;
  for(const d of data) total += d
  return (
  <>
    <h3>Data = {data}</h3>
    <h3>Total = {total}</h3>
  </>
  );
}
*/
class Summarize extends React.Component {
  render() {
    const data = this.props.data;  //클래스 컴포넌트에서는 this.props 키워드 사용
  let total = 0;
  for(const d of data) total += d
  return (
  <>
    <h3>Data = {data.toString()}</h3>
    <h3>Total = {total}</h3>
  </>
  );
  }
}

export default Summarize;