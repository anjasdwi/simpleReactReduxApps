const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
    const result =  add(3, 4);
    expect(result).toBe(7);
})

// test('Hasrusnya generate greeting dari nama', () => {
//     const result = generateGreeting('Mike');
//     expect(result).toBe('Hello world');
// })

// test('Hasrusnya generate greeting dari nama', () => {
//     const result = generateGreeting();
//     expect(result).toBe('Hello Anonymous');
// })