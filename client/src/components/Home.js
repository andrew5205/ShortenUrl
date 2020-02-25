import React, {useState} from 'react';
// due to form data


import axios from 'axios';
// due to make some call back to the server 
import {Link, navigate} from '@reach/router';


// import AuthorForm from '../components/AuthorForm';

const Home = () => {

    const [formState, setFormState] = useState({
        name: '',
    })

    // validation 
    const [errors, setErrors] = useState([]);



    function onChangeHandler(event) {
        const {name, value} = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        axios.post('http://localhost:4500/api/urls', formState)  
            .then(()=> navigate('/'))  //what path we r trying to go to // navigate to another page in the app 
            .catch( err => {  //validation
                const errorResponse = err.response.data.errors;
                const errorArr = [];

                // const arr = [];
                for ( const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            });
    }

    // // add on for validation 
    // function sendApiRequest(data) {
    //     return axios.post('http://localhost:4500/api/authors', data);
    // }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                {errors.map((err, i) => (
                    <p key={i} style={{ color: 'red' }}>{err}</p>))}
                <div>
                    <label>Name:</label> <br/>
                    <input
                        name="name"
                        value={formState['name']}
                        onChange={onChangeHandler}
                    />
                </div>
                <div>
                    <button onClick={() => navigate('/') }>Cancel</button> {' '}
                    <button>Submit</button>
                </div>
            </form>
        </div>
    );

}

export default NewAuthor;




