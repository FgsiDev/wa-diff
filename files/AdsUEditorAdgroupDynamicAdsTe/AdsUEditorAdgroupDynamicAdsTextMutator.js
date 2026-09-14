__d(
  "AdsUEditorAdgroupDynamicAdsTextMutator",
  ["AdsUEditorAdgroupMultiProductMutators"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r, a) {
      var i = t;
      return (
        r &&
          r !== "" &&
          ((i = o("AdsUEditorAdgroupMultiProductMutators").deleteInChild(
            e,
            ["description"],
            i,
          )),
          (i = o("AdsUEditorAdgroupMultiProductMutators").setInChild(
            e,
            ["description"],
            r,
            i,
          ))),
        n &&
          n !== "" &&
          ((i = o("AdsUEditorAdgroupMultiProductMutators").deleteInChild(
            e,
            ["name"],
            i,
          )),
          (i = o("AdsUEditorAdgroupMultiProductMutators").setInChild(
            e,
            ["name"],
            n,
            i,
          ))),
        a &&
          a !== "" &&
          ((i = o("AdsUEditorAdgroupMultiProductMutators").deleteInChild(
            e,
            ["link"],
            i,
          )),
          (i = o("AdsUEditorAdgroupMultiProductMutators").setInChild(
            e,
            ["link"],
            a,
            i,
          ))),
        i
      );
    }
    l.mutateChildMediaDetails = e;
  },
  98,
);
