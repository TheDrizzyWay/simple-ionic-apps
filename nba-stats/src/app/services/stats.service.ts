import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatsService extends GenericService<Stats> {

  constructor(http: HttpClient) {
    super(http, 'statsurl', 'statsendpoint');
   }
}
