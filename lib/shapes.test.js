const {triangle, circle, square} = require("./shapes")

// Triangle shape test
describe('triangle', () => {
    test('render passed', () => {
    const shape = new triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});
});
// Circle shape test
describe('circle', () => {
    test('render passed', () => {
    const shape = new circle();
    shape.setColor("red");
    expect(shape.render()).toEqual('<circle cx="50%" cy="50%" r="100" width="100%" fill="red" />');
});
});
// Square shape test
describe('square', () => {
    test('render passed', () => {
    const shape = new square();
    shape.setColor("green");
    expect(shape.render()).toEqual('<rect x="50" height="200" fill="green" />');
});
});