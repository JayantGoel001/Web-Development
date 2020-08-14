import { Component, OnInit,Input } from '@angular/core';

@Component({
    selector: 'app-subject',
    templateUrl: './subject.component.html',
    styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
    data = {
        Subject: 'Artificial Intelligence',
        headline:"what is AI?",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        related: [
            "Machine Learning",
            "Deep Learning",
            "Neural Networks"
        ]
    }

}
