__d(
  "AdsUEditorAdgroupSetChildCallToActionLinkReducerPlugin",
  [
    "AdsAdgroupChildAttachmentsFields",
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupChildAttachmentsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetChildCallToActionLinkDataActionFlux",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
          },
          function (e, t, n) {
            var a = n.parentData;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var i = r("nullthrows")(a.get(n)),
                  l = i.specPlugin,
                  s = [
                    o(
                      "AdsUEditorAdgroupChildAttachmentsMutators",
                    ).childIterationConditions.isCardIndex(t.childIndex),
                  ],
                  u = function () {
                    for (
                      var e = arguments.length, t = new Array(e), n = 0;
                      n < e;
                      n++
                    )
                      t[n] = arguments[n];
                    return s.some(function (e) {
                      return e.apply(void 0, t);
                    });
                  };
                return o(
                  "AdsUEditorAdgroupChildAttachmentsMutators",
                ).setEachChildField(
                  e,
                  l,
                  r("AdsAdgroupChildAttachmentsFields").callToActionLink,
                  t.link,
                  u,
                );
              },
            );
          },
          o("AdsUEditorAdgroupSetChildCallToActionLinkDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
