import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {firstValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DalleService {
  private baseUrl = "https://api.openai.com/v1/images/generations"

  constructor(private http: HttpClient) {
  }

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
      const response = await firstValueFrom(this.http.post(this.baseUrl, data, {headers: headers}));
      console.log("Service response: ", response);
      return response;
    } catch(error) {
      console.error(error);
      throw error;
    }

  }
}
