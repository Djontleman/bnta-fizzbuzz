const {fizzBuzz} = require('./fizzbuzz');

describe('Fizz tests', () => {
   
    // Write your tests for the "fizz" values here
    test("3 is expected to return fizz", () => {
        expect(fizzBuzz(3)).toBe("fizz");
    });

    test("5 is expected to return buzz", () => {
        expect(fizzBuzz(5)).toBe("buzz");
    });

    test("15 is expected to return fizzbuzz", () => {
        expect(fizzBuzz(15)).toBe("fizzbuzz");
    });

    test("8 should return 8", () => {
        expect(fizzBuzz(8)).toBe(8);
    })

    test("50,625 should return fizzbuzz", () => {
        expect(fizzBuzz(50625)).toBe("fizzbuzz");
    });
});
