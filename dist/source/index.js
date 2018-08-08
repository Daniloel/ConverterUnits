"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = danconverterunits;
function danconverterunits(converterType, unitIn, magnitude, unitOut) {
	var PRESSURE = "PRESSURE",
	    MASS = "MASS",
	    VOLUME = "VOLUME",
	    LONGITUDE = "LONGITUDE";
	var result0 = void 0;
	if (converterType === PRESSURE) {
		result0 = pressureConverter(unitIn, magnitude, unitOut);
	} else if (converterType === MASS) {} else if (converterType === VOLUME) {} else if (converterType === LONGITUDE) {}

	function pressureConverter(unitIn, magnitude, unitOut) {

		var units = {
			psi_pas: 6894.76,
			pas_psi: 0.000145038
		};

		function converterFactor(unitIn, unitOut) {
			if (unitIn === 'PSI' && unitOut === 'PAS') {
				return units.psi_pas;
			} else if (unitOut === 'PSI' && unitIn === 'PAS') {
				return units.pas_psi;
			}
		}

		var result1 = magnitude * converterFactor(unitIn, unitOut);

		return result1;
	}
	console.log(result0);
	return result0;
}