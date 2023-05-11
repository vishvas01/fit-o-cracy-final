import axios from 'axios';
import { backendUrl } from './utils';
const submit = document.getElementById('calculateJS');
submit.addEventListener('click', async e => {
	const form = document.querySelector('form');
	if (form.checkValidity()) {
        e.preventDefault();
		const weight = document.getElementById('weightJS').value;
		const height = document.getElementById('heightJS').value;
        try {
            if(localStorage.getItem('cookie')===null) throw Error('Register/Login First');
            const email = localStorage.getItem('cookie');
            const response = await axios.post(backendUrl + '/api/util/bmi', {
                email,
                weight,
                height
            });
        } catch (error) {
            console.log(error);
        }
	} else {
		console.log('Wrong');
	}
});