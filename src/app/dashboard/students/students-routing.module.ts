import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StudentDetailPageComponent } from './pages/student-detail-page/student-detail-page.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';



const routes: Routes = [
  {
    path: '',
    component: StudentsPageComponent
  },
  {
    path: ':studentId',
    component: StudentDetailPageComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
  ]
})

export class StudentsRoutingModule { }
