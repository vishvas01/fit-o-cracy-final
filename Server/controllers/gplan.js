import * as dotenv from "dotenv";
// import { gplanModal } from '../modles/gplanModal.js';

dotenv.config();

export const gplan = async (req, res, next) => {
  const requestData = req.body.requestData;

  const apiKey = AIKEY;
  const prompt = `You are a highly renowned health and nutrition expert FitnessGPT. Take the following information about me and create a custom diet and exercise plan and display them with detailed workouts. I am ${req.body.age} years old, ${req.body.gender}. My height is ${req.body.height}. My current weight is ${req.body.currentWeight}. My current medical conditions are ${req.body.medicalConditions}. I have food allergies to ${req.body.foodAllergies}. My primary fitness and health goals are ${req.body.primaryFitnessHealthGoals}. I can commit to working out ${req.body.howManyDaysCanYouWorkoutEachWeek} days per week. I prefer and enjoy ${req.body.exercisePreference} as my type of workout. I have a diet preference of ${req.body.dietPreference}. I want to have ${req.body.howManyMealsPerDay} Meals and ${req.body.howManySnacksPerDay} Snacks. I dislike eating and cannot eat ${req.body.listFoodsYouDislike}.`;

  const data = {
    prompt: prompt,
    max_tokens: 1000, // Adjust the max tokens as needed
    temperature: 0.7, // Adjust the temperature as needed
    n: 1, // Generate a single response
    model: "text-davinci-003",
  };

  fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((responseData) => {
      console.log("Response from API:", responseData); 

      if (
        responseData &&
        responseData.choices &&
        responseData.choices.length > 0
      ) {
        const generatedPlan = responseData.choices[0].text;
        res.status(201).json({ message: "Generated AI Reply!", generatedPlan});
      } else {
        console.log("Unexpected response from ChatGPT API:", responseData);
        res.json({ message: "No Reply"});
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
