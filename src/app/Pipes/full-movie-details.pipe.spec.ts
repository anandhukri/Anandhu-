import { FullMovieDetailsPipe } from './full-movie-details.pipe';

describe('FullMovieDetailsPipe', () => {
  it('create an instance', () => {
    const pipe = new FullMovieDetailsPipe();
    expect(pipe).toBeTruthy();
  });
});
