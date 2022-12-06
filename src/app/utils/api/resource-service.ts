import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export abstract class ResourceService<T, I> {

  constructor(private http: HttpClient, private baseUrl: string) { }

  get(): Observable<T[]> {
    return this.http.get<T[]>(`${this.baseUrl}`);
  }

  getById(id: I): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${id}`);
  }

  post(item: T): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}`, item);
  }

  // ...
}