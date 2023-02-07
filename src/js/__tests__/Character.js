import Character from '../Character';

test('Character', () => {
  const expected = {
    health: 100,
    level: 1,
    name: 'name',
  };
  const received = new Character('name');
  expect(received).toEqual(expected);
});

test('throw in Character', () => {
  function throwCharacher() {
    return new Character('q');
  }
  expect(throwCharacher).toThrowError(
    new Error('Длина имени должна быть от 2 до 10 символов')
  );
});
