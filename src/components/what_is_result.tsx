import { ErrorMessage } from "./error_message";

export interface WhatIsResultProps {
    result: string;
    onChangeResult: (e:string)=> void;
    validate: (result: string)=> string[];
}
export const WhatIsResult: React.FC<WhatIsResultProps> = ({result, onChangeResult, validate}) => {
    const messages = validate(result);
    return (
                <>
                    <label htmlFor="numberofbeingsvalues">What is 2+2? : </label> 
                    <select name="numberofbeingsvalues" id="numberofbeingsvalues" value={result} onChange={(e)=> onChangeResult(e.target.value)} >
                        <option value="Not 4">Not 4</option>
                        <option value="4">4</option>
                    </select>
                    <br/>
                    <ErrorMessage messages={messages}/>
                </>
            )
}