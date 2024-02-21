import { fireEvent, render , screen} from "@testing-library/react"
import { PlanetName, PlanetNameProps } from "./planet_name"
import userEvent from "@testing-library/user-event"

describe("planet name component", () => {
    test("given the props for planet name component, when the component is rendered, then the label name is displayed on the document", ()=> {
        //arrange
        const planetNameProps: PlanetNameProps = {
            planetName: "venus",
            onChangePlanetName: () => {}
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
            onChangePlanetName: () => {}
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
            onChangePlanetName: mock
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
            onChangePlanetName: mock
        }

        //act
        render(<PlanetName {...planetNameProps}/>);

        const planetNameInputField = screen.getByLabelText("Planet Name:");
        fireEvent.change(planetNameInputField, {target: {value: "mars"}})
  
        //assert
        expect(mock).toBeCalledWith("mars");
  
    })
})