import React from "react";

function SearchDOB() {
    return (
        <div className='input-group'>
            <div className='input-group-prepend'>
                <span className='input-group-text' id=''>
                DOB
                </span>
            </div>
            <input
            type='date' 
            className='form-control'
            />
            <input 
            type='date' 
            className='form-control'
            />
        </div>
)};

export default SearchDOB;