export const errorMessage01 = "species names lesser than 3 characters is not allowed";
export const errorMessage02 = "species names greater than 23 characters is not allowed";
export const errorMessage03 = "Number or special character is not allowed";


export const validateSpeciesName = (speciesName: string)=> {
    const lowerLimit =3;
    const upperLimit = 23;
    let messages = Array<string>();
    const count = speciesName.length;
    const speciesNamePattern = /[^A-Za-z\s]/;
    if (count<lowerLimit){
        messages.push(errorMessage01)
    } 
    if (count>upperLimit){
        messages.push(errorMessage02)
    }
    if (speciesNamePattern.test(speciesName)){
        messages.push(errorMessage03)
    }
    return messages;
}