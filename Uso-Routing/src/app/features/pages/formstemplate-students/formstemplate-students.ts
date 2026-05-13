import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DialogformStudents } from '../dialogform-students/dialogform-students';
import { student } from '../../interfaces/Student';

@Component({
  selector: 'app-formstemplate-students',
  imports: [MatFormField, MatInputModule, MatLabel, MatDialogModule, MatError],
  templateUrl: './formstemplate-students.html',
  styleUrl: './formstemplate-students.scss',
})
export class FormstemplateStudents {

  studentForm: FormGroup;

  constructor(
    private fb: FormBuilder,

    private dialogRef: MatDialogRef<DialogformStudents>,

    @Inject(MAT_DIALOG_DATA) public data: student
  ) {

    this.studentForm = this.fb.group({
      name: [data?.name || '', [Validators.required, Validators.minLength(3)]],
      email: [data?.email || '', [Validators.required, Validators.email]],
      course: [data?.courseId || '', Validators.required]
    });

  }

  guardar(): void {

    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched();
      return;
    }

    this.dialogRef.close(this.studentForm.value);

  }

  cerrar(): void {
    this.dialogRef.close();
  }


}
