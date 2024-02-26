import { useState } from 'react';
import W12MHeader from './W12MHeader';
import { SpeciesName } from './species_name';
import { PlanetName } from './planet_name';
import { NumberOfBeings } from './number_of_beings';
import { WhatIsResult } from './what_is_result';
import { ReasonForSparing } from './reason_for_sparing';
import { SubmitForm } from './submit_form';
import { DisplayFormDetails } from './display_form_details';
import { validateSpeciesName } from './validate/validate_species_name';
import { validatePlanetName } from './validate/validate_planet_name';
import { validateNumberOfBeings } from './validate/validate_number_of_beings';
import { validateWhatIsResult } from './validate/validate_what_is_result';
import { validateReasonForSparing } from './validate/validate_reason_for_sparing';

const W12MForm = () => {

	const [speciesName, setSpeciesName] = useState("humans");
	const [planetName, setPlanetName] = useState("earth");
	const [numberOfBeings, setNumberOfBeings] = useState("4");
	const [result, setResult] = useState("");
	const [reasonForSparing, setReasonForSparing] = useState<string>("");
	const [isSubmitted, setIsSubmitted] = useState(false);
	
	const onSubmit = () => {
		setIsSubmitted(true);
	}

	const handleFormSubmit = (event:any)=> {
		event.preventDefault();
	}
	return (
		<section className='w12MForm'>
			<W12MHeader />
			<form onSubmit={handleFormSubmit}>
				<SpeciesName speciesName={speciesName} onChangeSpeciesName={(value) => setSpeciesName(value)} validate={validateSpeciesName}/>
				<PlanetName planetName={planetName} onChangePlanetName={value => setPlanetName(value)} validate={validatePlanetName}/>
				<NumberOfBeings numberOfBeings={numberOfBeings} onChangeNumberOfBeings={value => setNumberOfBeings(value)} validate={validateNumberOfBeings}/>
				<WhatIsResult result={result} onChangeResult={value => setResult(value)} validate={validateWhatIsResult}/>
				<ReasonForSparing reasonForSparing={reasonForSparing} onChangeReasonForSparing={value => setReasonForSparing(value)} validate={validateReasonForSparing}/>
				<SubmitForm onClickSumbitForm={onSubmit}/>
			</form>	
			{isSubmitted && <DisplayFormDetails speciesName={speciesName} planetName={planetName} numberOfBeings={numberOfBeings} result={result} reasonForSparing={reasonForSparing} />}	
			
		</section>
	);
};

export default W12MForm;
