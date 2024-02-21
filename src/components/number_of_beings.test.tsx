import { fireEvent, render, screen } from "@testing-library/react"
import { SpeciesName, SpeciesNameProps } from "./species_name"
import userEvent from "@testing-library/user-event"
import { NumberOfBeings, NumberOfBeingsProps } from "./number_of_beings"

describe("Number of beings Component", () => {
    test("Given the props for the number of beings, When the component is rendered, then the number of beings label should be present", ()=> {
        //arrange
        const numberOfBeingsProps: NumberOfBeingsProps = {
            numberOfBeings: "20",
           onChangeNumberOfBeings: ()=> {}
        }

        //act
        render(<NumberOfBeings {...numberOfBeingsProps}/>);
  
        //assert
        const labelForNumberOfBeings = screen.getByText("Number of beings:");
        expect(labelForNumberOfBeings).toBeInTheDocument();
    
    })

    test("Given the props for the number of beings, When the component is rendered, then the number of beings text field should display the right value", ()=> {
         //arrange

         const numberOfBeingsProps: NumberOfBeingsProps = {
             numberOfBeings: "20",
            onChangeNumberOfBeings: ()=> {}
         }
 
         //act
         render(<NumberOfBeings {...numberOfBeingsProps}/>);
   
  
        //assert
        const numberOfBeingsInputField = screen.getByLabelText("Number of beings:");
        expect(numberOfBeingsInputField).toHaveValue(numberOfBeingsProps.numberOfBeings);
    
    })

    test("Given the props for the number of beings, When a value is entered in the number of beings input field, then the onChangeNumberOfBeings function is called", async ()=> {
        //arrange
        const mock = jest.fn();
        const numberOfBeingsProps: NumberOfBeingsProps = {
            numberOfBeings: "20",
           onChangeNumberOfBeings: mock
        }

        //act
        render(<NumberOfBeings {...numberOfBeingsProps}/>);
  
        //assert
        const numberOfBeingsInputField = screen.getByLabelText("Number of beings:");
        await userEvent.type(numberOfBeingsInputField, "30")
        expect(mock).toBeCalledTimes(2);
  
    })

    test("Given the props for the number of beings, When a value is entered in the number of beings input field, then the onChangeNumberOfBeings function is called with the new value", ()=> {
        //arrange
        const mock = jest.fn();
        const numberOfBeingsProps: NumberOfBeingsProps = {
            numberOfBeings: "20",
           onChangeNumberOfBeings: mock
        }

        //act
        render(<NumberOfBeings {...numberOfBeingsProps}/>);
  
        //assert
        const numberOfBeingsInputField = screen.getByLabelText("Number of beings:");
        fireEvent.change(numberOfBeingsInputField, {target: {value: "40"}})
        expect(mock).toBeCalledTimes(1);
        expect(mock).toBeCalledWith("40");
  
    })
})
