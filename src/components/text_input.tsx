export interface TextInputProps {
id: string,
value: string
onChangeFn: (e: string) => void;
}

export const TextInput: React.FC<TextInputProps> = ({id, value, onChangeFn})=> {
return(
    <>
    <input type="text" id={id} name={id} value={value} onChange={e=> onChangeFn(e.target.value)}/>
    </>
)
}