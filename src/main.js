export default class App {
    sumarParesFor(){
        let total = 0;
        for(let i=1; i<=20; i++){
            if(i%2==0){
                total += i;
            }
        }
        return total;
    }

    contarImparesFor(inicio, fin){

        if(inicio>fin){
            inicio += fin;
            fin = inicio - fin;
            inicio = inicio -fin;
        }
        let total = 0;
        for(let i=inicio; i<=fin; i++){
            if(i%2==1){
                total++;
            }
        }
        return total;
    }

    sumarParesWhile(){
        let total = 0;
        let contador = 1;
        while(contador<=20){
            if(contador%2==0){
                total += contador;
            }
            contador++;
        }
        return total;
    }
}

let app = new App();

//Prueba del método sumarParesFor
console.log(`Probando método sumarParesFor()`);
console.log(`La suma de los números pares entre el número 1 y el número 20 es ${app.sumarParesFor()}`);

//Prueba del método contarImparesFor
let a = 23;
let b = 345;
console.log(`Probando método contarImparesFor(inicio, fin)`);
console.log(`En el intervalo [${a},${b}] hay ${app.contarImparesFor(a, b)} números impares`);
console.log(`En el intervalo [${0},${3*a}] hay ${app.contarImparesFor(0, 3*a)} números impares`);
console.log(`En el intervalo [${2*a},${2*b}] hay ${app.contarImparesFor(2*b, 2*a)} números impares`);

//Prueba del método sumarParesWhile
console.log(`Probando método sumarParesWhile()`);
console.log(`La suma de los números pares entre el número 1 y el número 20 es ${app.sumarParesWhile()}`);