import { HfInference } from "@huggingface/inference";
import { Ingredients } from "./src/types/Ingredients.types";

const SYSTEM_PROMPT = `
You are a helpful cooking assistant. Your task is to provide a recipe based on the ingredients provided. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients.
Please respond directly with the recipe, including the following details:
1. A title for the recipe.
2. A list of ingredients (including quantities).
3. Step-by-step instructions for preparing the dish.
Do not include any additional commentary, thoughts, or explanations. Just provide the recipe.
Also format your response in markdown to make it easier to render to a web page
`

const client = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN);

export async function getRecipeFromMistral(ingredientsArr: Ingredients[]) {
  if (!ingredientsArr?.length) {
    throw new Error('No ingredients provided')
  }
  
  const ingredientsString = ingredientsArr.map(ingredient => {
    return ingredient.name
  }).join(", ")

  try {
    const chatCompletion = await client.chatCompletion({
      model: "deepseek-ai/DeepSeek-R1-Distill-Qwen-32B",
      // model: "mistralai/Mistral-Small-24B-Instruct-2501",
      messages: [
        {
          role: "user",
          content: `${SYSTEM_PROMPT}. I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`
        }
      ],
      provider: "together",
      max_tokens: 1200
    });
    console.log(chatCompletion.choices[0].message.content)
    return chatCompletion.choices[0].message.content
  } catch (error) {
    if(error instanceof Error) {
      console.error(error.message)
    }
  }
}



// import { OpenAI } from "openai";
// import { Ingredients } from "./src/types/Ingredients.types";

// const SYSTEM_PROMPT = `You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page`

// const client = new OpenAI({
// 	baseURL: "https://huggingface.co/api/inference-proxy/together",
// 	apiKey: import.meta.env.VITE_HF_ACCESS_TOKEN
// });

// export async function getRecipeFromMistral(ingredientsArr:  Ingredients[]) {
//   if (!ingredientsArr?.length) {
//     throw new Error('No ingredients provided')
//   }
  
//   const ingredientsString = ingredientsArr.join(", ")

//   console.log("please wait for the response")
//   try {
//     const chatCompletion  = await client.chat.completions.create({
//       model: "mistralai/Mistral-Small-24B-Instruct-2501",
//       messages: [
//         { 
//           role: "user", 
//           content: "What is the capital of France?"
//           // content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make! also Format your response in markdown to make it easier to render to a web page` 
//         },
//       ],
//       max_tokens: 500
//     });
//     console.log(chatCompletion .choices[0].message.content)
    
//     return chatCompletion .choices[0].message.content;
//   } catch (error) {
//     if(error instanceof Error) {
//       console.error(error.message)
//     }
//   }
// }