export interface NumberOfBeingsProps {
    numberOfBeings: string;
    onChangeNumberOfBeings: (e: string) => void;
}

export const NumberOfBeings:React.FC<NumberOfBeingsProps> = ({numberOfBeings, onChangeNumberOfBeings}) => {

return (
            <>
                <label htmlFor="numberofbeings">Number of beings: </label>
                <input type="text" id="numberofbeings" name="numberofbeings" value={numberOfBeings} onChange={e=> onChangeNumberOfBeings(e.target.value)}/>
                <br/>
            </>
        )
}