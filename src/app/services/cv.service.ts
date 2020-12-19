import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cv } from '../model/cv';
import { GenericService } from './generic-service';

@Injectable({
  providedIn: 'root'
})
export class CvService extends GenericService<Cv,number>{

  
  constructor(http:HttpClient) {
    const urlDatabaseCV = "http://localhost:5500/CRUD_CV";
    super(http,urlDatabaseCV);
  }
}
