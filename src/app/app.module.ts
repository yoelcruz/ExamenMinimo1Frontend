import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRouting } from './app.routing';


// Componentes
import { AppComponent } from './app.component';
import { StudentModule } from './students/student.module';
import { SubjectModule } from './subjects/subject.module';
import { LocalizationModule } from './localizations/localization.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting,
    HttpClientModule,
    StudentModule,
    SubjectModule,
    LocalizationModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
