import React from 'react';
import { useFormik } from 'formik';
import *  as Yup from 'yup';
import './LoginPage.css';
import { useState } from 'react';
import HomePage from '../HomePage/HomePage';
import history from '../history';

const LoginPage = () => {
    const[errorFlag,authenticateUser]=useState(false);
    const[disabledFlag,Loginbutton]=useState(true);
    const { errors, handleChange, values, handleSubmit } = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        validationSchema: Yup.object({
            username: Yup
                .string().required('Username is required'),
            password: Yup
                .string().required('Password is required')
        }),
        onSubmit: values => {
            let user_name = values.username;
            let password = values.password;
            if(user_name == 'foo' && password == 'bar'){
                history.push('/home')
                authenticateUser(false);
            }else{
                authenticateUser(true);
            }
        }

    });
    return (
        <div className="LoginBackground">
           <form onSubmit={handleSubmit}>
               {
                   errorFlag == true ? 
                   <h3>Invalid User!</h3> : null
               }
                <input type="text" name="username" placeholder="Username" id="username"
                    onChange={handleChange} value={values.username || ''}
                />
                <p style={{ color: 'red', fontSize: 20, fontFamily: 'bold', marginLeft:'22%' }}>{errors.username}</p>
                <br />
                <input type="text" name="password" placeholder="Password" id="password"
                    onChange={handleChange} value={values.password || ''}
                />
                <p style={{ color: 'red', fontSize: 20, fontFamily: 'bold', marginLeft:'22%'}}>{errors.password}</p>
                <button type="submit" id="login" onClick={handleSubmit}>Login</button>


            </form>
        </div>
    );
}
export default LoginPage;