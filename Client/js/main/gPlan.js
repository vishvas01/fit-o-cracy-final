import axios from 'axios';
import { backendUrl } from './utils';

document.getElementById('planForm').addEventListener('submit',async function(event) {
    event.preventDefault();
  
    // Collect form data
    const formData = new FormData(this);
  
    // Prepare data for the POST request
    const requestData = {};
    for (const [key, value] of formData.entries()) {
      requestData[key] = value;
    }
    try {
      const response = await axios.post(backendUrl+'/api/gplan',requestData)
      console.log(response);
      const planResult = document.getElementById('planResult');
      planResult.innerText = response.data.generatedPlan;
    } catch (error) {
      console.log(error);      
    }
  });