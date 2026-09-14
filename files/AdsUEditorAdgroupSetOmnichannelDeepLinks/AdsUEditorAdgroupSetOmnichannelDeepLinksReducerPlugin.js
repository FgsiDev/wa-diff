__d(
  "AdsUEditorAdgroupSetOmnichannelDeepLinksReducerPlugin",
  [
    "AdsAPIChildAttachmentPaths",
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupMultiProductMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetOmnichannelDeepLinksDataActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = e;
              if (
                (t.iosDeepLink != null &&
                  (n = o("AdsMutators").chain(
                    r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.omnichannel_link_spec.app.platform_specs.ios.url.set(
                      t.iosDeepLink,
                    ),
                  )(n)),
                t.androidDeepLink != null &&
                  (n = o("AdsMutators").chain(
                    r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.omnichannel_link_spec.app.platform_specs.android.url.set(
                      t.androidDeepLink,
                    ),
                  )(n)),
                t.hasChildAttachments)
              ) {
                var a = t.androidDeepLink,
                  i = t.iosDeepLink;
                (i != null &&
                  (n = o(
                    "AdsUEditorAdgroupMultiProductMutators",
                  ).setInEachChild(
                    r("AdsAPIChildAttachmentPaths").CALL_TO_ACTION.VALUE
                      .IOS_URL,
                    i,
                    n,
                  )),
                  a != null &&
                    (n = o(
                      "AdsUEditorAdgroupMultiProductMutators",
                    ).setInEachChild(
                      r("AdsAPIChildAttachmentPaths").CALL_TO_ACTION.VALUE
                        .ANDROID_URL,
                      a,
                      n,
                    )));
              }
              return n;
            });
          },
          o("AdsUEditorAdgroupSetOmnichannelDeepLinksDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
