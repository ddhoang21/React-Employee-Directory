import React from 'react';
import API from '../utils/API';
import Employees from './EmployeeList';

class Main extends React.Component {
    state = {
      employees: [],
      search: '',
      sortType: '',
    };
  
    componentDidMount() {
      this.getEmployees();
    }

    getEmployees = () => {
      API.getEmployees()
        .then((res) => {
          this.setState({
            employees: res.data.results
          });
          console.log(this.state.employees);
        })
        .catch((err) => console.log(err));
    };
    
    handleSortState = () => {
      const selectedEmployee = document.querySelector('#sortSelection');
      const output = selectedEmployee.value;
      if (output === 'name') {
        const sortedEmployees = this.state.employees;
        sortedEmployees.sort((a, b) => a.name.last.localeCompare(b.name.last));
        this.setState({ employees: sortedEmployees });
      }
      if (output === 'dob') {
        this.setState({ sortType: 'dob' });
        const sortedEmployees = this.state.employees;
        sortedEmployees.sort((a, b) => a.dob.date.localeCompare(b.dob.date));
        this.setState({ employees: sortedEmployees });
      }
      if (output === 'none') {
        this.setState({ sortType: 'none' });
      }
    };

    render() {
        return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarNav'
                    aria-controls='navbarNav'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon' />
                </button>
                <div className='collapse navbar-collapse row' id='navbarNav'>
                    <div className='col-5'></div>
                    <div className='input-group col-2'>
                        <select className ='form-control'
                            style={{
                                margin: '10px',
                                color: 'black'
                            }}
                            id='sortSelection'
                            onChange={this.handleSortState}
                            >
                            <option value='none'>Sort by</option>
                            <option value='name'>Last Name</option>
                            <option value='dob'>Year</option>
                        </select>
                    </div>
                    <div className='col-5'></div>
                </div>
            </nav>
            <div className='container'>
            <table className='table'>
                <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>DOB</th>
                </tr>
                </thead>
                <Employees
                sort={this.state.sortType}
                employees={this.state.employees}
                />
            </table>
            </div>
        </div>

    )};
};

export default Main;