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
}

let app = new App();

//Prueba del método sumarParesFor
console.log(`Probando método sumarParesFor()`);
console.log(`La suma de los números pares entre el número 1 y el número 20 es ${app.sumarParesFor()}`);