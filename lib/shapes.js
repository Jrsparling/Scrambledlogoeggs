function generateShape(shape) {
    if (shape === triangle) {
        return 'triangle'}
    else if (shape === circle) {
        return 'circle'}
    else if (shape === square) {
        return 'square'}
    else {return '' }
}

function generateShape(data){
    return`${data.shape}
    `
}
module.exports = generateShape;