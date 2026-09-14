__d(
  "adsMgmtSubsectionForCreativeOverview",
  ["AdsDataAtom", "AdsSelectorUtils", "adsPENavStateSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u() {
      return (
        (s || (s = r("AdsDataAtom"))).waitFor(
          (e || (e = o("AdsSelectorUtils"))).getStoreDispatchTokens([
            r("adsPENavStateSelector"),
          ]),
        ),
        r("adsPENavStateSelector")().section === "CREATIVES"
          ? { at_subsection: "CREATIVES".toLowerCase() }
          : null
      );
    }
    l.default = u;
  },
  98,
);
