import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http'


interface Cat {
  name: string
}

@Injectable()
export class UserService {
  constructor(
    private http: HttpClient
    ) {}

  checkUser(email, token) {
    return this.http.get<string>('http://localhost:8000/api/checkUser/' + email, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    })  
  }

  createUser(email, token) {
    return this.http.post<string>('http://localhost:8000/api/createUser/', {email: email},{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    })  
  }
}