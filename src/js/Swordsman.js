import Character from './Character';

export default class Swordsman extends Character {
  constructor(name, type = 'Swordsman') {
    super(name);
    if (type !== 'Swordsman') {
      throw new Error('Некорректный тип персонажа');
    } else {
      this.type = type;
    }
    this.attack = 40;
    this.defence = 10;
  }
}
