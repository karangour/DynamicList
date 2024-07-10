

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FormComponent from './FormComponent';

const App = () => {
    const [formConfig, setFormConfig] = useState(null);

    useEffect(() => {
        axios.get('http://locahost:4000/api/form-config')
            .then(response => setFormConfig(response.data))
            .catch(error => console.error('Error:', error))
    }, []);

    return (
        <div className="App">
            <h1>Dynamic Form</h1>
            <FormComponent formConfig={formConfig} />
        </div>
    )
}

export default App;