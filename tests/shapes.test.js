const { Triangle, Sqaure, Circle } = require("../lib/shapes");

describe("Circle test", () => {
  test("test for a circle with a pink background", () => {
    const shape = new Circle();
    shape.setColor("pink");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="115" r="80" fill="pink" />'
    );
  });
});
describe("Triangle test", () => {
  test("test for a triangle with a blue background", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  });
});
describe("Square test", () => {
  test("test for a square with a red background", () => {
    const shape = new Sqaure();
    shape.setColor("red");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="115" r="80" fill="red" />'
    );
  });
});
