import { TestBed } from '@angular/core/testing';

import { ProdutoResolver } from './produto.resolver';

describe('ProdutoResolver', () => {
  let resolver: ProdutoResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProdutoResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
