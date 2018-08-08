const expect = require('chai').expect
const danconverterunits = require('..').default


describe('#danconverterunits',function () {
	it('de psi a pas',function () {
		const result = danconverterunits('PRESSURE','PSI',10,'PAS')
		expect(result).to.equal(68947.6)
	})
	it('de pas a psi',function () {
		const result = danconverterunits('PRESSURE','PAS',1000,'PSI')
		expect(result).to.equal(0.145038)
	})
})