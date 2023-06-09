const {
  string,
  number,
  boolean,
  __undefined,
  symbol,
} = require("../ejercicios/ejercicio1");

describe("Ejercicio 1 -- variables y tipos de datos.", function () {
  it("La variable string deberia ser una cadena de texto", function () {
    expect(typeof string).toBe("string");
  });
  it("La variable number deberia ser de tipo numerico", function () {
    expect(typeof number).toBe("number");
  });

  it("La variable boolean deberia tener un valor boolean", function () {
    expect(typeof boolean).toBe("boolean");
  });

  it("La variable __undefined deberia tener un valor undefined", function () {
    expect(typeof __undefined).toBe("undefined");
  });

  it("La variable bigint deberia tener un valor bigint", function () {
    expect(typeof __undefined).toBe("bigint");
  });
  it("La variable symbol deberia tener un valor symbol", function () {
    expect(typeof symbol).toBe("symbol");
  });
});
