import { Component } from '@angular/core';
import { NewsService } from '@app/news.service';
import { INews } from '@app/models/news.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  articles: INews[];
  constructor(private news: NewsService) {
    this.articles = [];
  }

  ionViewDidEnter() {
    this.news.getNews().subscribe(res => this.articles = res);
  }

}
