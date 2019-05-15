import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http'
import { AuthService } from './auth/auth.service';

interface Cat {
  name: string
}

@Injectable()
export class CatService {
  constructor(
    private http: HttpClient,
    private authService: AuthService
    ) {}

  getAllCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>('http://localhost:8000/api/cats')
  }

  getHW(): Observable<string> {
    return this.http.get<string>('http://localhost:8000/', {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.authService.accessToken}`)
    })   
  }

  getCat(name: string): Observable<Cat> {
    return this.http.get<Cat>('http://localhost:8000/api/cats/' + name)
  }

  insertCat(cat: Cat): Observable<Cat> {
    return this.http.post<Cat>('http://localhost:8000/api/cats/', cat)
  }

  updateCat(cat: Cat): Observable<void> {
    return this.http.put<void>(
      'http://localhost:8000/api/cats/' + cat.name,
      cat
    )
  }

  deleteCat(name: string) {
    return this.http.delete('http://localhost:8000/api/cats/' + name)
  }
}