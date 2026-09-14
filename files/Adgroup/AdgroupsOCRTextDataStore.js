__d(
  "AdgroupsOCRTextDataStore",
  [
    "AdgroupOCRTextDataStoreSource",
    "ReverseInteropStoreBase",
    "adsCreateStoreThunkSelector",
    "memoize",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "AdgroupOCRTextDataStore.DATA_UPDATED",
      s = (function (t) {
        function n() {
          var n,
            o = new (r("AdgroupOCRTextDataStoreSource"))();
          return (
            (n = t.call(this, o, e) || this),
            (n.fluxGetSelector = r("memoize")(function () {
              return r("adsCreateStoreThunkSelector")(u, function (e) {
                return u.get(e);
              });
            })),
            n
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var o = n.prototype;
        return (
          (o.get = function (t) {
            return this.getSingleField(t, "ad_ocr_text");
          }),
          n
        );
      })(r("ReverseInteropStoreBase"));
    s.__moduleID = i.id;
    var u = new s(),
      c = u;
    l.default = c;
  },
  98,
);
