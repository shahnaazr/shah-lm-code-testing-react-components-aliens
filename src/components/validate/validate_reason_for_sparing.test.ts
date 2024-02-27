import { errorMessage01, errorMessage02, validateReasonForSparing } from "./validate_reason_for_sparing";

describe("test validate reason for sparing function", () => {
    test("given the input for validate reason for sparing has less than 17 chars, when the function is called, it should return an array with right error message", ()=> {
        const actual: Array<string> = validateReasonForSparing("this is great");
        expect([errorMessage01]).toEqual(actual);
    })

    test("given the input for validate reason for sparing has greater than 153 chars, when the function is called, it should return an array with right error message", ()=> {
        const actual: Array<string> = validateReasonForSparing("avoxpqmyegaqmwitsojhrvnahzxhwtjzoptgqfhodvqsihasuqbxzpcgvavoxpqmyegaqmwitsojhrvnahzxhwtjzoptgqfhodvqsihasuqbxzpcgvavoxpqmyegaqmwitsojhrvnahzxhwtjzoptgqfhodvqsihasuqbxzpcgv");
        expect([errorMessage02]).toEqual(actual);
    })



    test("given the input for validate reason for sparing contains a valid value, when the function is called, it should return an empty array", ()=> {
        const actual: Array<string> = validateReasonForSparing("gollzcpefdmpbuurndihcpeulvgk");
        expect([]).toEqual(actual);
    })


})