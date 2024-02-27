export const errorMessage01 = "Reason for sparing lesser than 17 characters is not allowed";
export const errorMessage02 = "Reason for sparing greater than 153 characters is not allowed";

export const validateReasonForSparing = (reasonForsparing: string)=> {
    let messages = Array<string>();
    let count = reasonForsparing.length;
    const lowerLimit =17;
    const upperLimit = 153;
    if (count < lowerLimit){
        messages.push(errorMessage01);
    }

    if (count > upperLimit){
        messages.push(errorMessage02);
    }
    return messages;
}