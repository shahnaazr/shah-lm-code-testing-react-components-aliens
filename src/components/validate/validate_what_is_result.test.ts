import { errorMessage01, validateWhatIsResult } from "./validate_what_is_result";


describe("test validate what is result function", () => {
    test("given the input for validate what is result is Not 4, when the function is called, it should return an array with right error message", ()=> {
        const actual: Array<string> = validateWhatIsResult("Not 4");
        expect([errorMessage01]).toEqual(actual);
    })

    test("given the input for validate what is result is 4, when the function is called, it should return an empty array", ()=> {
        const actual: Array<string> = validateWhatIsResult("4");
        expect([]).toEqual(actual);
    })


})