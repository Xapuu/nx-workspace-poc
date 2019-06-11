import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'


import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NxModule } from '@nrwl/angular';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UiApp1UiModule, Lazy1Component } from '@multi-app/ui/app1-ui';


const routes: Routes = [
	{
		path: 'common',
		component: Lazy1Component
	},
	{
		path: 'app1',
		component: Lazy1Component
	},
	{
		path: 'lazier',
		loadChildren: () => import('@multi-app/feautres/app1-spec').then(m => m.FeautresApp1SpecModule)
	}
]

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		UiApp1UiModule,
		NxModule.forRoot(),
		StoreModule.forRoot({}),
		EffectsModule.forRoot([]),
		StoreDevtoolsModule.instrument({ maxAge: 50 }),
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