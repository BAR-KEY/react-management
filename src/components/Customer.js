import React from "react";

const CustomerProfile = (props) => {
  return (
    <>
      <img src={props.image} alt="profile" />
      <h1>
        {props.name}({props.id})
      </h1>
    </>
  );
};
const CustomerInfo = (props) => {
  return (
    <>
      <h2>{props.birthday}</h2>
      <h2>{props.gender}</h2>
      <h2>{props.job}</h2>
    </>
  );
};
function Customer(props) {
  return (
    <>
      {CustomerProfile(props)}
      {CustomerInfo(props)}
    </>
  );
}
export default Customer;
