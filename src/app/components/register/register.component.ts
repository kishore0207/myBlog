import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,Validators  } from '@angular/forms';

@Component({
  selector: 'register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
private registerForm: FormGroup;
  constructor(private fb: FormBuilder) {
   this.createRegisterForm();
   }

  ngOnInit() {
  }

createRegisterForm(){
   this.registerForm = this.fb.group({
        name: ['', Validators.required ],
        email:['', Validators.required ],
        password:['', Validators.required ]
      });
};
onSubmit() {
  const registerData = this.registerForm.value;
  console.log(registerData);
}
}
