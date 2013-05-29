function categorySelector(product){
  return product.category;
}
function groupBy(list,keySelector){
  var result = [];
  function getGroupedItem(key){
    for(var i=0;i<result.length;i++){
       if (result[i].Key === key)
         return result[i];
    }
    var newGroupedItem = { Key : key, Value: [] };
    result.push(newGroupedItem);
    return newGroupedItem;
  }
  for(var i=0;i<list.length;i++){
    var key = keySelector(list[i]);
    var groupedItemValue = getGroupedItem(key).Value;
    groupedItemValue.push(list[i]);
  }
  return result;
}

function groupBy(list,keySelector){
  var result = {};
  for(var i=0;i<list.length;i++){
    var key = keySelector(list[i]);
    if (!result[key]) result[key] = [];
    result[key].push(list[i]);
  }
  return result;
}

function objectCreator(objDefs){
  var result = {};
  for(var mem in objDefs){
     result[mem] = (function(data){
            return function(){
               if (arguments.length === 0) return data;
               data = arguments[0];
            };
          })(objDefs[mem]);
  }
  return result;
}