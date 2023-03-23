import React, { useState } from 'react';

function MyForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [result, setResult] = useState('');

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        setResult(JSON.stringify(formData));
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                <label class="form-label">Name:</label>
                <input type="text" name="name" className="form-control" value={formData.name} onChange={handleInputChange}/>
                <label class="form-label">Email: </label>
                <input type="email" name="email" className="form-control" value={formData.email} onChange={handleInputChange} />
                <label class="form-label">Message: </label>
                <textarea name="message" className="form-control"  value={formData.message} onChange={handleInputChange}></textarea>
                <button class="btn btn-primary m-3" type="submit">Submit</button>
                </div>
            </form>

            {result ? <div className="border p-3">Result is {result}</div> : ""}
        </>
    );
}

export default MyForm;