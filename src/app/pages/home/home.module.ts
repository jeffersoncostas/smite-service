import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { ComponentsModule } from '../../components/components.module';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), ComponentsModule],
  exports: [],
  declarations: [HomeComponent],
  providers: []
})
export class HomeModule {}
