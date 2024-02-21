export interface PlanetNameProps {
    planetName : string;
    onChangePlanetName: (e: string) => void;
}
export const PlanetName: React.FC<PlanetNameProps> = ({planetName, onChangePlanetName}) => {

    return (
                <>
                    <label htmlFor="pname">Planet Name: </label>
                    <input type="text" id="pname" name="pname" value={planetName} onChange={e => onChangePlanetName(e.target.value)}/> 
                    <br/>
                </>
            )
}