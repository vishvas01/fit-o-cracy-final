import axios from 'axios';
import { backendUrl } from './utils';

const submit = document.getElementById('jsButtonSubmit');
submit.addEventListener('click', async e => {
	const form = document.querySelector('form');
	if (form.checkValidity()) {
        e.preventDefault();
		const first_name = document.getElementById('first_name').value;
		const last_name = document.getElementById('last_name').value;
		const email = document.getElementById('email').value;
		const password = document.getElementById('password').value;
		const phone_number = document.getElementById('phone_number').value;

        const options = document.querySelectorAll('input[name="gender"]');
        var gender;
        for (var i = 0; i < options.length; i++) {
            if (options[i].checked) {
                gender = options[i].value;
                break;
            }
        }
        try {
            const response = await axios.post(backendUrl + '/api/auth/signup', {
                first_name,
                last_name,
                email,
                password,
                phone_number,
                gender,
            });
            console.log(response);
            window.location.href = "../../login.html";
        } catch (error) {
            console.log(error);
        }
	} else {
		console.log('Wrong');
	}
});