import { async, TestBed } from '@angular/core/testing';
import { UiApp1UiModule } from './ui-app1-ui.module';

describe('UiApp1UiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiApp1UiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiApp1UiModule).toBeDefined();
  });
});
