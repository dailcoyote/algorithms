import InvertedMatrix from "../InvertedMatrix";

describe('Inverted Matrix', () => {
    it('should match the inverse matrix', () => {
        const inverted = InvertedMatrix.solution([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ]);
        expect(inverted)
            .toEqual([
                [7, 4, 1],
                [8, 5, 2],
                [9, 6, 3]
            ])
    })
})