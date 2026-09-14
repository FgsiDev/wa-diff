__d(
  "AdsUEditorAdgroupCachedPromotedObjectSetInstagramActorIDActionHandler",
  [
    "AdsEditorPostEditMode",
    "AdsUEditorCampaignPromotedObjectSetInstagramActorIdActionFlux",
    "isUPVL2InstagramPickerEnabled",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: o("AdsUEditorCampaignPromotedObjectSetInstagramActorIdActionFlux")
          .actionType,
        mutate: function (t, n) {
          return r("isUPVL2InstagramPickerEnabled")()
            ? n.withMutations(function (e) {
                return t.adgroupIDs.reduce(function (e, t) {
                  return e.get(t) == null
                    ? e
                    : e.updateIn([t, "creatives"], function (e) {
                        var t;
                        return babelHelpers.extends(
                          {},
                          e != null ? e : {},
                          ((t = {}),
                          (t[r("AdsEditorPostEditMode").EXISTING] = null),
                          (t[r("AdsEditorPostEditMode").INLINE] = null),
                          t),
                        );
                      });
                }, e);
              })
            : n;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
