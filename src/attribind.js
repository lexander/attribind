/**
 * Created by ashusta on 4/28/15.
 */
var AttriBind = (function () {
    "use strict";

    var eventDocument = document.createDocumentFragment();

    function dispatchEvent (e) {
        eventDocument.dispatchEvent(e);
    }

    function addEventListener (eType, callback) {
        eventDocument.addEventListener(eType, callback);
    }

    function defaultSetter (il, v) {
        this["_" + il] = v;
    }

    function defaultGetter (il) {
        return this["_" + il];
    }

    return function AttriBind (target, config) {
        var i;

        config = config || {};

        if (typeof target.dispatchEvent === "undefined") {
            target.dispatchEvent = dispatchEvent;
            target.addEventListener = addEventListener;
        }

        for (i in target) {
            if (target.hasOwnProperty(i) && typeof target[i] !== "function") {
                (function () {
                    var il,
                        setter,
                        getter;

                    il = i;

                    getter = (config[il] && config[il].get) ? config[il].get : defaultGetter.bind(target, il);

                    setter = function () {
                        return function (v) {
                            if (config[il] && config[il].set) {
                                config[il].set.call(target, v);
                            } else {
                                defaultSetter.call(target, il, v);
                            }

                            target.dispatchEvent(new CustomEvent(il + "Change", {
                                detail: {
                                    newVal: target[il]
                                }
                            }));

                        }.bind(target);

                    }();

                    target.__defineGetter__(il, getter);
                    target.__defineSetter__(il, setter);
                }());

            }
        }
    };
}());