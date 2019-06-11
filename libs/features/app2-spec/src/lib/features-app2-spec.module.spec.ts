import { async, TestBed } from '@angular/core/testing';
import { FeaturesApp2SpecModule } from './features-app2-spec.module';

describe('FeaturesApp2SpecModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeaturesApp2SpecModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeaturesApp2SpecModule).toBeDefined();
  });
});
