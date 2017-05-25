import { Injectable } from '@angular/core';
import { InsightlyService } from './insightly-service.service';
import {Observable} from 'rxjs/Rx';
import {Response } from '@angular/http';



@Injectable()
export class OportunityService {

  constructor(private baseService:InsightlyService) {


   }

   makeGet():Observable<Response>{
    return this.baseService.getRequest('Opportunities');
   }

}
