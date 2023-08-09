import { ClassNames } from 'shared/lib';

const classes = 'cls hover theme';
const twoClasses = 'cls theme';
describe('testing function ClassNames', () => {
    test('expect class string', () => {
        expect(ClassNames('cls', { hover: true }, ['theme'])).toBe(classes);
    });

    test('wrong test', () => {
        expect(ClassNames('cls', { hover: '' }, ['theme'])).not.toBe(classes);
    });

    test('two classes', () => {
        expect(ClassNames('cls', { hover: false }, ['theme'])).toBe(twoClasses);
    });
});
