abstract class Animal{
   abstract emitirsom():void ;
}

class Gato extends Animal{
    emitirsom(): void {
        console.log("Mial");
    }
}
class Vaca extends Animal{
    emitirsom(): void {
        console.log("muuuuu")
    }
}

const gato = new Gato();
const vaca = new Vaca();


let animais : Animal[] =[gato,vaca];

for (let Animal of animais){
    Animal.emitirsom = console.log
}
