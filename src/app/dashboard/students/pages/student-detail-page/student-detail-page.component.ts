import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Student } from 'src/app/core/models';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-student-detail-page',
  templateUrl: './student-detail-page.component.html',
  styleUrls: ['./student-detail-page.component.css']
})

export class StudentDetailPageComponent implements OnInit, OnDestroy {
  
  public student: Student | null = null
  private destroyed$ = new Subject()

  constructor(private readonly studentsService: StudentsService, private readonly activatedRoute: ActivatedRoute) {}

  ngOnDestroy(): void {
    this.destroyed$.next(true);
  }
  
  ngOnInit(): void {
    this.studentsService.getStudentById(parseInt(this.activatedRoute.snapshot.params['studentId'] || 0))
      .pipe(takeUntil(this.destroyed$))
      .subscribe((result) => this.student = result)
  }
}

