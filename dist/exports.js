!function (e, t) {
    "object" == typeof exports && "object" == typeof module
        ? module.exports = t()
        : "function" == typeof define && define.amd
            ? define([], t)
            : "object" == typeof exports
                ? exports.ajs = t()
                : e.ajs = t()
}

    (this, (function () {
        return function () {
            "use strict";
            var e = {
                138: function (e, t) {
                    t.default = {
                        info: function () {
                            const e = new Map;
                            return e.set("name", "ajs"), e.set("version", "1.0.0"), e
                        }
                    }
                }
            },
                t = {};
            return function n(o) {
                if (t[o]) return t[o].exports;
                var r = t[o] = {
                    exports: {}
                };
                return e[o](r, r.exports, n),
                    r.exports
            }
                (138)
        }().default
    })
    );