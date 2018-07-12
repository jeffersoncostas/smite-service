import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NoticiaThumb } from '../noticia-model/noticia-thumb.model';
import { FullNoticia } from '../noticia-model/full-noticia.model';
import { Subscription } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  private urlThumb: string =
    'https://cms.smitegame.com/wp-json/smite-api/get-posts/1?offset=0';

  private urlFullNoticia: string =
    'https://cms.smitegame.com/wp-json/smite-api/get-post/1?slug=';

  constructor(private http: HttpClient) {}

  public getThumb() {}

  public getNoticia(): Subscription {
    return this.http
      .get(this.urlThumb)

      .subscribe((data: NoticiaThumb[]) => {
        data.forEach((noticia: NoticiaThumb) => {
          this.getFullNoticia(noticia).then(data => {
            console.log(data);
            return data;
          });
        });
      });
  }

  private getFullNoticia(noticiaThumb: NoticiaThumb) {
    return this.http
      .get(this.urlFullNoticia + noticiaThumb.slug)
      .forEach((data: FullNoticia) => {
        console.log(data);
        data === undefined ? (data = null) : data;
        return data;
      });
  }
}
