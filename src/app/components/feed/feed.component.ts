import { Component, OnInit, Input } from '@angular/core';
import { NoticiaThumb } from '../../noticia-model/noticia-thumb.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  @Input() listaNoticias: NoticiaThumb[];

  constructor() {}

  ngOnInit() {}
}
