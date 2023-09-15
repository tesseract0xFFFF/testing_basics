import {capitalize, reverse, ceaser} from './practice';

test('capitalizes the first letter in a string', () => {
  expect(capitalize('testing')).toBe('Testing');
});


test('reverses a string', () => {
  expect(reverse('test')).toBe('tset');
}); 


test('ceaser cipher', ()=>{
  expect(ceaser('a', 25)).toBe('z');
});

test('punctuation', ()=>{
  expect(ceaser('hello, human.', 1)).toBe('ifmmp, ivnbo.');
});


test('case insensitive', ()=>{
  expect(ceaser('Hello', 1)).toBe('ifmmp');
});