import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public creatUserData =  {
      email:"",
      password:""
  }

  public createUser():void {
      console.log("createUser");
      console.log("Email:",this.creatUserData.email);
      console.log("password:",this.creatUserData.password);

  }
}
