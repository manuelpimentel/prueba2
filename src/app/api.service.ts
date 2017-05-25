import { Injectable } from '@angular/core';
import { Http,ConnectionBackend,RequestOptions,Request,RequestOptionsArgs,Response,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import {Course} from './common/course';


@Injectable()
export class ApiService {
 commonHeaders:Headers; //= new Headers({ 'Content-Type': 'text/plain' });
 commonOptions:RequestOptions; //= new RequestOptions({ headers: this.commonHeaders });
 private BaseUrl:string ="https://api.insight.ly/v2.1/";

  constructor(private http: Http) {

   }

   getCourses():Observable<Response>{
     return this.http.get(this.BaseUrl,this.commonOptions).map((res:Response)=>{
        return res.json();
     },(error)=>{
        error.json();
     });
   }

   error(error:any){
     return Promise.reject(error.message || error);
   }

}
