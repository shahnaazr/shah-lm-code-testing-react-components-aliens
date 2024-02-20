interface DisplayFormDetailsProps {
speciesName: string;
planetName: string;
numberOfBeings: string;
result: string;
reasonForSparing: string;
}

export const DisplayFormDetails: React.FC<DisplayFormDetailsProps> =({speciesName,planetName, numberOfBeings,result, reasonForSparing })=> {
    return (
        <>
            <p>SpeciesName : {speciesName}</p>
            <p>PlanetName : {planetName}</p>
            <p>Number of beings : {numberOfBeings}</p>
            <p>Result : {result}</p>
            <p>Reason for sparing : {reasonForSparing}</p>
        </>
    )
}