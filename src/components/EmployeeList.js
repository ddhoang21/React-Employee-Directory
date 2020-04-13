import React from 'react';

function Employees(props) {
  return (
    <tbody>
        {props.employees.map(employee => (
          <tr>
            <td><img alt={`img`} src={employee.picture.medium}></img></td>
            <td>{employee.name.first} {employee.name.last}</td>
            <td>{employee.phone}</td>
            <td>{employee.email}</td>
            <td>{new Date(employee.dob.date).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
  );
}

export default Employees;