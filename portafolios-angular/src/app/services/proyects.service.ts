import { Injectable } from  '@angular/core';
import { HttpClient , HttpHeaders } from  '@angular/common/http';
import { apiGblobal } from '../services/config-global';
import { Proyect } from '../models/proyects'
import { Observable } from 'rxjs';

@Injectable()
export class ServicesProyects{
    public url :String
    constructor(
        public _http :HttpClient
    ){
        this.url = apiGblobal.url
    }

    getProyects() :Observable<any>{
        return this._http.get(this.url+'proyects')
    }

    saveProyect(proyect :Proyect):Observable<any>{
        let params = JSON.stringify(proyect);
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url +'proyects',params ,{headers :headers});
    }

    getProyect(id):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url +'proyects/'+id,{headers :headers});
    }

    deleteProyect(id):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.delete(this.url +'proyects/'+id,{headers :headers});
    }

    upDateProyect(proyect){
        let params = JSON.stringify(proyect);
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.put(this.url +'proyects/'+proyect._id,params,{headers :headers});
    }
}