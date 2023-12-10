import { classNames } from './classNames';

describe('classNames', () => {
   test('with only first param,', () => {
      expect(classNames('some')).toBe('some');
   });

   test('with additional class', () => {
      expect(classNames('some', {}, ['class1', 'class2']))
         .toBe('some class1 class2');
   });

   test('with mods', () => {
      const expected = 'some class1 class2 hovered';
      expect(classNames(
         'some',
         { hovered: true, scrollable: false },
         ['class1', 'class2'],
      ))
         .toBe(expected);
   });

   test('with mods undefined', () => {
      const expected = 'some class1 class2 hovered';
      expect(classNames(
         'some',
         { hovered: true, scrollable: undefined },
         ['class1', 'class2'],
      ))
         .toBe(expected);
   });
});
