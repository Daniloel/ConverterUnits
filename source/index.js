export default function danconverterunits(converterType,unitIn,magnitude,unitOut) {			
	const PRESSURE = "PRESSURE",
		MASS = "MASS",
		VOLUME = "VOLUME",
		LONGITUDE = "LONGITUDE"
	let result0
	if (converterType === PRESSURE){
		result0 = pressureConverter(unitIn,magnitude,unitOut)
	}else if(converterType === MASS){

	}else if(converterType === VOLUME){

	}else if(converterType === LONGITUDE){

	}

	function pressureConverter(unitIn,magnitude,unitOut) {
		
		const units = {
			psi_pas : 6894.76,
			pas_psi : 0.000145038
		}

		function converterFactor(unitIn,unitOut) {
			if (unitIn === 'PSI' && unitOut === 'PAS'){
				return units.psi_pas
			}else if(unitOut === 'PSI' && unitIn === 'PAS'){
				return units.pas_psi
			}
		}

		let result1 = magnitude * converterFactor(unitIn,unitOut)

		return result1
	}
	console.log(result0)
	return result0
}