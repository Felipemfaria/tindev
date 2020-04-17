import React, { useState } from 'react'
import './Login.css'

import api from '../services/api';

import logo from '../assets/logo.svg';

export default function Login({ history }) {
    const [username, setUsername] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await api.post('/devs', {
            username, 
        }).catch(function (error) {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {

              console.log(error.request);
            } else {
              console.log('Error', error.message);
            }
            console.log(error.config);
          });

        if(response.data.message){
            alert(response.data.message);
            return;
        }
        
        const { _id } = response.data;

        history.push(`/dev/${_id}`)
    }
    return  (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Tindev"/>           
                <input 
                    placeholder="Digite seu usuário no github"
                    value={username}
                    onChange={e => setUsername(e.target.value)}/>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

 