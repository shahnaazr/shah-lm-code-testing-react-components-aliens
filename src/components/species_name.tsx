import { ErrorMessage } from "./error_message";

export interface SpeciesNameProps {
      speciesName: string;
      onChangeSpeciesName: (e: string)=> void;
      validate: (species_name: string)=> string[];
}
export const SpeciesName: React.FC<SpeciesNameProps>  = ({speciesName, onChangeSpeciesName, validate}) => {
    const errorMessages = validate(speciesName);
    return (
                <>
                    <label htmlFor="sname">Species Name: </label>
                    <input type="text" id="sname" name="sname" value={speciesName} onChange={e => onChangeSpeciesName(e.target.value)}/>              
                    <br/>

                    <ErrorMessage messages={errorMessages} />
                </>
            )

}