import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

  private _baseUrl: string = "http://localhost:8080/api"
  constructor(private _http: Http) { }

  public Get<T>(subUrl: string): Observable<T> {
    let url = this.getUrl(subUrl);
    return this._http.get(url)
      .map(res => res.json() as T);
  }

  public Post<T, U>(subUrl: string, data: U): Observable<T> {
    let url = this.getUrl(subUrl);
    return this._http.post(url, data)
      .map(res => res.json() as T);
  }
  
  private getUrl(subUrl: string): string {
    return `${this._baseUrl}/${subUrl}`
  }
}
