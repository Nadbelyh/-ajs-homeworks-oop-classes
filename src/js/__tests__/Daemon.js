import Daemon from '../Daemon';

test('Daemon', () => {
  const expected = {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'name',
    type: 'Daemon',
  };
  const received = new Daemon('name', 'Daemon');
  expect(received).toEqual(expected);
});

test('type error in Daemon', () => {
  function typeDaemon() {
    return new Daemon('name', 'sometype');
  }
  expect(typeDaemon).toThrowError(new Error('Некорректный тип персонажа'));
});
