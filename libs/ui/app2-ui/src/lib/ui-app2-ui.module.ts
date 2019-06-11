import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lazy2Component } from './components/lazy2/lazy2.component';
import { SharedUiModule } from '@multi-app/shared-ui'

@NgModule({
	imports: [
		CommonModule,
		SharedUiModule
	],
	declarations: [Lazy2Component],
	exports: [Lazy2Component]
})
export class UiApp2UiModule { }
