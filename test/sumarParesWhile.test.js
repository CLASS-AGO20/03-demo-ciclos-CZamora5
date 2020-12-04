import App from "../src/main";

test("sumarParesWhile() es igual a 110", () => {
  let myApp = new App();

  expect(myApp.sumarParesWhile()).toBe(110);
});
