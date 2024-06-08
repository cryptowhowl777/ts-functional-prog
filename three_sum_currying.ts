function sum3(a: number, b: number,c: number): number{
    return a + b + c
}

// curriedSum = (a) => (b) => (c) => a + b + c

type CurriedSumCreator =  <A,B,C,D>(f: (a: A, b: B, c: C) => D) =>
    (a : A) => 
    (b: B) => 
    (c: C) => D
type CurriedSum = <A,B,C,D> (a: A) => (b: B) => (c: C) => D
const curriedSumCreator: CurriedSumCreator = f => a => b => c => f(a,b,c)
const curriedSum = curriedSumCreator(sum3)
console.log(curriedSum(1)(2)(3))

