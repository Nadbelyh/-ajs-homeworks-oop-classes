import Magician from '../Magician';

test('Magician', () => {
  const expected = {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'name',
    type: 'Magician',
  };
  const received = new Magician('name', 'Magician');
  expect(received).toEqual(expected);
});

test('type error in Magician', () => {
  function typeMagician() {
    return new Magician('name', 'sometype');
  }
  expect(typeMagician).toThrowError(new Error('Некорректный тип персонажа'));
});
