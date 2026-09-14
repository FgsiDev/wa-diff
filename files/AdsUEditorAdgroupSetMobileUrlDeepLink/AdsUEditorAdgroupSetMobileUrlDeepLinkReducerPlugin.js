__d(
  "AdsUEditorAdgroupSetMobileUrlDeepLinkReducerPlugin",
  [
    "AdsCreativeFieldsTemplateUrlSpecUtils",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetMobileUrlDeepLinkActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return t.mobileUrlDeepLink === ""
                ? e.deleteIn(
                    o(
                      "AdsCreativeFieldsTemplateUrlSpecUtils",
                    ).getUrlPathForPlatform(t.appPlatform),
                  )
                : e.setIn(
                    o(
                      "AdsCreativeFieldsTemplateUrlSpecUtils",
                    ).getUrlPathForPlatform(t.appPlatform),
                    t.mobileUrlDeepLink,
                  );
            });
          },
          o("AdsUEditorAdgroupSetMobileUrlDeepLinkActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
