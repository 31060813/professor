import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Professor} from '../models/professor';

@Injectable({
  providedIn: 'root'
})

export class ProfessorService {
private apiUrl = 'http://localhost:3000/';



  constructor(private http: HttpClient) { }

   getListaProfessor(): Observable<Professor[]> {
    const url = this.apiUrl + 'professores';
    return this.http.get<Professor[]>(url);
  }
}
