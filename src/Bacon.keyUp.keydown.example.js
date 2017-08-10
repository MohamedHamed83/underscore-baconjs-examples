// Bacon.once(value) creates an EventStream that delivers the given single value for the first subscriber. 
// var s = Bacon.once("pow");

//Bacon.sequentially(interval, values) creates a stream containing given values 
// var s= Bacon.sequentially(200,[5,4,3,1,2, "pow"])

function keyUps(keyCode,value) {
  return $(document).asEventStream("keydown")
    .map(function (e) {
      return e.keyCode
    })
    .filter(function (key) {
      return key == keyCode;
    })
    //limit the time the function will be executed by adding delay time
    .throttle(1000)
}

function keyDowns(keyCode,value) {
  return $(document).asEventStream("keydown")
    .map(function (e) {
      return e.keyCode
    })
    .filter(function (key) {
      return key == keyCode;
    })
    //limit the time the function will be executed by adding delay time
    .throttle(1000)
}
  function keyState(keyCode,value){
    return  keyDowns(keyCode).map(value).merge(keyUps(keyCode).map([])).toProperty([]).skipDuplicates()
  }
//merge keyUps first stream with keyUps secode stream to listen on subscriber 
var s = 
keyUps(72).map("UP")
.merge(keyUps(71).map("DOWN"))

//merge keyUps first stream with keyDown secode stream to listen on subscriber 
var s = 
keyUps(72).map(true)
.merge(keyDowns(72).map(false))
.toProperty(false)

s.onValue(function (e) {
  console.log(e)
})

// keyDowns(72).onValue(function (e) {
//   console.log(e)
// })
// keyUps(72).onValue(function (e) {
//   console.log(e)
// })
