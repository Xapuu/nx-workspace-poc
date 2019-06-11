import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { NxModule } from '@nrwl/angular';

import { AppComponent } from './app.component';
import { SharedUiModule } from '@multi-app/shared-ui'
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('@multi-app/features/app2-spec').then(m => m.FeaturesApp2SpecModule)
	}
]

@NgModule({
	declarations: [AppComponent],
	imports: [
		NxModule.forRoot(),
		StoreModule.forRoot({}),
		EffectsModule.forRoot([]),
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