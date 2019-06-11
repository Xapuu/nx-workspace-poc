import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lazy1Component, LazyChildComponent } from './components';
import { SharedUiModule } from '@multi-app/shared-ui'

@NgModule({
	imports: [CommonModule, SharedUiModule],
	declarations: [Lazy1Component, LazyChildComponent],
	exports: [Lazy1Component, LazyChildComponent]
})
export class UiApp1UiModule { }
