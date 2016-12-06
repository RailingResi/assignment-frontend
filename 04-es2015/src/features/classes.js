export function es5(val) {
  var C = function(hello) {
    this.hello = hello
  }
  C.prototype.say = function() {
    return this.hello
  }

  var o = new C(val)
  return o.say()
}

export function es6(val) {

    function privatMethode(val){
        return val;
    }

    function publicMethode(val){
      return privatMethode(val);
    }
    return publicMethode(val);
}
