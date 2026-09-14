__d(
  "AdsUEditorAdgroupSetStoriesInteractiveComponentCountdownReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetStoriesInteractiveComponentCountdownDataActionFlux",
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
              if (l && l.count() > a) {
                var s,
                  u =
                    (s = l.get(a)) == null
                      ? void 0
                      : s.setIn(["countdown_spec", o], i);
                u !== void 0 && (l = l.set(a, u));
              }
              return r(
                "AdsAdgroupRecordAccessors",
              ).creative.interactive_components_spec.components.set(l, e);
            });
          },
          o(
            "AdsUEditorAdgroupSetStoriesInteractiveComponentCountdownDataActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
