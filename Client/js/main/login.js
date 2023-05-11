import axios from 'axios';
import { backendUrl } from './utils';
const submit = document.getElementById('jsButtonSubmit');
submit.addEventListener('click', async e => {
	const form = document.querySelector('form');
	if (form.checkValidity()) {
        e.preventDefault();
		const email = document.getElementById('email').value;
		const password = document.getElementById('password').value;
        console.log(email,password);
        try {
            const response = await axios.post(backendUrl + '/api/auth/login', {
                email,
                password,
            });
            localStorage.setItem('cookie',response.data.email);    
            window.location.href = "../../index.html";        
        } catch (error) {
            console.log(error);
        }
	} else {
		console.log('Wrong');
	}
});