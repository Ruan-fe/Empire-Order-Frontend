import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Session } from './session/session'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor( private http: HttpClient) { 
  }

 salvar(session:Session):Observable<Session>{
    return this.http.post<Session>('http://localhost:8080/sessions', session);
 }
 atualizar(session:Session):Observable<any>{
  return this.http.put<Session>(`http://localhost:8080/sessions/${session.id}`, session);
}
 getSession() : Observable<Session[]>{
   return this.http.get<Session[]>('http://localhost:8080/sessions');
 }
 getSessionById(id: number) : Observable<Session>{
   return this.http.get<any>(`http://localhost:8080/sessions/${id}`);
 } 
 deleteById(session:Session) : Observable<any>{
  return this.http.delete<any>(`http://localhost:8080/sessions/${session.id}`);
} 

}


