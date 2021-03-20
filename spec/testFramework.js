function descibe(title, body) {
  console.log(title);
  body();
}

function it(title, body) {
  console.log(title);
  body();
}

function expect(a){
  return {
    toEqual: function(b){
      if (a == b){
        console.log('pass!') } else {
        console.log('fail!')
        }
      },
    toBeAnArray: function (){
      if (a.constructor.name == "Array") {
        console.log('pass!') } else {
          console.log('fail!')
        }
      }
    }
}
