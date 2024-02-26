import { ErrorMessage } from "./error_message";

export interface NumberOfBeingsProps {
    numberOfBeings: string;
    onChangeNumberOfBeings: (e: string) => void;
    validate: (numberOfBeings: string)=> string[];
}

export const NumberOfBeings:React.FC<NumberOfBeingsProps> = ({numberOfBeings, onChangeNumberOfBeings, validate}) => {
const messages = validate(numberOfBeings);
return (
            <>
                <label htmlFor="numberofbeings">Number of beings: </label>
                <input type="text" id="numberofbeings" name="numberofbeings" value={numberOfBeings} onChange={e=> onChangeNumberOfBeings(e.target.value)}/>
                <br/>
                <ErrorMessage messages={messages}/>
            </>
        )
}