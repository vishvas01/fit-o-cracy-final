import axios from 'axios';
import { backendUrl } from './utils';
const submit = document.getElementById('jsButtonSubmit');
submit.addEventListener('click', async e => {
	const form = document.querySelector('form');
	if (form.checkValidity()) {
        e.preventDefault();
		const email = document.getElementById('email').value;
		const password = document.getElementById('password').value;
        try {
            const response = await axios.post(backendUrl + '/api/auth/signup', {
                email,
                password,
            });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
	} else {
		console.log('Wrong');
	}
});