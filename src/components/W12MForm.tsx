import { useState } from 'react';
import W12MHeader from './W12MHeader';
import { SpeciesName } from './species_name';
import { PlanetName } from './planet_name';
import { NumberOfBeings } from './number_of_beings';
import { WhatIsResult } from './what_is_result';
import { ReasonForSparing } from './reason_for_sparing';
import { SubmitForm } from './submit_form';
import { DisplayFormDetails } from './display_form_details';

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
				<SpeciesName speciesName={speciesName} onChangeSpeciesName={(value) => setSpeciesName(value)}/>
				<PlanetName planetName={planetName} onChangePlanetName={value => setPlanetName(value)}/>
				<NumberOfBeings numberOfBeings={numberOfBeings} onChangeNumberOfBeings={value => setNumberOfBeings(value)}/>
				<WhatIsResult result={result} onChangeResult={value => setResult(value)}/>
				<ReasonForSparing reasonForSparing={reasonForSparing} onChangeReasonForSparing={value => setReasonForSparing(value)}/>
				<SubmitForm onClickSumbitForm={onSubmit}/>
			</form>	
			{isSubmitted && <DisplayFormDetails speciesName={speciesName} planetName={planetName} numberOfBeings={numberOfBeings} result={result} reasonForSparing={reasonForSparing} />}	
			
		</section>
	);
};

export default W12MForm;
