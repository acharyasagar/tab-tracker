export default function(cb, wait) {
  var timeout;
  
  var debounced = function () {
    var args = arguments;
    var context = this;

    if(timeout) clearTimeout(timeout)
    timeout = setTimeout(function(){
      return cb.apply(context, args)
    }, wait)
    return
  }
  return debounced
}