__d(
  "AdsUEditorAdgroupSetChildPlaceDataLocationReducerPlugin",
  [
    "AdsAdgroupChildAttachmentsFields",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetChildPlaceDataLocationDataActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "FBLogger",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            plugins: o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
              o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
                .getAdgroupSpecPathPlugin,
            ),
          },
          function (e, t, n) {
            var a = n.plugins,
              i = t.addressString,
              l = t.index,
              s = t.latitude,
              u = t.longitude;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, t) {
                var n = r("nullthrows")(a.get(t)),
                  o = r(
                    "AdsAdgroupChildAttachmentsFields",
                  ).placeDataAddress.get(e, n, l),
                  c = r(
                    "AdsAdgroupChildAttachmentsFields",
                  ).placeDataLatitude.get(e, n, l),
                  d = r(
                    "AdsAdgroupChildAttachmentsFields",
                  ).placeDataLongitude.get(e, n, l);
                return o.supported && c.supported && d.supported
                  ? e.setIn(o.path, i).setIn(c.path, s).setIn(d.path, u)
                  : (r("FBLogger")("ads").mustfix(
                      "Some of the placeData card fields are not supported:addressField: %s, latitudeField: %s, longitudeField: %s",
                      o.supported,
                      c.supported,
                      d.supported,
                    ),
                    e);
              },
            );
          },
          o("AdsUEditorAdgroupSetChildPlaceDataLocationDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
