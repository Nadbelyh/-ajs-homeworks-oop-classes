import Character from './Character';

export default class Undead extends Character {
  constructor(name, type = 'Undead') {
    super(name);
    if (type !== 'Undead') {
      throw new Error('Некорректный тип персонажа');
    } else {
      this.type = type;
    }
    this.attack = 25;
    this.defence = 25;
  }
}
