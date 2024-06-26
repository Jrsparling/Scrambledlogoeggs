class shape{
    constructor(){
        this.color=''
    }
    sColor(sColor){
        this.color = (sColor);
    }
}
// Defines triangle class that extends shape and renders with the shape's color
class Triangle extends shape{
    render(){
        return `<polygon height="100%" width="100%" points="0, 200 300, 200 150, 0" fill="${this.color}"/>`
    }
}
// Defines circle class that extends shape and renders with the shape's color
class Circle extends shape{
    render(){
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"/>`
    }
}
// Defines square class that extends shape and renders with the shape's color
class Square extends shape{
    render(){
        return `<rect x="50" height="200" width="200" fill="${this.color}"/>`
    }
};
module.exports = {Triangle, Circle, Square};