import Undead from '../Undead';

test('Undead', () => {
  const expected = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'name',
    type: 'Undead',
  };
  const received = new Undead('name', 'Undead');
  expect(received).toEqual(expected);
});

test('type error in Undead', () => {
  function typeUndead() {
    return new Undead('name', 'sometype');
  }
  expect(typeUndead).toThrowError(new Error('Некорректный тип персонажа'));
});
