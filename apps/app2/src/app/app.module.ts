import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { Lazy2Component } from './lazy2/lazy2.component';
import { SharedUiModule } from '@multi-app/shared-ui'


const routes: Routes = [
	{
		path: 'app2',
		component: Lazy2Component

	}
]

@NgModule({
	declarations: [AppComponent, Lazy2Component],
	imports: [
		SharedUiModule,
		BrowserModule,
		RouterModule.forRoot(routes)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }

@NgModule({})
export class App2SharedModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: AppModule,
			providers: []
		}
	}
}