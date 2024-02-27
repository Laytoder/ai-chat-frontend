import axios from "axios";

async function genAiRes(userInput: string, userID?: string): Promise<any> {
  try {
    const requestBody = userID ? { userID, userInput } : { userInput };

    const response = await axios.post(
      "http://localhost:3000/interact",
      requestBody
    );

    return response.data;
  } catch (error) {
    console.log("Error while generating ai response from server");
  }
}

export default genAiRes;
