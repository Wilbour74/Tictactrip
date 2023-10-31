"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../src/app");
describe('countWords', () => {
    it("Dois compter le nombre de mots dans une phrase", () => {
        const texte = "J'ai beaucoup mangé aujourd'hui";
        const result = (0, app_1.countWords)(texte);
        expect(result).toBe(4);
    });
    it("Idem", () => {
        const texte = "Mercredi je vais en cours en vélo";
        const result = (0, app_1.countWords)(texte);
        expect(result).toBe(7);
    });
    it("Idem", () => {
        const texte = "  ";
        const result = (0, app_1.countWords)(texte);
        expect(result).toBe(0);
    });
});
//# sourceMappingURL=countwords.test.js.map