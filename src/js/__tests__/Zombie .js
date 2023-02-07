import Zombie from '../Zombie ';

test('Zombie', () => {
  const expected = {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'name',
    type: 'Zombie',
  };
  const received = new Zombie('name', 'Zombie');
  expect(received).toEqual(expected);
});

test('type error in Zombie ', () => {
  function typeZombie() {
    return new Zombie('name', 'sometype');
  }
  expect(typeZombie).toThrowError(new Error('Некорректный тип персонажа'));
});
