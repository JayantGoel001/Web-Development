import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-secret',
    templateUrl: './secret.component.html',
    styleUrls: ['./secret.component.css']
})
export class SecretComponent implements OnInit {

    constructor(private route:ActivatedRoute) { }
    public key;

    ngOnInit(): void {
        this.key = this.route.snapshot.params.key;
    }
}
