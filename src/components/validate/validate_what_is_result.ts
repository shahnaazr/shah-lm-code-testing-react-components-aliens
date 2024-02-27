export const errorMessage01 = "The chosen option for result is not allowed";
export const validateWhatIsResult = (whatIsResult: string)=> {
    let messages = Array<string>();
    if(whatIsResult!==("4")){
        messages.push(errorMessage01);
    }
        
    return messages;
}