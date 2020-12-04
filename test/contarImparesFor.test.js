import App from "../src/main";

test("contarImparesFor()", () => {
  let myApp = new App();
  let inicio = Math.trunc(Math.random() * 20);
  let fin = Math.trunc(Math.random() * 100) + 20;

  expect(myApp.contarImparesFor(inicio, fin)).toBe(
    Math.round((fin - inicio + 1) / 2)
  );
});
