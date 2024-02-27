export const errorMessage01 = "species names lesser than 2 characters is not allowed";
export const errorMessage02 = "species names greater than 49 characters is not allowed";
export const errorMessage03 = "Special character is not allowed";

export const validatePlanetName = (planetName: string)=> {
    const lowerLimit = 2;
    const upperLimit = 49
    let messages = Array<string>();
    const count = planetName.length;
    const planetNamePattern = /[^A-Za-z\d\s]/;
    if (count<lowerLimit){
        messages.push(errorMessage01)
    } 
    if (count>upperLimit){
        messages.push(errorMessage02)
    }
    if (planetNamePattern.test(planetName)){
        messages.push(errorMessage03)
    }
    return messages;
}