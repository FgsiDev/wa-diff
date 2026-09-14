__d(
  "adsUEditorAdgroupPrefillersExtraDataSelector",
  [
    "AdsAdgroupPrefillers",
    "AdsSelectorUtils",
    "adsCreateSelector",
    "adsCreateStoreSelector",
    "adsUEditorSelectedAdgroupsSelector",
    "filterNulls",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [].concat(
        o("AdsAdgroupPrefillers").orderedPrefillers,
        o("AdsAdgroupPrefillers").unorderedPrefillers,
      ),
      u = (e || (e = o("AdsSelectorUtils"))).getStores(
        r("filterNulls")(
          s.map(function (e) {
            return e.genExtraDataSelector || null;
          }),
        ),
      ),
      c = r("adsCreateStoreSelector")(
        u,
        function () {
          return function (e, t) {
            return (
              e.genExtraDataSelector && e.genExtraDataSelector({ adgroup: t })
            );
          };
        },
        { name: i.id + ".genPrefillerExtraData" },
      ),
      d = r("adsCreateSelector")(
        [r("adsUEditorSelectedAdgroupsSelector"), c],
        function (t, n) {
          return r("immutable").Map(
            t.map(function (e) {
              return [
                e.id,
                r("immutable").Map(
                  s.map(function (t) {
                    return [t.key, n(t, e)];
                  }),
                ),
              ];
            }),
          );
        },
        { name: i.id + ".adsUEditorAdgroupPrefillersExtraDataSelector" },
      ),
      m = d;
    l.default = m;
  },
  98,
);
