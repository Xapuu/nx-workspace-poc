import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmodulesComponent } from './submodules.component';
import { Routes, RouterModule } from '@angular/router';
import { LazyChildComponent } from './lazy-child/lazy-child.component';
import { SharedUiModule } from '@multi-app/shared-ui'

const routes: Routes = [
	{
		path: '',
		component: LazyChildComponent

	}
]

@NgModule({
	imports: [
		SharedUiModule,
		RouterModule.forChild(routes),
		CommonModule
	],
	declarations: [SubmodulesComponent, LazyChildComponent]
})
export class SubmodulesModule { }
