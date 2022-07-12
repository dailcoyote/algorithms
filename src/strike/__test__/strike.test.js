import Strike from "../Strike";

describe('Strike Algorithm', () => {
    it('should calculate match score', () => {
       const matchScore = Strike.lexicalScan("Relevance", "Diligence");
       expect(matchScore).toBe(0.25);
    })
})