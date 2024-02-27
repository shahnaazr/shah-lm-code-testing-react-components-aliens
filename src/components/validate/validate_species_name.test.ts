import { errorMessage01, errorMessage02, errorMessage03, validateSpeciesName } from "./validate_species_name"

describe("test validate species name function", () => {
    test("given the input for validate species name has less than 3 chars, when the function is called, it should return an array with right error message", ()=> {
        const actual: Array<string> = validateSpeciesName("AB");
        expect([errorMessage01]).toEqual(actual);
    })

    test("given the input for validate species name has greater than 23 chars, when the function is called, it should return an array with right error message", ()=> {
        const actual: Array<string> = validateSpeciesName("abcdefghijklmnopqrstuvwzyz");
        expect([errorMessage02]).toEqual(actual);
    })

    test("given the input for validate species name contains a special char, when the function is called, it should return an array with right error message", ()=> {
        const actual: Array<string> = validateSpeciesName("abcd!fg");
        expect([errorMessage03]).toEqual(actual);
    })

    test("given the input for validate species name contains number, when the function is called, it should return an array with right error message", ()=> {
        const actual: Array<string> = validateSpeciesName("abc2ef");
        expect([errorMessage03]).toEqual(actual);
    })

    test("given the input for validate species name contains a valid value, when the function is called, it should return an empty array", ()=> {
        const actual: Array<string> = validateSpeciesName("human");
        expect([]).toEqual(actual);
    })


})