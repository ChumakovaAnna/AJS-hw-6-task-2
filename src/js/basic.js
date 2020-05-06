export default function Character(name, type) {
  this.name = name;
  this.type = type;
  this.health = 100;
  this.attack = 10;
  this.defense = 40;
}

Character.prototype.getDamage = function (points) {
  this.health -= Number(points) * (1 - this.defense / 100);
  if (this.health < 0) {
    this.health = 0;
  }
};
