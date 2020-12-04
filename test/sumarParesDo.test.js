import App from "../src/main";

test("sumarParesDo() es igual a 110", () => {
  let myApp = new App();

  expect(myApp.sumarParesDo()).toBe(110);
});
