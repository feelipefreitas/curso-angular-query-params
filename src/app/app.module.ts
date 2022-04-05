import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PersonDetailsComponent } from './components/person-details/person-details.component';

const ROUTES: Routes = [
  { path: 'people-list', component: PeopleListComponent },
  { path: 'person-details', component: PersonDetailsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    PersonDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
