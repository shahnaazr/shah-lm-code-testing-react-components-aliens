export const errorMessage01 = "number of beings lesser than 10 characters is not allowed";
export const errorMessage02 = "Special characters and alphbets is not allowed";
export const validateNumberOfBeings = (numberOfbeings: string) => {
    let messages = Array<string>();
    const count = numberOfbeings.length;
    const numberOfBeingsPattern = /[^\d\s]/;
    if (count < 10){
        messages.push(errorMessage01)
    } 

    if (numberOfBeingsPattern.test(numberOfbeings)){
        messages.push(errorMessage02)
    }
    return messages;
}