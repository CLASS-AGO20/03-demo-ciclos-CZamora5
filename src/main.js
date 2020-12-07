export default class App {
    sumarParesFor(){
        let total = 0;
        for(let i=1; i<=20; i++){
            if(i%2==0){
                total++;
            }
        }
        return total;
    }
}

let app = new App();

//Prueba del método sumarParesFor
console.log(`Probando método sumarParesFor()`);
console.log(`Entre el número 1 y el número 20 hay ${app.sumarParesFor()} números pares`);