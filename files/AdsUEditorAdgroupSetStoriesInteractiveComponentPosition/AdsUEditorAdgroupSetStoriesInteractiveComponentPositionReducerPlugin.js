__d(
  "AdsUEditorAdgroupSetStoriesInteractiveComponentPositionReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetStoriesInteractiveComponentPositionDataActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n,
                o = t.field,
                a = t.index,
                i = t.value,
                l =
                  (n = e.creative) == null ||
                  (n = n.interactive_components_spec) == null
                    ? void 0
                    : n.components;
              if (l == null) return e;
              if (l.count() > a) {
                var s = l.get(a).setIn(["position_spec", o], i);
                l = l.set(a, s);
              }
              return r(
                "AdsAdgroupRecordAccessors",
              ).creative.interactive_components_spec.components.set(l, e);
            });
          },
          o(
            "AdsUEditorAdgroupSetStoriesInteractiveComponentPositionDataActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
