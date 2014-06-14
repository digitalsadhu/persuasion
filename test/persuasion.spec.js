var expect = require('chai').expect
  , sort   = require('../index.js')

describe('persuasion', function () {
  describe('string sorting', function () {
    it('should accept an array of strings and return it sorted', function () {
      var data = ['zebra','monkey','horse','cow']
      var sorted = sort(data)
      expect(sorted).to.be.an('array')
      expect(sorted[0]).to.equal('cow')
      expect(sorted[1]).to.equal('horse')
      expect(sorted[2]).to.equal('monkey')
      expect(sorted[3]).to.equal('zebra')
    })
  })
  describe('string sorting in reverse', function () {
    it('should accept an array of strings and return it sorted', function () {
      var data = ['zebra','monkey','horse','cow']
      var sorted = sort(data, { reverse: true })
      expect(sorted).to.be.an('array')
      expect(sorted[0]).to.equal('zebra')
      expect(sorted[1]).to.equal('monkey')
      expect(sorted[2]).to.equal('horse')
      expect(sorted[3]).to.equal('cow')
    })
  })
  describe('integer sorting', function () {
    it('should accept an array of ints and return them sorted', function () {
      var data = [12,1,10,3]
      var sorted = sort(data)
      expect(sorted).to.be.an('array')
      expect(sorted[0]).to.equal(1)
      expect(sorted[1]).to.equal(3)
      expect(sorted[2]).to.equal(10)
      expect(sorted[3]).to.equal(12)
    })
  })
  describe('integer sorting in reverse', function () {
    it('should force sorting to be in descending order', function () {
      var data = [12,1,10,3]
      var sorted = sort(data, {reverse: true})
      expect(sorted).to.be.an('array')
      expect(sorted[0]).to.equal(12)
      expect(sorted[1]).to.equal(10)
      expect(sorted[2]).to.equal(3)
      expect(sorted[3]).to.equal(1)
    })
  })
  describe('object sorting', function () {
    it('should accept an array of objects and return them sorted as specified', function () {
      var data = [
        { name: 'tom' },
        { name: 'bob' },
        { name: 'andrew' },
        { name: 'simon' }
      ]
      var sorted = sort(data, { property: 'name' })
      expect(sorted).to.be.an('array')
      expect(sorted[0].name).to.equal('andrew')
      expect(sorted[1].name).to.equal('bob')
      expect(sorted[2].name).to.equal('simon')
      expect(sorted[3].name).to.equal('tom')
    })
    it('should throw an error if property is not specified', function () {
      error = false
      var data = [
        { name: 'tom' },
        { name: 'bob' }
      ]
      try {
        var sorted = sort(data)
      } catch (err) {
        error = err
      }
      expect(error instanceof Error).to.equal(true)
      expect(error.message).to.equal("when sorting objects, 'property' must be set in options")
    })
  })
  describe('object sorting in reverse', function () {
    it('should accept an array of objects and return them sorted as specified in reverse', function () {
      var data = [
        { name: 'tom' },
        { name: 'bob' },
        { name: 'andrew' },
        { name: 'simon' }
      ]
      var sorted = sort(data, { property: 'name', reverse: true })
      expect(sorted).to.be.an('array')
      expect(sorted[0].name).to.equal('tom')
      expect(sorted[1].name).to.equal('simon')
      expect(sorted[2].name).to.equal('bob')
      expect(sorted[3].name).to.equal('andrew')
    })
  })
})
