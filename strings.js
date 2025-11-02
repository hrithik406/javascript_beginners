const a = `hello`
const b = `world`

function add(x,y){
    return x + y
}

const val = `
${a} ${b} ${add(5,6)}
single quote '
double quote "
new \nLine

`
console.log(val)