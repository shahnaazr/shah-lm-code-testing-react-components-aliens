import { fireEvent, render, screen } from "@testing-library/react"
import { SpeciesName, SpeciesNameProps } from "./species_name"
import userEvent from "@testing-library/user-event"
import { errorMessage01, errorMessage02, errorMessage03 } from "./validate/validate_species_name"

describe("Species Name Component", () => {
    test("Given the props for the species name, When the component is rendered, then the species name label should be present", ()=> {
        //arrange
        const speciesNameProps: SpeciesNameProps = {
           speciesName: "animal",
           onChangeSpeciesName: ()=> {},
           validate: (speciesName) => []
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
           onChangeSpeciesName: ()=> {},
           validate: (speciesName) => []
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
           onChangeSpeciesName: mock,
           validate: (speciesName) => []
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
           onChangeSpeciesName: mock,
           validate: (speciesName) => []
        }

        //act
        render(<SpeciesName {...speciesNameProps}/>);
  
        //assert
        const speciesNameInputField = screen.getByLabelText("Species Name:");
        fireEvent.change(speciesNameInputField, {target: {value: "reptile"}})
        expect(mock).toBeCalledTimes(1);
        expect(mock).toBeCalledWith("reptile");
  
    })

    test("given the props, when the value is lesser than 3 char for species name, then the user should see an error message", ()=> {

        //arrange
        const mock = jest.fn();
        const mockValidate = jest.fn();
        mockValidate.mockReturnValue([errorMessage01])
        const speciesNameProps: SpeciesNameProps = {
        speciesName: "we",
        onChangeSpeciesName: mock,
        validate: mockValidate
        }

        //act
        render(<SpeciesName {...speciesNameProps}/>)
        // const speciesNameInputField = screen.getByLabelText("Species Name:");
        // fireEvent.change(speciesNameInputField, {target: {value: "we"}})
        
        //assert
        expect(screen.getByText(errorMessage01)).toBeInTheDocument();
    })

    test("given the props, when the value is greater than 23 char for species name, then the user should see an error message", ()=> {
        //arrange
        const mock = jest.fn();
        const mockvalidate = jest.fn();
        mockvalidate.mockReturnValue([errorMessage02])
        const speciesNameProp: SpeciesNameProps = {
            speciesName :"abcdefghijklmnopqrstuvwzyz",
            onChangeSpeciesName: mock,
            validate: mockvalidate
        }

        //act
        render(<SpeciesName {...speciesNameProp}/>)

        expect(screen.getByText(errorMessage02)).toBeInTheDocument();

    })

    test("given the props, when the value contains a special char for species name, then the user should see an error message", ()=> {
        //arrange
        const mock = jest.fn();
        const mockvalidate = jest.fn();
        mockvalidate.mockReturnValue([errorMessage03])
        const speciesNameProp: SpeciesNameProps = {
            speciesName :"abcd!fg",
            onChangeSpeciesName: mock,
            validate: mockvalidate
        }

        //act
        render(<SpeciesName {...speciesNameProp}/>)

        expect(screen.getByText(errorMessage03)).toBeInTheDocument();
    })

    test("given the props,  when the value contains a number for species name, then the user should see an error message", ()=> {
        //arrange
        const mock = jest.fn();
        const mockvalidate = jest.fn();
        mockvalidate.mockReturnValue([errorMessage03])
        const speciesNameProp: SpeciesNameProps = {
            speciesName :"abc2ef",
            onChangeSpeciesName: mock,
            validate: mockvalidate
        }

        //act
        render(<SpeciesName {...speciesNameProp}/>)

        expect(screen.getByText(errorMessage03)).toBeInTheDocument();
            })

    test("given the props, when the species name is of right value, then the user should not see an error message", ()=> {
        //arrange
        const mock = jest.fn();
        const speciesNameProp: SpeciesNameProps = {
            speciesName :"abcdefgh",
            onChangeSpeciesName: mock,
            validate: (speciesName)=>[]
        }

        //act
        render(<SpeciesName {...speciesNameProp}/>)
        expect(screen.queryByText(errorMessage01)).not.toBeInTheDocument();
        expect(screen.queryByText(errorMessage02)).not.toBeInTheDocument();
        expect(screen.queryByText(errorMessage03)).not.toBeInTheDocument();
    })
})
