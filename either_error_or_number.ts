
type Either<E,A> = Left<E> | Right<A>

interface Left<E> {
    _tag: 'Left',
    left: E
}

interface Right<A> {
    _tag: 'Right',
    right: A
}

function divideTwoByNumberIfEven(x: number): Either<string, number>{
    if(x===0) {
        return left("Can't divide number with zero")
    }else if(x%2!=0){
        throw left("Can't divide number with odd number")
    }else{
        return right(2/x)
    }
}

const left =  <E,A>(e: E): Either<E,A> => {return {
    _tag: 'Left',
    left: e
}}

const right =  <E,A>(a: A): Either<E,A> => {return {
    _tag: 'Right',
    right: a
}}

console.log(divideTwoByNumberIfEven(0))
console.log(divideTwoByNumberIfEven(2))
console.log(divideTwoByNumberIfEven(3))