__d(
  "AdsUEditorAdgroupSetFacebookPageExtensionTypeReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupFacebookPageExtensionTypesMutator",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetFacebookPageExtensionTypeDataActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              switch (t.profileExtensionType) {
                case "messenger":
                  return o(
                    "AdsUEditorAdgroupFacebookPageExtensionTypesMutator",
                  ).setMessengerFacebookPageExtensionType(e);
                case "none":
                  return o(
                    "AdsUEditorAdgroupFacebookPageExtensionTypesMutator",
                  ).cleanFacebookPageExtensionFields(e);
                default:
                  return e;
              }
            });
          },
          r("AdsUEditorAdgroupSetFacebookPageExtensionTypeDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
