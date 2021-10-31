import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { CategoryComponent } from './components/category/category.component';

const routes: Routes = [
  {path:'',pathMatch:'full',component:BlogComponent},
  {path:'blogs',component:BlogComponent},
  {path:'categories',component:CategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
