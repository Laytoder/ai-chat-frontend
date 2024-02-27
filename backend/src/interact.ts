import express, { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import "dotenv/config";

const apiKey = process.env.VOICEFLOW_API_KEY;
const baseURL = "https://general-runtime.voiceflow.com";

export async function startInteract(
  userID: string,
  userInput: string
): Promise<any> {
  const body = {
    action: {
      type: "text",
      payload: userInput,
    },
  };

  const response = await axios({
    method: "POST",
    baseURL: baseURL,
    url: `/state/user/${userID}/interact`,
    headers: {
      Authorization: apiKey,
    },
    data: body,
  });

  return response.data;
}

export function interactHandler(req: Request, res: Response): void {
  const userID = req.body.userID || uuidv4();
  const userInput = req.body.userInput;

  startInteract(userID, userInput)
    .then((result) => {
      res
        .status(200)
        .json({
          userID: userID,
          data: result[result.length - 1].payload.message,
        });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    });
}
