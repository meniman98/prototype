import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class DalleService {
  private baseUrl = "https://api.openai.com/v1/images/generations"

  constructor() { }

  async generateImage(prompt: string, apiKey: string): Promise<any> {
    const headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
    };

    const data = {
      "prompt": prompt,
      "n": 1,
      "size": "512x512"
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
