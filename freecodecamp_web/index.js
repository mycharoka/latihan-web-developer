function callFirst(callback) {
  console.log('kepanggil pertama...')
  console.log(`si callback isinya apa .. ${callback}`)
  callback()
}

function callLater() {
  console.log(`hasil callback...`)
}

callFirst(callLater)