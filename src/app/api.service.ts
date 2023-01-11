import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getSummary(){
    return this.http.get('/summary').pipe(
      tap((res:any)=>console.log('res', res))
    )
  }
}
