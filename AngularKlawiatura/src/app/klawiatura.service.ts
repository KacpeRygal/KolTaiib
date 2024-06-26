import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KlawiaturaResponseDTO } from './models/klawiatura';
import { KlawiaturaRequestDTO } from './models/request';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KlawiaturaService {

  constructor(private httpClient: HttpClient) { }

  public get(){
   return this.httpClient.get<KlawiaturaResponseDTO[]>('https://localhost:7011/api/Klawiatura')
  }
 
  public post(body: KlawiaturaRequestDTO):Observable<void>{
    return this.httpClient.post<void>('https://localhost:7011/api/Klawiatura',body);
  }

  public delete(id: number): Observable<void> {
    return this.httpClient.delete<void>('https://localhost:7011/api/Klawiatura/?id='+id);
  }
}
