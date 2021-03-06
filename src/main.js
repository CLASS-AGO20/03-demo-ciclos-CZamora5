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
            inicio = inicio - fin;
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

    contarImparesWhile(inicio, fin){
        if(inicio>fin){
            inicio += fin;
            fin = inicio - fin;
            inicio = inicio - fin;
        }
        let total = 0;
        let contador = inicio;
        while(contador<=fin){
            if(contador%2==1){
                total++;
            }
            contador++;
        }
        return total;
    }

    sumarParesDo(){
        let total = 0;
        let contador = 1;
        do{
            if(contador%2 == 0){
                total += contador;
            }
            contador++;
        }while(contador<=20);
        return total;
    }

    contarImparesDo(inicio, fin){
        if(inicio>fin){
            inicio += fin;
            fin = inicio - fin;
            inicio = inicio - fin;
        }
        let total = 0;
        let contador = inicio;
        do{
            if(contador%2==1){
                total++;
            }
            contador++;
        }while(contador<=fin);
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

//Prueba del método contarImparesWhile
let m = 67;
let n = 1234;
console.log(`Probando método contarImparesWhile(inicio, fin)`);
console.log(`En el intervalo [${m},${n}] hay ${app.contarImparesWhile(m, n)} números impares`);
console.log(`En el intervalo [${0},${3*m}] hay ${app.contarImparesWhile(0, 3*m)} números impares`);
console.log(`En el intervalo [${2*m},${2*n}] hay ${app.contarImparesWhile(2*m, 2*n)} números impares`);
console.log(`En el intervalo [${m+3*n},${19*n}] hay ${app.contarImparesWhile(m+3*n, 19*n)} números impares`);

//Prueba del método sumarParesDo
console.log(`Probando método sumarParesDo()`);
console.log(`La suma de los números pares entre el número 1 y el número 20 es ${app.sumarParesDo()}`);

//Prueba del método contarImparesDo
let x = 12;
let y = 100;
console.log(`Probando método contarImparesDo(inicio, fin)`);
console.log(`En el intervalo [${x},${y}] hay ${app.contarImparesDo(x, y)} números impares`);
console.log(`En el intervalo [${0},${3*x}] hay ${app.contarImparesDo(0, 3*x)} números impares`);
console.log(`En el intervalo [${2*x},${2*y}] hay ${app.contarImparesDo(2*x, 2*y)} números impares`);
console.log(`En el intervalo [${x+3},${2*y+x}] hay ${app.contarImparesDo(x+3, 2*y+x)} números impares`);