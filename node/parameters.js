if(process.argv.length < 3){
  console.log('usage: node parameters.js joe')
  return
}
console.log("Hello, %s!",process.argv[2])