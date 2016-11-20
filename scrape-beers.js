//const request = require('xhr')  // for client side later
const request = require('request')
const cheerio = require('cheerio')
const pull = require('pull-stream')
const {map} = pull
const async = require('pull-async')

const beerListPage = 'http://rogueandvagabond.co.nz/drinks/'

module.exports = () => pull(
  async(cb => request.get(beerListPage, cb)),
  map(res => {
    const $ = cheerio.load(res.body)
    const beerList = $('.beer-list li')

    const beers = beerList.map((i, el) => {

      const details = $(el).children().map((j, detail) => {
        const line = $(detail)
        const className = line.attr('class') 
        return {[className]: line.text()}
      }).toArray()

      const beer = details.reduce((beer, detail) => {
        return Object.assign(beer, detail) 
      }, {})

      return beer

    }).toArray()

    return beers.filter(beer => beer['beer-name'])
  })
)

