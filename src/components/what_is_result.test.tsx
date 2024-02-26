import { fireEvent, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { WhatIsResult, WhatIsResultProps } from "./what_is_result"
import { errorMessage01 } from "./validate/validate_what_is_result"
import { when } from 'jest-when';

describe("What is result Component", () => {
    test("Given the props for what is result, When the component is rendered, then the what is result label should be present", ()=> {
        //arrange
        const whatIsResultProps: WhatIsResultProps = {
           result: "4",
           onChangeResult: ()=> {}, 
           validate: (result)=> []
        }

        //act
        render(<WhatIsResult {...whatIsResultProps}/>);
  
        //assert
        const labelForWhatIsResultProps = screen.getByText("What is 2+2? :");
        expect(labelForWhatIsResultProps).toBeInTheDocument();
    
    })

    test("Given the props for what is result, When the component is rendered, then the what is result drop down should display the right value", ()=> {
       //arrange
       const whatIsResultProps: WhatIsResultProps = {
        result: "4",
        onChangeResult: ()=> {}, 
        validate: (result)=> []
     }

     //act
     render(<WhatIsResult {...whatIsResultProps}/>);
  
        //assert
        const whatIsResultPropsSelect = screen.getByLabelText("What is 2+2? :");
        expect(whatIsResultPropsSelect).toHaveValue(whatIsResultProps.result);
    
    })

    test("Given the props for what is result, When the option selected is Not 4, then the error message is displayed", ()=> {
        //arrange
        const mock = jest.fn();
        const mockResult =jest.fn();
        when(mockResult).calledWith("Not 4").mockReturnValue([errorMessage01]);
        const whatIsResultProps: WhatIsResultProps = {
            result: "Not 4",
            onChangeResult: mock, 
            validate: mockResult
         }

        //act
        render(<WhatIsResult {...whatIsResultProps}/>);

        //assert
        // const whatIsResultPropsSelect = screen.getByLabelText("What is 2+2? :");
        // await userEvent.selectOptions(whatIsResultPropsSelect, "Not 4")
        expect(screen.getByText(errorMessage01)).toBeInTheDocument();
  
    })

    test("Given the props for what is result, When the option selected is 4, then the error message is not displayed", ()=> {
        //arrange
        const mock = jest.fn();
        const mockResult =jest.fn();
        mockResult.mockReturnValue([]);
        const whatIsResultProps: WhatIsResultProps = {
            result: "4",
            onChangeResult: mock, 
            validate: mockResult
         }

        //act
        render(<WhatIsResult {...whatIsResultProps}/>);

        //assert
        // const whatIsResultPropsSelect = screen.getByLabelText("What is 2+2? :");
        // await userEvent.selectOptions(whatIsResultPropsSelect, "4")
        expect(screen.queryByText(errorMessage01)).not.toBeInTheDocument();
  
    })
})