import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-internet',
    templateUrl: './internet.component.html',
    styleUrls: ['./internet.component.css']
})
export class InternetComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
    data = {
        Subject: 'Internet',
        headline:"what is Internet?",
        description:"The Internet is the global system of interconnected computer networks that uses the Internet protocol suite (TCP/IP) to link devices worldwide. It is a network of networks that consists of private, public, academic, business, and government networks of local to global scope, linked by a broad array of electronic, wireless, and optical networking technologies. The Internet carries a vast range of information resources and services, such as the inter-linked hypertext documents and applications of the World Wide Web (WWW), electronic mail, telephony, and file sharing.",
        related: [
            "The World Wide Web",
            "HTTP",
            "computer network"
        ]
    }

}
