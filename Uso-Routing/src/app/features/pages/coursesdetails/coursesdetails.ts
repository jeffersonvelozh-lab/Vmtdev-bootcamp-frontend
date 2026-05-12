import { Component, OnInit } from '@angular/core';
import { course } from '../../interfaces/course';
import { CourseService } from '../../services/courses/course';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-coursesdetails',
  imports: [MatCardModule, MatChipsModule, MatButtonModule],
  templateUrl: './coursesdetails.html',
  styleUrl: './coursesdetails.scss',
})
export class Coursesdetails implements OnInit {
  course?: course;
  erroMessage: string = '';

  constructor(private courseService: CourseService,
    private route: ActivatedRoute
  ){}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.courseService.getById(id).subscribe({
        next: (data) => this.course = data,
        error: () => this.erroMessage = 'Error al cargar el curso'
      });
    }
  }
}
