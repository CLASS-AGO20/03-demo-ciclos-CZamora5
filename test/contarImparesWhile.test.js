import App from "../src/main";

test("contarImparesWhile()", () => {
  let myApp = new App();
  let inicio = Math.trunc(Math.random() * 20);
  let fin = Math.trunc(Math.random() * 100) + 20;

  expect(myApp.contarImparesWhile(inicio, fin)).toBe(
    Math.round((fin - inicio + 1) / 2)
  );
});
