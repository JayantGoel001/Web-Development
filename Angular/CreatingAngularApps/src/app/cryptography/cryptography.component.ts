import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-cryptography',
    templateUrl: './cryptography.component.html',
    styleUrls: ['./cryptography.component.css']
})
export class CryptographyComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
    data = {
        Subject: 'Cryptography',
        headline:"what is Cryptography?",
        description:"Cryptography or cryptology is the practice and study of techniques for secure communication in the presence of third parties called adversaries. More generally, cryptography is about constructing and analyzing protocols that prevent third parties or the public from reading private messages; various aspects in information security such as data confidentiality, data integrity, authentication, and non-repudiation are central to modern cryptography. Modern cryptography exists at the intersection of the disciplines of mathematics, computer science, electrical engineering, communication science, and physics. Applications of cryptography include electronic commerce, chip-based payment cards, digital currencies, computer passwords, and military communications.",
        related: [
            "Diffie-Hellman key exchange",
            "Alan Turing",
            "Blockchains"
        ]
    }

}
