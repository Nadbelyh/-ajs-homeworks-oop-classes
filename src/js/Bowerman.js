import Character from './Character';

export default class Bowerman extends Character {
  constructor(name, type = 'Bowman') {
    super(name);
    if (type !== 'Bowman') {
      throw new Error('Некорректный тип персонажа');
    } else {
      this.type = type;
    }
    this.attack = 25;
    this.defence = 25;
  }
}
