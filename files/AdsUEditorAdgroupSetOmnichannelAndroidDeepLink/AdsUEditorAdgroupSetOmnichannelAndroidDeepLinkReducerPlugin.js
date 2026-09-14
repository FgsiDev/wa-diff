__d(
  "AdsUEditorAdgroupSetOmnichannelAndroidDeepLinkReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetOmnichannelAndroidDeepLinkDataActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return o("AdsMutators").chain(
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.omnichannel_link_spec.app.platform_specs.android.url.set(
                  t.androidDeepLink,
                ),
              )(e);
            });
          },
          o("AdsUEditorAdgroupSetOmnichannelAndroidDeepLinkDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
