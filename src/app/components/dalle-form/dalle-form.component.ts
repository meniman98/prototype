import {Component} from '@angular/core';
import {DalleService} from 'src/app/services/dalle.service';
import {FormControl, Validators, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-dalle-form',
  templateUrl: './dalle-form.component.html',
  styleUrls: ['./dalle-form.component.css']
})
export class DalleFormComponent {
  prompt = ""
  promptControl: FormControl;
  imageSrc = ""

  constructor(private dalleService: DalleService) {
    this.promptControl = new FormControl("", [
      Validators.required,
      Validators.minLength(7),
      Validators.maxLength(250),
      Validators.pattern(/^[a-zA-Z0-9 ]*$/)
    ])
  }

  onSubmit() {
    this.dalleService.generateImage(this.promptControl.value)
      .then(response => {
        // Handle the response here.
        console.log("Form response: ", response);
        this.imageSrc = response.data[0].url;
      })
      .catch(error => {
        // Handle any errors here.
        console.error(error);
      });
  }

}
