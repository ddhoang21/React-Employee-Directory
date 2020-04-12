import React from "react";
import API from '../utils/API';
import Employees from './EmployeeList';
import SearchDOB from './SearchDOB';
import SearchName from './SearchName';

class Main extends React.Component {
    state = {
      employees: [],
      search: "",
      sortType: "",
    };
  
    componentDidMount() {
      this.getEmployees();
    }

    getEmployees = () => {
      API.getEmployees()
        .then((res) => {
          this.setState({
            employees: res.data.results,
          });
          console.log(this.state.employees);
        })
        .catch((err) => console.log(err));
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
                    <div className='input-group col-7'>
                        <SearchDOB />
                    </div>
                    <div className='input-group col-3'>
                        <SearchName />
                    </div>
                </div>
            </nav>
            <div className="container">
            <table className="table">
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