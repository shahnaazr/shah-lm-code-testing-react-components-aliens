import { ErrorMessage } from "./error_message";

export interface PlanetNameProps {
    planetName : string;
    onChangePlanetName: (e: string) => void;
    validate: (planetName: string)=> string[];
}
export const PlanetName: React.FC<PlanetNameProps> = ({planetName, onChangePlanetName, validate}) => {
const messages = validate(planetName);
    return (
                <>
                    <label htmlFor="pname">Planet Name: </label>
                    <input type="text" id="pname" name="pname" value={planetName} onChange={e => onChangePlanetName(e.target.value)}/> 
                    <br/>
                    <ErrorMessage messages={messages}/>
                </>
            )
}