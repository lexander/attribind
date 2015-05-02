# A Micro Library to Bind Listeners to Object Attribute Change Events
## and to generate those change events in the first place

JResig in 2007 (!!!)
[JavaScript Getters and Setters are now prevalent enough to become of actual interest to JavaScript developers.](http://ejohn.org/blog/javascript-getters-and-setters/)

```javascript
function Bindable () {
  this.foo = "bar";
}

AttriBind(Bindable);

var bound = new Bindable();
bound.addEventListener("fooChange", function (e) {
  console.log(e.newVal);
});

console.log(bound.foo); // "bar"

bound.foo = "new foo";
// event listener logs "new foo"


```


