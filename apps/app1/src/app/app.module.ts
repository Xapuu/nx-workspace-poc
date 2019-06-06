import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'


import { AppComponent } from './app.component';
import { Lazy1Component } from './lazy1/lazy1.component';

const routes: Routes = [
	{
		path: 'app1',
		component: Lazy1Component

	}
]

@NgModule({
	declarations: [AppComponent, Lazy1Component],
	imports: [
		BrowserModule,
		RouterModule.forRoot(routes)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }

@NgModule({})
export class App1SharedModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: AppModule,
			providers: []
		}
	}
}