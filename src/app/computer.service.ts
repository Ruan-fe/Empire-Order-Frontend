import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Computer } from './computer/computer';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {

  constructor(private http: HttpClient) { }

  salvar(computer:Computer):Observable<Computer>{
    return this.http.post<Computer>('http://localhost:8080/computer',computer)
  }
  getComputer(): Observable<Computer[]>{
    return this.http.get<Computer[]>('http://localhost:8080/computer')
  }
}
