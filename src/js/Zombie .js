import Character from './Character';

export default class Zombie extends Character {
  constructor(name, type = 'Zombie') {
    super(name);
    if (type !== 'Zombie') {
      throw new Error('Некорректный тип персонажа');
    } else {
      this.type = type;
    }
    this.attack = 40;
    this.defence = 10;
  }
}
