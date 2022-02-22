import { getHeros } from '../src/context/HeroContext';

test('test api all hero', async () => {
  return await getHeros().then(response => {
    expect(response.data.code).toBe(200);
  });
});

test('test api one hero', async () => {
  return await getHeros('spider-man (peter parker)').then(response => {
    let result = response.data.data.results[0];
    expect(result.name).toBe('Spider-Man (Peter Parker)');
  });
});