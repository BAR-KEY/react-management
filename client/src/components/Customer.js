import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

// const CustomerProfile = (props) => {
//   return (
//     <>
//       <img src={props.image} alt="profile" />
//       <h1>
//         {props.name}({props.id})
//       </h1>
//     </>
//   );
// };
// const CustomerInfo = (props) => {
//   return (
//     <>
//       <h2>{props.birthday}</h2>
//       <h2>{props.gender}</h2>
//       <h2>{props.job}</h2>
//     </>
//   );
// };
function Customer(props) {
  return (
    <>
      {/* {CustomerProfile(props)}
      {CustomerInfo(props)} */}
      <TableRow>
        <TableCell>{props.id}</TableCell>
        <TableCell>
          <img src={props.image} alt={props.name} />
        </TableCell>
        <TableCell>{props.name}</TableCell>
        <TableCell>{props.birthday}</TableCell>
        <TableCell>{props.gender}</TableCell>
        <TableCell>{props.job}</TableCell>
      </TableRow>
    </>
  );
}
export default Customer;
