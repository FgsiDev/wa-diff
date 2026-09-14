__d(
  "AdsUEditorAdgroupSetOmnichannelIosDeepLinkReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetOmnichannelIosDeepLinkDataActionFlux",
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
                ).creative.omnichannel_link_spec.app.platform_specs.ios.url.set(
                  t.iosDeepLink,
                ),
              )(e);
            });
          },
          o("AdsUEditorAdgroupSetOmnichannelIosDeepLinkDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
