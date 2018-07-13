import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NoticiaThumb } from '../noticia-model/noticia-thumb.model';
import { FullNoticia } from '../noticia-model/full-noticia.model';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  private urlThumb: string =
    'https://cms.smitegame.com/wp-json/smite-api/get-posts/1?offset=0';

  private urlFullNoticia: string =
    'https://cms.smitegame.com/wp-json/smite-api/get-post/1?slug=';

  constructor(private http: HttpClient) {}

  public async getThumb(): Promise<NoticiaThumb[]> {
    return this.http
      .get(this.urlThumb)
      .toPromise()
      .then((noticiaThumb: NoticiaThumb[]) => {
        return noticiaThumb;
      });
  }
}
