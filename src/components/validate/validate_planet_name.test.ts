import { errorMessage01, errorMessage02, errorMessage03, validatePlanetName } from "./validate_planet_name";

describe("test validate planet name function", () => {
    test("given the input for validate planet name has less than 2 chars, when the function is called, it should return an array with right error message", ()=> {
        const actual: Array<string> = validatePlanetName("A");
        expect([errorMessage01]).toEqual(actual);
    })

    test("given the input for validate planet name has greater than 49 chars, when the function is called, it should return an array with right error message", ()=> {
        const actual: Array<string> = validatePlanetName("abcdefghijklmnopqrstuvwzyzabcdefghijklmnopqrstuvwzyz");
        expect([errorMessage02]).toEqual(actual);
    })

    test("given the input for validate planet name contains a special char, when the function is called, it should return an array with right error message", ()=> {
        const actual: Array<string> = validatePlanetName("abcd!fg");
        expect([errorMessage03]).toEqual(actual);
    })

    test("given the input for validate planet name contains number, when the function is called, it should return an empty array", ()=> {
        const actual: Array<string> = validatePlanetName("abc2ef");
        expect([]).toEqual(actual);
    })

    test("given the input for validate planet name contains a valid value, when the function is called, it should return an empty array", ()=> {
        const actual: Array<string> = validatePlanetName("human");
        expect([]).toEqual(actual);
    })


})