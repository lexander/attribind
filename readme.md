# A Micro Library to Bind Listeners to Object Attribute Change Events
## and to generate those change events in the first place

JResig in 2007 (!!!)
[JavaScript Getters and Setters are now prevalent enough to become of actual interest to JavaScript developers.](http://ejohn.org/blog/javascript-getters-and-setters/)

```javascript
    
    var a = {
        bar: 1,
        biz: 2
    };

    AttriBind(a, {
        biz: {
            set: function (v) {
                this._biz = v + " more";
            }
        }
    });

    a.addEventListener("barChange", function (e) {
        console.log(e.detail.newVal);
    });

    a.addEventListener("bizChange", function (e) {
        console.log(e.detail.newVal);
    });


    a.bar = "hi"
    a.biz = "have some";

```


