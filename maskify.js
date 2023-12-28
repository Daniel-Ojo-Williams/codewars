function maskify(cc){
  let masked = '';
  let extract = Array.from(cc);
  extract.splice(0, extract.length - 4).forEach(each => {
    masked += '#'
  })
  extract.forEach(each => {
    masked += each
  })
  return masked
}

// console.log(maskify('12345'));
if(4%2){
  console.log(4%)
  console.log(true)
} else {
  console.log(false)
}