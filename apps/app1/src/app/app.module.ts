import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'


import { AppComponent } from './app.component';
import { Lazy1Component } from './lazy1/lazy1.component';
import { DataAccessModule } from '@multi-app/data-access';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NxModule } from '@nrwl/angular';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppService } from './services/app.service';

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
		loadChildren: () => import('./submodules/submodules.module').then(m => m.SubmodulesModule)
	}
]

@NgModule({
	declarations: [
		AppComponent,
		Lazy1Component,
	],
	imports: [
		NxModule.forRoot(),
		StoreModule.forRoot({}),
		EffectsModule.forRoot([]),
		StoreDevtoolsModule.instrument({ maxAge: 50 }),
		BrowserModule,
		DataAccessModule,
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
			providers: [AppService]
		}
	}
}