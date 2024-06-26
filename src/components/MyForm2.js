import React, { useState } from 'react';

function MyForm2() {
    // all form inputs are stored in this state
    const [inputs, setInputs] = useState({});

    const [result, setResult] = useState('');

    /**
     * Handle input change in the form. Note that the name of the input
     * is used to determine which state to update but no hard-coding is
     * required.
     * @param event
     */
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // the expression [name] is evaluated to the value of the variable name
        // note that the square brackets [] do not denote an array!
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setResult(JSON.stringify(inputs)); // for demonstration purposes only
    }

    return (
        <form onSubmit={handleSubmit}>
            <label className="form-label">Name:</label>
            <input
                type="text"
                name="username"
                value={inputs.username || ""} // why this || ""? because if the value is undefined, React will complain
                onChange={handleChange}
                className="form-control"
            />
            <label className="form-label">Age:</label>
            <input
                type="number"
                name="age"
                value={inputs.age || ""}
                onChange={handleChange}
                className="form-control"
            />
            <button className="btn btn-primary m-3" type="submit">Submit</button>
            {result ? <div className="border p-3">Result is {result}</div> : ""}
        </form>
    )
}

export default MyForm2;