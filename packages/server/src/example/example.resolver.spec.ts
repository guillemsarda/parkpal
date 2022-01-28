import { Test, TestingModule } from '@nestjs/testing';
import { ExampleResolver } from './example.resolver';

describe('ExampleResolver', () => {
  let resolver: ExampleResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExampleResolver],
    }).compile();

    resolver = module.get<ExampleResolver>(ExampleResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
