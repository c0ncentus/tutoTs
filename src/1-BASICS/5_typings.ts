// type and interface cannot be use as value
type Types_= 4

interface Typings{
    some:string
}





let a: string | number = ""; a = 3;





const b: (string | number | boolean)[] = ["", 3, 10976677, true];
// move cursor on "b_" please
const b_ = ["", 3, 10976677, true];




// move cursor on "ARRAY_CONST" please
const ARRAY_CONST= ["Naruto", "Lego", "Lord"] as const
// move cursor on "Manga" please
type Manga=  typeof ARRAY_CONST[number];