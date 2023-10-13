import { TestBed } from '@angular/core/testing';

import { UriInterceptor } from './uri.interceptor';

describe('UriInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      UriInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: UriInterceptor = TestBed.inject(UriInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
