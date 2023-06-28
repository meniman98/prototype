import { Injectable } from '@angular/core';
import axios from 'axios';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DalleService {
  private baseUrl = "https://api.openai.com/v1/images/generations"
  constructor() { }

  async generateImage(prompt: string): Promise<any> {
    const headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${(environment.apiKey)}`,
    };

    const data = {
      "prompt": prompt,
      "n": 1,
      "size": "256x256"
    };

    try {
      const response = await axios.post(this.baseUrl, data, {headers: headers});
      console.log("Service reponse: ", response);
      return response.data;
    } catch(error) {
      console.error(error);
    }
  }
}
