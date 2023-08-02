// Purpose of the bind method in JavaScript
const obj = {
    x: 10,
    getX: function() {
      return this.x;
    }
  };
  
  const unboundGetX = obj.getX;
  console.log(unboundGetX()); // undefined (this is undefined)
  
  const boundGetX = obj.getX.bind(obj);
  console.log(boundGetX()); // 10 (this is now the obj)
  