import { render, screen } from "@testing-library/react"
import { DisplayFormDetails, DisplayFormDetailsProps } from "./display_form_details"

describe("Display form details component", ()=> {
    test("given the props for the display form details component, when the component is rendered, then the right values are displayed", ()=> {
        const displayFormDetailsProps : DisplayFormDetailsProps = {
            speciesName: "human",
            planetName: "earth",
            numberOfBeings: "4",
            result: "4",
            reasonForSparing: "we are fantastic species"
        }

        render(<DisplayFormDetails {...displayFormDetailsProps}/>)

        expect(screen.getByText("SpeciesName : " + displayFormDetailsProps.speciesName)).toBeInTheDocument();
        expect(screen.getByText("PlanetName : " +displayFormDetailsProps.planetName)).toBeInTheDocument();
        expect(screen.getByText("Number of beings : " +displayFormDetailsProps.numberOfBeings)).toBeInTheDocument();
        expect(screen.getByText("Result : " +displayFormDetailsProps.result)).toBeInTheDocument();
        expect(screen.getByText(/we are fantastic species/)).toBeInTheDocument();
    })
})