


// interface Errors {
//     [prop:string]:string;
// }

// const errorBag : Errors = {
//     mail:'@ işaretini eklemelisiniz!'
// }

// console.log(errorBag[0])


//! function overloads


// type combine1 = string | number;
// type combine2 = number | boolean;

// type collect = combine1 & combine2;


// function add(a:number, b:number):number;

// function add(a:combine1, b:combine1) {
//     if(typeof a === 'string' && typeof b === 'string' ) {
//         return console.log(a.toString() + b.toString())
//     }
//     return console.log( a , b)
// };



//! GENERICS ÇALIŞMA 
const arr : Array<string> = [];


//! generic function

// function smerge<T extends object,U extends object>(objA:T, objB:U):T & U{
//     return Object.assign(objA, objB);
// }


// const collect = smerge({name:'can' , hobbies: ['futbol','basketbol']}, {age:30});
// console.log(collect.name, collect.hobbies);
// console.log(collect.age)



//another generic function

interface lengthy {
    length : number;
}
function gatherInfo<T extends lengthy>(element: T): [T,string]{
    let msg = 'No value'
    if(element.length === 1 ){
        msg = '1 value'
    }
    else if(element.length > 1) {
        console.log('more than 1 value ' + element.length)
    }
    return [element, msg]
}

gatherInfo(['can','mert']);

interface typecasting {

    [prop:string]:string;

}


let bag: typecasting = {
    'dxerror':'Bilgisayarınıza runtimes dosyalarını kurunuz.'
}

