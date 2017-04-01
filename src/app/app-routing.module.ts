import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ErrorComponent} from './error/error.component';
import {BlogComponent} from './blog/blog.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
        {path: '', component: BlogComponent},
        {path: '**', component: ErrorComponent}
      ]
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
