const { string } = require("../ejercicio1");

describe("Ejercicio 1", function () {
  test('La variable "string" deberia ser de tipo string', () => {
    expect(typeof string).toBe("string");
  });
});
