import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { INews } from './models/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  apiUrl: string = 'https://newsapi.org/v2/top-headlines?sources=techcrunch';
  apiKey: string;
  constructor(private http: HttpClient) {
    this.apiKey = environment.apiKey;
   }

   getNews(): Observable<INews[]> {
    return this.http.get<any>(`${this.apiUrl}&apiKey=${this.apiKey}`)
    .pipe(map(res => res.articles));
   }
}
