import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RequestsService } from './requests-service/requests.service';
import { RoutesModule } from './routes/routes.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RoutesModule, HttpClientModule],
  providers: [RequestsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
