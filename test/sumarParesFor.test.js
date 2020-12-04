import App from "../src/main";

test("sumarParesFor() es igual a 110", () => {
  let myApp = new App();

  expect(myApp.sumarParesFor()).toBe(110);
});
