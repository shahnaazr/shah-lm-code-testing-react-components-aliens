import { fireEvent, render, screen } from "@testing-library/react"
import { SpeciesName, SpeciesNameProps } from "./species_name"
import userEvent from "@testing-library/user-event"
import { NumberOfBeings, NumberOfBeingsProps } from "./number_of_beings"
import { errorMessage01, errorMessage02 } from "./validate/validate_number_of_beings"

describe("Number of beings Component", () => {
    test("Given the props for the number of beings, When the component is rendered, then the number of beings label should be present", ()=> {
        //arrange
        const numberOfBeingsProps: NumberOfBeingsProps = {
            numberOfBeings: "20",
           onChangeNumberOfBeings: ()=> {}, 
           validate: (numberOfBeings)=> []
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
            onChangeNumberOfBeings: ()=> {}, 
            validate: (numberOfBeings)=> []
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
           onChangeNumberOfBeings: mock, 
           validate: (numberOfBeings)=> []
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
           onChangeNumberOfBeings: mock, 
           validate: (numberOfBeings)=> []
        }

        //act
        render(<NumberOfBeings {...numberOfBeingsProps}/>);
  
        //assert
        const numberOfBeingsInputField = screen.getByLabelText("Number of beings:");
        fireEvent.change(numberOfBeingsInputField, {target: {value: "40"}})
        expect(mock).toBeCalledTimes(1);
        expect(mock).toBeCalledWith("40");
  
    }) 
    
    //
    test("given the props, when the value is lesser than 10 char for number of beings, then the user should see an error message", ()=> {

        //arrange
        const mock = jest.fn();
        const mockvalidate = jest.fn();
        mockvalidate.mockReturnValue([errorMessage01])
        const numberOfBeingsProps: NumberOfBeingsProps = {
            numberOfBeings: "20",
           onChangeNumberOfBeings: mock, 
           validate: mockvalidate
        }

        //act
        render(<NumberOfBeings {...numberOfBeingsProps}/>);

        expect(screen.getByText(errorMessage01)).toBeInTheDocument();

    })

    

    test("given the props, when the value contains a special char for number of beings, then the user should see an error message", ()=> {
       
        //arrange
        const mock = jest.fn();
        const mockvalidate = jest.fn();
        mockvalidate.mockReturnValue([errorMessage02])
        const numberOfBeingsProps: NumberOfBeingsProps = {
            numberOfBeings: "20000000000!@",
           onChangeNumberOfBeings: mock, 
           validate: mockvalidate
        }

        //act
        render(<NumberOfBeings {...numberOfBeingsProps}/>);

        expect(screen.getByText(errorMessage02)).toBeInTheDocument();
    })

    test("given the props, when the value contains aphabets for number of beings, then the user should not see an error message", ()=> {
         //arrange
         const mock = jest.fn();
         const mockvalidate = jest.fn();
         mockvalidate.mockReturnValue([errorMessage02])
         const numberOfBeingsProps: NumberOfBeingsProps = {
             numberOfBeings: "20asd000000000",
            onChangeNumberOfBeings: mock, 
            validate: mockvalidate
         }
 
         //act
         render(<NumberOfBeings {...numberOfBeingsProps}/>);
 
         expect(screen.getByText(errorMessage02)).toBeInTheDocument();
     })

    test("given the props, when the number of beings is of right value, then the user should not see an error message", ()=> {
       //arrange
       const mock = jest.fn();
       const mockvalidate = jest.fn();
       mockvalidate.mockReturnValue([])
       const numberOfBeingsProps: NumberOfBeingsProps = {
           numberOfBeings: "20asd000000000",
          onChangeNumberOfBeings: mock, 
          validate: mockvalidate
       }

       //act
       render(<NumberOfBeings {...numberOfBeingsProps}/>);

        expect(screen.queryByText(errorMessage01)).not.toBeInTheDocument();
        expect(screen.queryByText(errorMessage02)).not.toBeInTheDocument();
    })
})