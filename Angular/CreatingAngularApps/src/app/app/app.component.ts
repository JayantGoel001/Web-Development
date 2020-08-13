import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(){
      console.log("Component is constructed");
  }
  public callme():void {
      console.log("Call me! I am a function.");
  }
  ngOnInit(){
      console.log("Component is Initialized");
      this.callme();
  }
  
}
