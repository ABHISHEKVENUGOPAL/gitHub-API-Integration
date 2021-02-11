import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TaskOneComponent } from './task-one/task-one.component';
import { TaskTwoComponent } from './task-two/task-two.component';
import { TaskThreeComponent } from './task-three/task-three.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { Communication } from './communication/communication';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    TaskOneComponent,
    TaskTwoComponent,
    TaskThreeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    MatInputModule
  ],
  providers: [Communication],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(public communication: Communication){

  }
}
 