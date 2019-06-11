import { async, TestBed } from '@angular/core/testing';
import { FeautresApp1SpecModule } from './feautres-app1-spec.module';

describe('FeautresApp1SpecModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeautresApp1SpecModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeautresApp1SpecModule).toBeDefined();
  });
});
