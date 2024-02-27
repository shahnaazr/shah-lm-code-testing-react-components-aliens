import { errorMessage01, errorMessage02, validateNumberOfBeings } from "./validate_number_of_beings";

describe("test validate number of beings function", () => {
    test("given the input for validate number of beings has less than 10 chars, when the function is called, it should return an array with right error message", ()=> {
        const actual: Array<string> = validateNumberOfBeings("100000000");
        expect([errorMessage01]).toEqual(actual);
    })

    test("given the input for validate number of beings contains a special char, when the function is called, it should return an array with right error message", ()=> {
        const actual: Array<string> = validateNumberOfBeings("20000000000!@");
        expect([errorMessage02]).toEqual(actual);
    })

    test("given the input for validate number of beings contains alphabets, when the function is called, it should return an empty array", ()=> {
        const actual: Array<string> = validateNumberOfBeings("20asd000000000");
        expect([errorMessage02]).toEqual(actual);
    })

    test("given the input for validate number of beings contains a valid value, when the function is called, it should return an empty array", ()=> {
        const actual: Array<string> = validateNumberOfBeings("1000000000");
        expect([]).toEqual(actual);
    })


})