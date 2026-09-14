__d(
  "AdsAdgroupDraftFragmentReducer",
  [
    "AdsDraftFragmentStoreStateReducers",
    "AdsUEditorAdgroupReducerPlugins",
    "adsAdgroupDraftFragmentCreateReducer",
    "cr:37583",
    "cr:7051",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, r) {
      return e.reduce(function (e, t) {
        var o = t.reduce.editingReducer(e, r),
          a = t.reduce.name,
          l = t.reduce.getName;
        return (
          typeof l == "function" && (a = l()),
          o !== e &&
            (n("cr:7051") == null ||
              n("cr:7051").logFirstAction(i.id, r.actionType, a)),
          o
        );
      }, t);
    }
    var s = r("adsAdgroupDraftFragmentCreateReducer")(
        function (e, t) {
          return o(
            "AdsDraftFragmentStoreStateReducers",
          ).draftFragmentStateReducer(e, { action: t });
        },
        function (e) {
          return e;
        },
        function (t, o) {
          var a = t;
          return (
            n("cr:37583") != null && (a = e(n("cr:37583"), a, o)),
            (a = e(r("AdsUEditorAdgroupReducerPlugins"), a, o)),
            a
          );
        },
        function (e) {
          return e;
        },
      ),
      u = s;
    l.default = u;
  },
  98,
);
