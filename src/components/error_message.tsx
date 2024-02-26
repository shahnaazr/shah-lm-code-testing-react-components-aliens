export interface ErrorMessageProps{
    messages : string[]
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({messages})=> {
    return (
        <>
            <ul>
             {messages.map((message:string, index:number) => <li key={index} style={{ color: 'red' }}>{message}</li>)}
            </ul>
        </>
    )
}