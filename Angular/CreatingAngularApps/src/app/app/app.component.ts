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
  private callme():void {
      console.log("Call me! I am a function.");
  }
  ngOnInit(){
      console.log("Component is Initialized");
      this.callme();
  }
  title = 'Creating App Of Angular';
  object = {
      headline:"what is AI?",
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }

  array = [
      "Machine Learning",
      "Deep Learning",
      "Neural Networks"
  ]
}
