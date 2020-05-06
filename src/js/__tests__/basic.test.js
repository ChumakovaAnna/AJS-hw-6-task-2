import Character from "../basic";

describe("Character.getDamage", () => {
  test("25", () => {
    const user = new Character("Oleg", "Bowman");
    user.getDamage(25);
    const result = user;
    const expected = {
      name: "Oleg",
      type: "Bowman",
      health: 85,
      defense: 40,
      attack: 10,
    };
    expect(result).toEqual(expected);
  });
  test("200", () => {
    const user = new Character("Oleg", "Zombie");
    user.getDamage(200);
    const result = user;
    const expected = {
      name: "Oleg",
      type: "Zombie",
      health: 0,
      defense: 40,
      attack: 10,
    };
    expect(result).toEqual(expected);
  });
});
