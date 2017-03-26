import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,Validators  } from '@angular/forms';
@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html'
})
export class TasksComponent implements OnInit {
private RegisterTask: FormGroup;
  constructor(private fb: FormBuilder) {
   this.createRegisterTask();
   }
  ngOnInit() {
  }

createRegisterTask(){
   this.RegisterTask = this.fb.group({
        task:['', Validators.required ]
      });
};
onSubmit() {
  const registerData = this.RegisterTask.value;
  console.log(registerData);

}
}
