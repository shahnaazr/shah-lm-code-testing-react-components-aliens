import { fireEvent, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ReasonForSparing, ReasonforSparingProps } from "./reason_for_sparing"
import { errorMessage01, errorMessage02 } from "./validate/validate_reason_for_sparing"

describe("Reason for sparing Component", () => {
    test("Given the props for the reason for sparing, When the component is rendered, then the reason for sparing label should be present", ()=> {
        //arrange
        const reasonForSparingProps: ReasonforSparingProps = {
            reasonForSparing: "this is fantastic",
           onChangeReasonForSparing: ()=> {}, 
           validate: (reasonForSparing)=> []
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
           onChangeReasonForSparing: ()=> {}, 
           validate: (reasonForSparing)=> []
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
           onChangeReasonForSparing: mock, 
           validate: (reasonForSparing)=> []
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
           onChangeReasonForSparing: mock, 
           validate: (reasonForSparing)=> []
        }

        //act
        render(<ReasonForSparing {...reasonForSparingProps}/>);
  
        //assert
        const reasonForSparingInputField = screen.getByLabelText("Reason for sparing:");
        fireEvent.change(reasonForSparingInputField, {target: {value: "what a beautiful day"}})
        expect(mock).toBeCalledTimes(1);
        expect(mock).toBeCalledWith("what a beautiful day");
  
    })
    
    test("given the props, when the value is lesser than 17 char for reason for sparing, then the user should see an error message", ()=> {

        //arrange
        const mock = jest.fn();
        const mockValidate = jest.fn();
        mockValidate.mockReturnValue([errorMessage01])
        const reasonForSparingProps: ReasonforSparingProps = {
            reasonForSparing: "this is great",
           onChangeReasonForSparing: mock, 
           validate: mockValidate
        }

        //act
        render(<ReasonForSparing {...reasonForSparingProps}/>);
        
        //assert
        expect(screen.getByText(errorMessage01)).toBeInTheDocument();
    })

    test("given the props, when the value is greater than 153 char for reason for sparing, then the user should see an error message", ()=> {
        //arrange
        const mock = jest.fn();
        const mockValidate = jest.fn();
        mockValidate.mockReturnValue([errorMessage02])
        const reasonForSparingProps: ReasonforSparingProps = {
            reasonForSparing: "mxsyvjmompgzvqirunmgojmidemkfnafoxfuzwwrlhdquxemrceslwfaqsvbclzaekyemksvmvbencyfxtkntwtggzojjhzgpyeyoux xc",
           onChangeReasonForSparing: mock, 
           validate: mockValidate
        }

        //act
        render(<ReasonForSparing {...reasonForSparingProps}/>);
        
        //assert
        expect(screen.getByText(errorMessage02)).toBeInTheDocument();

    })

    test("given the props, when the reason for sparing is of right value, then the user should not see an error message", ()=> {
         //arrange
         const mock = jest.fn();
         const mockValidate = jest.fn();
         mockValidate.mockReturnValue([]);
         const reasonForSparingProps: ReasonforSparingProps = {
             reasonForSparing: "mxsyvjmompgzvqirunmgojmidemkfnafoxfuzwwrlhdquxemrceslwfaqsvbclzaekyemksvmvbencyfxtkntwtggzojjhzgpyeyoux xc",
            onChangeReasonForSparing: mock, 
            validate: mockValidate
         }
 
         //act
         render(<ReasonForSparing {...reasonForSparingProps}/>);
         
         //assert
         expect(screen.queryByText(errorMessage01)).not.toBeInTheDocument();
         expect(screen.queryByText(errorMessage02)).not.toBeInTheDocument();
    })
})
