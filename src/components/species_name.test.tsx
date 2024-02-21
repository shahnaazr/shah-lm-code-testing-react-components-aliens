import { fireEvent, render, screen } from "@testing-library/react"
import { SpeciesName, SpeciesNameProps } from "./species_name"
import userEvent from "@testing-library/user-event"

describe("Species Name Component", () => {
    test("Given the props for the species name, When the component is rendered, then the species name label should be present", ()=> {
        //arrange
        const speciesNameProps: SpeciesNameProps = {
           speciesName: "animal",
           onChangeSpeciesName: ()=> {}
        }

        //act
        render(<SpeciesName {...speciesNameProps}/>);
  
        //assert
        const labelForSpeciesName = screen.getByText("Species Name:");
        expect(labelForSpeciesName).toBeInTheDocument();
    
    })

    test("Given the props for the species name, When the component is rendered, then the species name text field should display the right value", ()=> {
        //arrange
        const speciesNameProps: SpeciesNameProps = {
           speciesName: "animal",
           onChangeSpeciesName: ()=> {}
        }

        //act
        render(<SpeciesName {...speciesNameProps}/>);
  
        //assert
        const speciesNameInputField = screen.getByLabelText("Species Name:");
        expect(speciesNameInputField).toHaveValue(speciesNameProps.speciesName);
    
    })

    test("Given the props for the species name, When a value is entered in the species name input field, then the onChangeSpeciesName function is called", async ()=> {
        //arrange
        const mock = jest.fn();
        const speciesNameProps: SpeciesNameProps = {
           speciesName: "animal",
           onChangeSpeciesName: mock
        }

        //act
        render(<SpeciesName {...speciesNameProps}/>);
  
        //assert
        const speciesNameInputField = screen.getByLabelText("Species Name:");
        await userEvent.type(speciesNameInputField, "reptile")
        expect(mock).toBeCalledTimes(7);
  
    })

    test("Given the props for the species name, When a value is entered in the species name input field, then the onChangeSpeciesName function is called with the new value", ()=> {
        //arrange
        const mock = jest.fn();
        const speciesNameProps: SpeciesNameProps = {
           speciesName: "animal",
           onChangeSpeciesName: mock
        }

        //act
        render(<SpeciesName {...speciesNameProps}/>);
  
        //assert
        const speciesNameInputField = screen.getByLabelText("Species Name:");
        fireEvent.change(speciesNameInputField, {target: {value: "reptile"}})
        expect(mock).toBeCalledTimes(1);
        expect(mock).toBeCalledWith("reptile");
  
    })
})
