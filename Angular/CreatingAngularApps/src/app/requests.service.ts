import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RequestsService {

    constructor(private http:HttpClient) {

    }
    public makeRequest(url):Promise<any> {
        return this.http.get(url,{responseType:"Text"}).toPromise().then((value)=>{
            console.log(value);
            return value;
        }).catch((error)=>{
            return error;
        });
    }
}
