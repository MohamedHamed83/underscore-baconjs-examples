var addE= $("#addItem").asEventStream("click")
.map(function(){
  return $("#itemName").val();
})
var removeE=$("#removeItem").asEventStream("click")
var contentsp=Bacon.update(
  [],
  addE,function(items,newItem){
    return items.concat(newItem)
  },
  removeE, function(items){
    return items.slice(1)
  }
)
var checkoute= $("#checkout").asEventStream("click")
.map(contentsp)
checkoute.onValue(function(newValue){
  console.log(newValue);
})