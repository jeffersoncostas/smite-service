import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedComponent } from './feed/feed.component';

@NgModule({
  imports: [CommonModule],
  exports: [FeedComponent],
  declarations: [FeedComponent],
  providers: []
})
export class ComponentsModule {}
