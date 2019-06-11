import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiModule } from "@multi-app/shared-ui"
import { DataAccessModule } from '@multi-app/data-access';
import { LazyChildContainerComponent } from './components/LazyChildContainer/LazyChildContainer.component';
import { Routes, RouterModule } from '@angular/router';
import { UiApp1UiModule } from '@multi-app/ui/app1-ui';

const routes: Routes = [
	{
		path: '',
		component: LazyChildContainerComponent

	}
]

@NgModule({
	imports: [
		CommonModule,
		SharedUiModule,
		UiApp1UiModule,
		DataAccessModule,
		RouterModule.forChild(routes)
	],
	declarations: [LazyChildContainerComponent]
})
export class FeautresApp1SpecModule { }
