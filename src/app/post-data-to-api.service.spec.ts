import { TestBed } from '@angular/core/testing';

import { PostDataToApiService } from './post-data-to-api.service';

describe('PostDataToApiService', () => {
  let service: PostDataToApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostDataToApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
