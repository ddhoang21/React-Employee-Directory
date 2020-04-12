import React from "react";

function Employees(props) {
  return (
    <tbody>
      {props.employees.map((employee) => (
        <tr key={employee.id.value}>
          <td>
            <img alt="placeholder" src={employee.picture.thumbnail} />
          </td>
          <td>
            {employee.name.first} {employee.name.last}
          </td>
          <td>{employee.phone}</td>
          <td>{employee.email}</td>
          <td>
            {employee.dob.date.charAt(5)}
            {employee.dob.date.charAt(6)}-{employee.dob.date.charAt(8)}
            {employee.dob.date.charAt(9)}-{employee.dob.date.charAt(0)}
            {employee.dob.date.charAt(1)}
            {employee.dob.date.charAt(2)}
            {employee.dob.date.charAt(3)}
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default Employees;