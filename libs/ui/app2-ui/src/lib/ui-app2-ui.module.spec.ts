import { async, TestBed } from '@angular/core/testing';
import { UiApp2UiModule } from './ui-app2-ui.module';

describe('UiApp2UiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiApp2UiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiApp2UiModule).toBeDefined();
  });
});
