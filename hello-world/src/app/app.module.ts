import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';
import { from } from 'rxjs';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
