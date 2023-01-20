import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDetailPageComponent } from './pages/student-detail-page/student-detail-page.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { StudentModalComponent } from './components/student-modal/student-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudentsRoutingModule } from './students-routing.module';



@NgModule({
  declarations: [
    StudentDetailPageComponent,
    StudentsPageComponent,
    StudentModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StudentsRoutingModule,
    SharedModule,
  ]
})
export class StudentsModule { }
