interface SpeciesNameProps {
      speciesName: string;
      onChangeSpeciesName: (e: string)=> void;
}
export const SpeciesName: React.FC<SpeciesNameProps>  = ({speciesName, onChangeSpeciesName}) => {
    
    return (
                <>
                    <label htmlFor="sname">Species Name: </label>
                    <input type="text" id="sname" name="sname" value={speciesName} onChange={e => onChangeSpeciesName(e.target.value)}/>              
                    <br/>
                </>
            )

}