import shuffle from "../Shuffle";

describe('Shuffle Algorithm', () => {
    it('numbers should be shuffled', () => {
        var integers = [3, 1, 6, 2, 4, 5, 8, 7];
        shuffle(integers);
        expect(integers).toContain(1);
        expect(integers).toContain(2);
        expect(integers).toContain(3);
        expect(integers).toContain(4);
        expect(integers).toContain(5);
        expect(integers).toContain(6);
        expect(integers).toContain(7);
        expect(integers).toContain(8);
    })
})