import { Component, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Student } from 'src/app/core/models';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-student-modal',
  templateUrl: './student-modal.component.html',
  styleUrls: ['./student-modal.component.css']
})
export class StudentModalComponent {

  firstNameControl = new FormControl('', [Validators.required])
  lastNameControl = new FormControl('', [Validators.required, Validators.email])
  studentForm = new FormGroup({
    firstName: this.firstNameControl,
    lastName: this.lastNameControl,
  });

  constructor(
    private readonly matDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: Student | undefined,
  ) {
    if (data) {
      this.studentForm.patchValue(data);
    }
  }

  close() {
    this.matDialog.closeAll()
  }
}
