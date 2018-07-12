import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../requests-service/requests.service';
import { NoticiaThumb } from '../noticia-model/noticia-thumb.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public noticiasThumb: NoticiaThumb[];

  constructor(private requests: RequestsService) {}

  ngOnInit() {
    this.getNoticias();
  }

  public getNoticias(): void {
    this.requests.getThumb().then((data: NoticiaThumb[]) => {
      console.log(data);
      this.noticiasThumb = data;
    });
  }
}
