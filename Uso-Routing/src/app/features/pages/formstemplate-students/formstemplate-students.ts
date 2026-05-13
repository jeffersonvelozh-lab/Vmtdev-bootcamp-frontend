import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-formstemplate-students',
  imports: [MatFormField, MatInputModule, MatLabel, MatDialogModule],
  templateUrl: './formstemplate-students.html',
  styleUrl: './formstemplate-students.scss',
})
export class FormstemplateStudents {

}
