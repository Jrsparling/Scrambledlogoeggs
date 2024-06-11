const {Triangle, Circle, Square} = require("./shapes")

// Triangle shape test
describe('triangle', () => {
    test('render passed', () => {
    const shape = new Triangle();
    shape.sColor("blue");
    expect(shape.render()).toEqual('<polygon height="100%" width="100%" points="0, 200 300, 200 150, 0" fill="blue"/>');
});
});
// Circle shape test
describe('circle', () => {
    test('render passed', () => {
    const shape = new Circle();
    shape.sColor("red");
    expect(shape.render()).toEqual('<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="red"/>');
});
});
// Square shape test
describe('square', () => {
    test('render passed', () => {
    const shape = new Square();
    shape.sColor("green");
    expect(shape.render()).toEqual('<rect x="50" height="200" width="200" fill="green"/>');
});
});