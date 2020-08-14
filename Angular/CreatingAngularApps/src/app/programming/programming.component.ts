import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-programming',
    templateUrl: './programming.component.html',
    styleUrls: ['./programming.component.css']
})
export class ProgrammingComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
    data = {
        Subject: 'programming',
        headline:"what is programming?",
        description:"Computer programming is the process of designing and building an executable computer program for accomplishing a specific computing task. Programming involves tasks such as: analysis, generating algorithms, profiling algorithms' accuracy and resource consumption, and the implementation of algorithms in a chosen programming language. The source code of a program is written in one or more languages that are intelligible to programmers, rather than machine code, which is directly executed by the central processing unit. The purpose of programming is to find a sequence of instructions that will automate the performance of a task on a computer, often for solving a given problem. The process of programming thus often requires expertise in several different subjects, including knowledge of the application domain, specialized algorithms, and formal logic.",
        related: [
            "Java",
            "Python",
            "c++"
        ]
    }

}
