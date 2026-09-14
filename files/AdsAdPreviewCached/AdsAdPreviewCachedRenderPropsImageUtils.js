__d(
  "AdsAdPreviewCachedRenderPropsImageUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = function (t) {
        var e, n;
        return (e = (n = t.media) == null ? void 0 : n.imageURL) != null
          ? e
          : t.destinationLink;
      },
      l = function (n, r, o) {
        r.cards.map(function (t, r) {
          var a = e(t),
            i = o[r];
          a != null && i != null && n.set(a, i);
        });
      },
      s = function (n, r) {
        var t = e(r);
        return t != null ? n.get(t) : void 0;
      };
    ((i.storeImagesFromRenderProps = l), (i.getCachedImage = s));
  },
  66,
);
