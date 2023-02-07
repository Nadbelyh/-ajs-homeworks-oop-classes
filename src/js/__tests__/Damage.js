import Bowerman from '../Bowerman';

test('damage', () => {
  const expected = {
    attack: 25,
    defence: 25,
    health: 85,
    level: 1,
    name: 'name',
    type: 'Bowman',
  };
  const received = new Bowerman('name', 'Bowman');
  received.damage(20);
  expect(received).toEqual(expected);
});

test('health error in damage', () => {
  function healthDamage() {
    const npc = new Bowerman('name', 'Bowman');
    npc.health = -12;
    return npc.damage(45);
  }
  expect(healthDamage).toThrowError(new Error('Персонаж мертв'));
});
