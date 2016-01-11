jest.dontMock('../clean');

describe('clean', () => {
    const uniq = require('../clean').default;

    it('returns an array', () => {
        expect(uniq([])).toEqual([]);
    });

    it('does not remove things', () => {
        const input = uniq(['a', 'a', 'a']);
        const expectedOutput = ['a', 'a', 'a'];

        expect(input).toEqual(expectedOutput);
    });
});
