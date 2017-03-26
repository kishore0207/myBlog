import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,Validators  } from '@angular/forms';
import { CommonService  } from '../../shared/service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  providers: [CommonService]
})
export class LoginComponent implements OnInit {
private loginForm: FormGroup;
  constructor(private fb: FormBuilder, private cs: CommonService) {
   this.createloginForm();
   }
  ngOnInit() {
  }

createloginForm(){
   this.loginForm = this.fb.group({
        email:['test12@gmail.com', Validators.required ],
        password:['12345', Validators.required ]
      });
};
onSubmit() {
  const loginData = this.loginForm.value;

  this.cs.login('http://localhost/task_manager/v1/login',loginData).subscribe(result => { console.log(result)});

}
}
