import React, { useState } from 'react';

function MyForm() {
    // form inputs are stored as separate states
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [result, setResult] = useState('');

    /**
     * Handle input change in the form. Note that the name of the input
     * is used to determine which state to update.
     * @param event
     */
    function handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        switch (name) {
            case "name":
                setName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "message":
                setMessage(value);
                break;
            default:
                break;
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        setResult(JSON.stringify({ name, email, message })); // for demonstration purposes only
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                <label className="form-label">Name:</label>
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={name || ""} // why this || ""? because if the value is undefined, React will complain
                    onChange={handleInputChange}/>
                <label className="form-label">Email: </label>
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={email || ""}
                    onChange={handleInputChange} />
                <label className="form-label">Message: </label>
                <textarea
                    name="message"
                    className="form-control"
                    value={message || ""}
                    onChange={handleInputChange}></textarea>
                <button className="btn btn-primary m-3" type="submit">Submit</button>
                </div>
            </form>

            {result ? <div className="border p-3">Result is {result}</div> : ""}
        </>
    );
}

export default MyForm;