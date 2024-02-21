export interface ReasonforSparingProps{
    reasonForSparing: string;
    onChangeReasonForSparing: (e: string)=> void;
}

export const ReasonForSparing: React.FC<ReasonforSparingProps> = ({reasonForSparing, onChangeReasonForSparing}) => {
    return (
                <>
                    <label htmlFor="reasonforsparing">Reason for sparing: </label>
                    <textarea rows={5} cols={60} id="reasonforsparing" name="reasonforsparing" value={reasonForSparing} onChange={e=> onChangeReasonForSparing(e.target.value)}/>
                    <br/>	
                </>
            )
}