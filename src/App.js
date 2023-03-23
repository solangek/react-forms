import React from 'react';
import MyForm from './components/MyForm';
import MyForm2 from "./components/MyForm2";

function App() {
    return (
        <div className="App container">
            <h2>First example</h2>
            <MyForm />
            <h2>Second example</h2>
            <MyForm2 />
        </div>
    );
}
export default App;
