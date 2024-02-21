import { fireEvent, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { WhatIsResult, WhatIsResultProps } from "./what_is_result"

describe("What is result Component", () => {
    test("Given the props for what is result, When the component is rendered, then the what is result label should be present", ()=> {
        //arrange
        const whatIsResultProps: WhatIsResultProps = {
           result: "4",
           onChangeResult: ()=> {}
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
        onChangeResult: ()=> {}
     }

     //act
     render(<WhatIsResult {...whatIsResultProps}/>);
  
        //assert
        const whatIsResultPropsSelect = screen.getByLabelText("What is 2+2? :");
        expect(whatIsResultPropsSelect).toHaveValue(whatIsResultProps.result);
    
    })

    test("Given the props for the species name, When a value is entered in the species name input field, then the onChangeSpeciesName function is called", async ()=> {
        //arrange
        const mock = jest.fn();
        const whatIsResultProps: WhatIsResultProps = {
            result: "4",
            onChangeResult: mock
         }

        //act
        render(<WhatIsResult {...whatIsResultProps}/>);

        //assert
        const whatIsResultPropsSelect = screen.getByLabelText("What is 2+2? :");
        await userEvent.selectOptions(whatIsResultPropsSelect, "Not 4")
        expect(mock).toBeCalledTimes(1);
  
    })

    test("Given the props for the species name, When a value is entered in the species name input field, then the onChangeSpeciesName function is called with the new value", ()=> {
        //arrange
        const mock = jest.fn();
        const whatIsResultProps: WhatIsResultProps = {
            result: "4",
            onChangeResult: mock
         }

        //act
        render(<WhatIsResult {...whatIsResultProps}/>);
  
        //assert
        const whatIsResultPropsSelect = screen.getByLabelText("What is 2+2? :");
        fireEvent.change(whatIsResultPropsSelect, {target: {value: "Not 4"}})
        expect(mock).toBeCalledTimes(1);
        expect(mock).toBeCalledWith("Not 4");
  
    })
})
