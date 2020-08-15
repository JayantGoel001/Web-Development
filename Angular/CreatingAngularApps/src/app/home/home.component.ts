import { Component, OnInit } from '@angular/core';
import { RequestsService } from "../requests.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
     public mathString;
    constructor(private request : RequestsService) {
        this.mathString = this.request.makeRequest("http://numbersapi.com/random").then((val)=>{
            this.mathString = val;
            console.log(this.mathString);
        });
        console.log(this.mathString);
     }

    ngOnInit(): void {
    }

    public makeRequest(){
        console.log("Make Request");
        this.request.makeRequest("http://numbersapi.com/random");
        this.mathString = this.request.makeRequest("http://numbersapi.com/random").then((val)=>{
            this.mathString = val;
            console.log(this.mathString);
        });
    }

}
