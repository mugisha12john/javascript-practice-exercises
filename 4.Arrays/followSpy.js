/*You've been provided with an array of itinerary routes, decipher the precise destinations he will visit in the correct sequence according to his meticulously planned itineraries.

Example
Based on the provided routes:

[ [USA, BRA], [JPN, PHL], [BRA, UAE], [UAE, JPN] ]*/
 
function findRoutes(routes) {
  let out = []
  const obj = Object.fromEntries(routes)
  const allDestination = routes.map(dest=> dest[1])
  let start= Object.keys(obj).find(arr=> !allDestination.includes(arr))
  while(start){
    out.push(start)
    start = obj[start]
  }
  return out
}
console.log(findRoutes([['USA', 'BRA'], ['JPN', 'PHL'], ['BRA', 'UAE'], ['UAE', 'JPN']]))