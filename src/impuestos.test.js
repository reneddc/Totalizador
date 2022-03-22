import porcentaje_estado from "./impuestoEstado";
 
 
describe("IMPUESTO ESTADO", () => {
    it("Porcentaje de impuesto CA", () => {
      expect(porcentaje_estado("CA")).toEqual(8.25);
    });

    it("Porcentaje de impuesto NV", () => {
      expect(porcentaje_estado("NV")).toEqual(8);
    });

    it("Porcentaje de impuesto TX", () => {
      expect(porcentaje_estado("TX")).toEqual(6.25);
    });

    it("Porcentaje de impuesto AL", () => {
      expect(porcentaje_estado("AL")).toEqual(4);
    });

    it("Porcentaje de impuesto UT", () => {
      expect(porcentaje_estado("UT")).toEqual(6.65);
    });
  });
  