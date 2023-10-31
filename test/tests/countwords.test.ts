import { countWords } from '../src/app';

describe('countWords', () => {
    it("Dois compter le nombre de mots dans une phrase", () => {
        const texte = "J'ai beaucoup mangé aujourd'hui";
        const result = countWords(texte);
        expect(result).toBe(4)
    })

    it("Idem", () => {
        const texte = "Mercredi je vais en cours en vélo"
        const result = countWords(texte);
        expect(result).toBe(7)
    })

    it("Idem", () => {
        const texte = "  "
        const result = countWords(texte);
        expect(result).toBe(0)
    })
})