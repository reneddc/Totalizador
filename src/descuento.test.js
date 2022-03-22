import porcentaje_descuento from "./porcentajeDescuento";
 
 
describe("PORCENTAJE DESCUENTO", () => {
    it("Descuento Porcentaje 0", () => {
      expect(porcentaje_descuento(100)).toEqual(0);
    });

    it("Descuento Porcentaje límite 1000", () => {
        expect(porcentaje_descuento(1000)).toEqual(3);
    });

    it("Descuento Porcentaje entre 1000 y 3000", () => {
        expect(porcentaje_descuento(1500)).toEqual(3);
    });

    it("Descuento Porcentaje límite 3000", () => {
        expect(porcentaje_descuento(3000)).toEqual(5);
    });

    it("Descuento Porcentaje entre 3000 y 7000", () => {
        expect(porcentaje_descuento(5500)).toEqual(5);
    });

    it("Descuento Porcentaje límite 7000", () => {
        expect(porcentaje_descuento(7000)).toEqual(7);
    });

    it("Descuento Porcentaje entre 7000 y 10000", () => {
        expect(porcentaje_descuento(9500)).toEqual(7);
    });

    it("Descuento Porcentaje límite 10000", () => {
        expect(porcentaje_descuento(10000)).toEqual(10);
    });

    it("Descuento Porcentaje entre 10000 y 30000", () => {
        expect(porcentaje_descuento(29500)).toEqual(10);
    });

    it("Descuento Porcentaje límite 30000", () => {
        expect(porcentaje_descuento(30000)).toEqual(15);
    });

    it("Descuento Porcentaje mayor 30000", () => {
        expect(porcentaje_descuento(300010)).toEqual(15);
    });
  });
  