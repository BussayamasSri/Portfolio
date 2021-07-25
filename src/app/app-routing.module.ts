import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UxuiComponent } from './components/uxui/uxui.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'uxui', component: UxuiComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
