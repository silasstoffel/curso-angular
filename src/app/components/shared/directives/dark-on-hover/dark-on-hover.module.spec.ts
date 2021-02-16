import { DarkOnHoverModule } from './dark-on-hover.module';

describe('DarkOnHoverModule', () => {
  let darkOnHoverModule: DarkOnHoverModule;

  beforeEach(() => {
    darkOnHoverModule = new DarkOnHoverModule();
  });

  it('should create an instance', () => {
    expect(darkOnHoverModule).toBeTruthy();
  });
});
