import { fireEvent, render , screen} from "@testing-library/react";
import { SubmitForm, SubmitFormProps } from "./submit_form"
import userEvent from "@testing-library/user-event";

describe("submit form component", ()=> {
    test("given the props, when the button is clicked, the function is called", () => {
        const mock = jest.fn();
        const submitFormProps: SubmitFormProps = {
            onClickSumbitForm: mock
        }

        render(<SubmitForm {...submitFormProps}/>);
        const submitFormElement = screen.getByRole("button")
        fireEvent.click(submitFormElement);

        expect(mock).toBeCalled();
        expect(mock).toBeCalledTimes(1);
        
    })
})