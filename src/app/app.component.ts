import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') signupForm: NgForm;
  defaultSecretQ = 'pet';
  answer = "";
  genders = ['male', 'female']
  formSubmitted = false;

  user = {
    username: '',
    email: '',
    secretquestion: '',
    secretquestionanswer: '',
    gender: ''
  }

  suggestUserName() {
    const suggestedName = 'Superuser';

    this.signupForm.form.patchValue({ userData: {
      username: suggestedName
    }});
  }

  // we can also use this function, if we are using it
  // we need to pass local ref object in  click event..
 /*  onSubmit(form: NgForm) {
    console.log('form submitted...')
    console.log(form)
    console.log(form.value)
  } */

  onSubmit(){
    console.log('form submitted...')
    console.log(this.signupForm)
    console.log(this.signupForm.value)

    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretquestion = this.signupForm.value.secret;
    this.user.secretquestionanswer = this.signupForm.value.questionanswer;
    this.user.gender = this.signupForm.value.gender;

    this.formSubmitted = true;
  }

  onReset(){
    this.signupForm.reset();
  }
}
