function fieldValue($field) {
  function currentValue() {
    return $field.val()
  }
  var changeE = $($field).asEventStream("keyup")
  return changeE.map(currentValue).toProperty(currentValue())
}

var a = fieldValue($("#a")).map(parseInt);
var b = fieldValue($("#b")).map(parseInt);
var c = a.combine(b, function (aval, bval) {
  return aval + bval;
})

c.onValue(function(newValue){
  $("#c").val(newValue);
})