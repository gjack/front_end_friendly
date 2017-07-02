class Summator
  constructor: (@numberCollection) ->

  sum: =>
    @numberCollection.reduce(@_add, 0)

  sumSquared: =>
    @numberCollection.map(@_square).reduce(@_add, 0)

  _add: (partialSum, number) ->
    partialSum + number

  _square: (number) ->
    number * number

module.exports = Summator            
