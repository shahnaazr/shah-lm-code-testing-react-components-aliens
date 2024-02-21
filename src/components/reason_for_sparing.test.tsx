import { fireEvent, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ReasonForSparing, ReasonforSparingProps } from "./reason_for_sparing"

describe("Reason for sparing Component", () => {
    test("Given the props for the reason for sparing, When the component is rendered, then the reason for sparing label should be present", ()=> {
        //arrange
        const reasonForSparingProps: ReasonforSparingProps = {
            reasonForSparing: "this is fantastic",
           onChangeReasonForSparing: ()=> {}
        }

        //act
        render(<ReasonForSparing {...reasonForSparingProps}/>);
  
        //assert
        const labelForReasonForSparing = screen.getByText("Reason for sparing:");
        expect(labelForReasonForSparing).toBeInTheDocument();
    
    })

    test("Given the props for the reason for sparing, When the component is rendered, then the reason for sparing text area should display the right value", ()=> {
        //arrange
        const reasonForSparingProps: ReasonforSparingProps = {
            reasonForSparing: "this is fantastic",
           onChangeReasonForSparing: ()=> {}
        }

        //act
        render(<ReasonForSparing {...reasonForSparingProps}/>);
  
        //assert
        const reasonForSparingPropsInputField = screen.getByLabelText("Reason for sparing:");
        expect(reasonForSparingPropsInputField).toHaveValue(reasonForSparingProps.reasonForSparing);
    
    })

    test("Given the props for the reason for sparing, When a value is entered in the reason for sparing input area, then the onChangeReasonForSparing function is called", async ()=> {
        //arrange
        const mock = jest.fn();
        const reasonForSparingProps: ReasonforSparingProps = {
            reasonForSparing: "this is fantastic",
           onChangeReasonForSparing: mock
        }

        //act
        render(<ReasonForSparing {...reasonForSparingProps}/>);
  
        //assert
        const reasonForSparingInputField = screen.getByLabelText("Reason for sparing:");
        await userEvent.type(reasonForSparingInputField, "what a beautiful day")
        expect(mock).toBeCalledTimes(20);
  
    })

    test("Given the props for the reason for sparing, When a value is entered in the reason for sparing input area, then the onChangeReasonForSparing function is called with the new value", ()=> {
        //arrange
        const mock = jest.fn();
        const reasonForSparingProps: ReasonforSparingProps = {
            reasonForSparing: "this is fantastic",
           onChangeReasonForSparing: mock
        }

        //act
        render(<ReasonForSparing {...reasonForSparingProps}/>);
  
        //assert
        const reasonForSparingInputField = screen.getByLabelText("Reason for sparing:");
        fireEvent.change(reasonForSparingInputField, {target: {value: "what a beautiful day"}})
        expect(mock).toBeCalledTimes(1);
        expect(mock).toBeCalledWith("what a beautiful day");
  
    })
})
