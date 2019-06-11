import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiModule } from '@multi-app/shared-ui'
import { RouterModule, Routes } from '@angular/router';
import { LazyChild2ContainerComponent } from './components/LazyChild2Container/LazyChild2Container.component';
import { DataAccessModule } from '@multi-app/data-access';
import { UiApp2UiModule } from '@multi-app/ui/app2-ui';

const routes: Routes = [
	{
		path: 'common',
		component: LazyChild2ContainerComponent
	},
	{
		path: 'app2',
		component: LazyChild2ContainerComponent
	}
]

@NgModule({
	imports: [
		CommonModule,
		SharedUiModule,
		UiApp2UiModule,
		DataAccessModule,
		RouterModule.forChild(routes)
	],
	declarations: [LazyChild2ContainerComponent]
})
export class FeaturesApp2SpecModule { }
