export interface DisplayFormDetailsProps {
speciesName: string;
planetName: string;
numberOfBeings: string;
result: string;
reasonForSparing: string;
}

export const DisplayFormDetails: React.FC<DisplayFormDetailsProps> =({speciesName,planetName, numberOfBeings,result, reasonForSparing })=> {
    return (
        <>
        <section>
            <h3>Please find below the Form Data you had submitted: </h3>
            <li>SpeciesName : {speciesName}</li>
            <li>PlanetName : {planetName}</li>
            <li>Number of beings : {numberOfBeings}</li>
            <li>Result : {result}</li>
            <li>Reason for sparing : {reasonForSparing}</li> 
        </section>
        
        </>
    )
}