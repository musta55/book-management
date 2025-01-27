import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BookListComponent } from './book-list/book-list.component';
import { UpdateBookComponent } from './update-book/update-book.component';

const routes: Routes = [
  {path:'', component:BookListComponent},
  {path:'books', component:BookListComponent},
  {path:'updateBook', component:UpdateBookComponent},
  {path:'aboutUs', component:AboutUsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
