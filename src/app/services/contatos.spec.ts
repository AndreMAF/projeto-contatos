import { TestBed } from '@angular/core/testing';

import { ContatosService } from './contatos';

describe('Contatos', () => {
  let service: ContatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
