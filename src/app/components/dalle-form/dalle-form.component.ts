import { Component } from '@angular/core';
import { DalleService } from 'src/app/services/dalle.service';

@Component({
  selector: 'app-dalle-form',
  templateUrl: './dalle-form.component.html',
  styleUrls: ['./dalle-form.component.css']
})
export class DalleFormComponent {
  prompt = ""
  apiKey = ""
  imageSrc = ""

  constructor(private dalleService: DalleService) { }

  async onSubmit() {
    try {
      const response = await this.dalleService.generateImage(this.prompt, this.apiKey);
      console.log("Form response: ", response);
      this.imageSrc = response.data[0].url;
    } catch (error) {
      console.error(error);
    }
  }

}
