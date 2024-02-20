interface SubmitFormProps{
    onClickSumbitForm: () => void;
}
export const SubmitForm: React.FC<SubmitFormProps> = ({onClickSumbitForm}) => {
    return (
                <button type="submit" value="Submit Form" onClick= { () => onClickSumbitForm()}>Submit Form</button>                 
            )
}