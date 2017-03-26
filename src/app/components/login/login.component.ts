import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,Validators  } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
private loginForm: FormGroup;
  constructor(private fb: FormBuilder) {
   this.createloginForm();
   }
  ngOnInit() {
  }

createloginForm(){
   this.loginForm = this.fb.group({
        email:['', Validators.required ],
        password:['', Validators.required ]
      });
};
onSubmit() {
  const registerData = this.loginForm.value;
  console.log(registerData);

}
}
