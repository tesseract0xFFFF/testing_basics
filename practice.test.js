import {capitalize, reverse, ceaser} from './practice';

test('capitalizes the first letter in a string', () => {
  expect(capitalize('testing')).toBe('Testing');
});
  

  
test('reverses a string', () => {
  expect(reverse('test')).toBe('tset');
}); 


test('ceaser cipher', ()=>{
  expect(ceaser('a', 25)).toBe('z');
  expect().toBe();
});