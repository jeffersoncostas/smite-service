import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../requests-service/requests.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public noticias: any;

  constructor(private requests: RequestsService) {}

  ngOnInit() {
    this.getNoticias();
  }

  public getNoticias(): void {
    this.requests.getNoticia();
  }
}
