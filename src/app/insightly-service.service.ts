import { Injectable } from '@angular/core';
import { Http,ConnectionBackend,RequestOptions,Request,RequestOptionsArgs,Response,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import {Course} from './common/course';



@Injectable()
export class InsightlyService{
  commonHeaders:Headers; 
  commonOptions:RequestOptions; 
  BaseUrl:string ="https://api.insight.ly/v2.1/";


  constructor(private http: Http) { 
    this.commonHeaders=new Headers({ 'Authorization': 'Basic MjE2NWZlMjYtM2RkMy00Y2FmLWE1NjctOTJmODZlYjVmMWNk' });
    this.commonOptions=new RequestOptions({ headers: this.commonHeaders });
  }

  postRequest(url:string,body:any):Observable<Response>{
    return this.http.post(this.BaseUrl+url,body,this.commonOptions)
    .map((res:Response)=>{
        return res.json();
    },(err)=>{
        return err.json();
    });

  }

   putRequest(url:string,body:any):Observable<Response>{
    return this.http.put(this.BaseUrl+url,body,this.commonOptions)
    .map((res:Response)=>{
        return res.json();
    },(err)=>{
        return err.json();
    });

  }
  
  getRequest(url:string):Observable<Response>{
      console.log(this.commonOptions.headers.values);
      return null;
    /*return this.http.get(this.BaseUrl+url,this.commonOptions)
    .map((res:Response)=>{
        return res.json();
    },(err)=>{
        return err.json();
    });*/

  }

   deleteRequest(url:string):Observable<Response>{
    return this.http.delete(this.BaseUrl+url,this.commonOptions)
    .map((res:Response)=>{
        return res.json();
    },(err)=>{
        return err.json();
    });
  }

}
