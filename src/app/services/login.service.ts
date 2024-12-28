import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

constructor(private http: HttpClient) {

}
GetLoginDetails(userName:any,password:any):Observable<any>{
  let httpheaders = new HttpHeaders();
  httpheaders=httpheaders.append('Content-Type', 'application/json');
  httpheaders=httpheaders.append('username',userName);
  httpheaders=httpheaders.append('password',password);

   return this.http.get('https://httptriggerfunction.azurewebsites.net/api/GetLoginDetails',{'headers':httpheaders});
}

}
