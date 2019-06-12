process.stdin.resume()
process.stdin.setEncoding('utf8')

console.log('What\'s your age ? ')
process.stdin.on('data', (age) => {
    const year = 2019;
    if (age >99 ){
        console.log ("...??..")
    }
    else {
    
  console.log('You were born in ' + (year - age))}
  process.exit()
})