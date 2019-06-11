import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  COUNTER1_FEATURE_KEY,
  initialState as counter1InitialState,
  counter1Reducer
} from './+state/counter1.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(COUNTER1_FEATURE_KEY, counter1Reducer, {
      initialState: counter1InitialState
    }),
    EffectsModule.forFeature([])
  ]
})
export class DataAccessModule {}
