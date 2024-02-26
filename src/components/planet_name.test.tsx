import { fireEvent, render , screen} from "@testing-library/react"
import { PlanetName, PlanetNameProps } from "./planet_name"
import userEvent from "@testing-library/user-event"
import { errorMessage01, errorMessage02, errorMessage03 } from "./validate/validate_planet_name"

describe("planet name component", () => {
    test("given the props for planet name component, when the component is rendered, then the label name is displayed on the document", ()=> {
        //arrange
        const planetNameProps: PlanetNameProps = {
            planetName: "venus",
            onChangePlanetName: () => {},
            validate: (planetName: string) => Array<string>()
        }
        //act
        render(<PlanetName {...planetNameProps}/>)

        //assert
        const labelForPlanetName = screen.getByText("Planet Name:");
        expect(labelForPlanetName).toBeInTheDocument();
    })

    test("given the props for planet name component, when the component is rendered, then the input field should be display the right value", ()=> {
        //arrange
        const planetNameProps: PlanetNameProps = {
            planetName: "venus",
            onChangePlanetName: () => {}, 
            validate: (planetName)=> []
        }
        //act
        render(<PlanetName {...planetNameProps}/>)

        //assert
        const planetNameInputField = screen.getByLabelText("Planet Name:");
        expect(planetNameInputField).toHaveValue(planetNameProps.planetName);
    })
    test("Given the props for the planet name, When a value is entered in the planet name input field, then the onChangePlanetName function is called", async ()=> {
        //arrange
        const mock = jest.fn();
        const planetNameProps: PlanetNameProps = {
            planetName: "venus",
            onChangePlanetName: mock, 
            validate: (planetName)=> []
        }

        //act
        render(<PlanetName {...planetNameProps}/>);

        const planetNameInputField = screen.getByLabelText("Planet Name:");
        await userEvent.type(planetNameInputField, "mars");
  
        //assert
        expect(mock).toBeCalledTimes(4);
  
    })

    test("Given the props for the planet name, When a value is entered in the planet name input field, then the onChangePlanetName function is called with the new value", ()=> {
        //arrange
        const mock = jest.fn();
        const planetNameProps: PlanetNameProps = {
            planetName: "venus",
            onChangePlanetName: mock, 
            validate: (planetName)=> []
        }

        //act
        render(<PlanetName {...planetNameProps}/>);

        const planetNameInputField = screen.getByLabelText("Planet Name:");
        fireEvent.change(planetNameInputField, {target: {value: "mars"}})
  
        //assert
        expect(mock).toBeCalledWith("mars");
  
    })

    //
    test("given the props, when the value is lesser than 2 char for planet name, then the user should see an error message", ()=> {

        //arrange
        const mock = jest.fn();
        const mockValidate = jest.fn();
        mockValidate.mockReturnValue([errorMessage01])
        const planetNameProps: PlanetNameProps = {
        planetName: "w",
        onChangePlanetName: mock,
        validate: mockValidate
        }

        //act
        render(<PlanetName {...planetNameProps}/>)
        // const PlanetNameInputField = screen.getByLabelText("Planet Name:");
        // fireEvent.change(PlanetNameInputField, {target: {value: "we"}})
        
        //assert
        expect(screen.getByText(errorMessage01)).toBeInTheDocument();
    })

    test("given the props, when the value is greater than 49 char for planet name, then the user should see an error message", ()=> {
        //arrange
        const mock = jest.fn();
        const mockvalidate = jest.fn();
        mockvalidate.mockReturnValue([errorMessage02])
        const PlanetNameProp: PlanetNameProps = {
            planetName :"abcdefghijklmnopqrstuvwzyzabcdefghijklmnopqrstuvwzyz",
            onChangePlanetName: mock,
            validate: mockvalidate
        }

        //act
        render(<PlanetName {...PlanetNameProp}/>)

        expect(screen.getByText(errorMessage02)).toBeInTheDocument();

    })

    test("given the props, when the value contains a special char for planet name, then the user should see an error message", ()=> {
        //arrange
        const mock = jest.fn();
        const mockvalidate = jest.fn();
        mockvalidate.mockReturnValue([errorMessage03])
        const PlanetNameProp: PlanetNameProps = {
            planetName :"abcd!fg",
            onChangePlanetName: mock,
            validate: mockvalidate
        }

        //act
        render(<PlanetName {...PlanetNameProp}/>)

        expect(screen.getByText(errorMessage03)).toBeInTheDocument();
    })

    test("given the props, when the value contains a number for planet name, then the user should not see an error message", ()=> {
        //arrange
        const mock = jest.fn();
        const mockvalidate = jest.fn();
        mockvalidate.mockReturnValue([]);
        const PlanetNameProp: PlanetNameProps = {
            planetName :"ear1h",
            onChangePlanetName: mock,
            validate: mockvalidate
        }

        //act
        render(<PlanetName {...PlanetNameProp}/>)
        expect(screen.queryByText(errorMessage01)).not.toBeInTheDocument();
        expect(screen.queryByText(errorMessage02)).not.toBeInTheDocument();
        expect(screen.queryByText(errorMessage03)).not.toBeInTheDocument();
            })

    test("given the props, when the planet name is of right value, then the user should not see an error message", ()=> {
        //arrange
        const mock = jest.fn();
        const PlanetNameProp: PlanetNameProps = {
            planetName :"a15cde5gh",
            onChangePlanetName: mock,
            validate: (planetName)=> []
        }

        //act
        render(<PlanetName {...PlanetNameProp}/>)
        expect(screen.queryByText(errorMessage01)).not.toBeInTheDocument();
        expect(screen.queryByText(errorMessage02)).not.toBeInTheDocument();
        expect(screen.queryByText(errorMessage03)).not.toBeInTheDocument();
    })
})