import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { App1SharedModule } from './../../../app1/src/app/app.module'
import { App2SharedModule } from './../../../app2/src/app/app.module'

import { AppComponent } from './app.component';

const routes: Routes = [
	{ path: 'app1', loadChildren: './../../../app1/src/app/app.module#App1SharedModule' },
	{ path: 'app2', loadChildren: './../../../app2/src/app/app.module#App2SharedModule' },
   ];

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		RouterModule.forRoot(routes),
		App1SharedModule.forRoot(),
		App2SharedModule.forRoot()

	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }

