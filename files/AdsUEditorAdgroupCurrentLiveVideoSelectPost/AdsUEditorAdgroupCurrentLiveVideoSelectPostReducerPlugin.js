__d(
  "AdsUEditorAdgroupCurrentLiveVideoSelectPostReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsPagePostListStore",
    "AdsPagePostUtils",
    "AdsUEditorAdgroupReducerUtils",
    "LiveVideoPostUtil",
    "adsPagePostGetAllSelector",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")("LiveShoppingFalcoEvent").__setRef(
        "AdsUEditorAdgroupCurrentLiveVideoSelectPostReducerPlugin",
      ),
      s = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            getAllPagePosts: r("adsPagePostGetAllSelector"),
            getPagePostIDs: r("AdsPagePostListStore").getAllSelector,
          },
          function (t, n, a) {
            var i = a.getAllPagePosts,
              l = a.getPagePostIDs,
              s = l(n.pageID);
            if (s.list.length === 0) return t;
            var u = i(s.list),
              c = null,
              d = null;
            for (var m of s.list) {
              var p = u.get(m);
              if (p != null) {
                if (o("AdsPagePostUtils").isFBLiveVideo(p)) {
                  c = m;
                  break;
                }
                d == null &&
                  o("LiveVideoPostUtil").isWasLiveVideo(p) &&
                  (d = m);
              }
            }
            var _ = c != null ? c : d;
            if (_ == null) return t;
            var f = c != null ? "current_live" : "was_live";
            return o("AdsMutators").mutateEach(
              t,
              n.adgroupIDs,
              function (t, o) {
                var a = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.object_story_id.get(t);
                if (a != null && a !== "") return t;
                var i = r("AdsAdgroupRecordAccessors").account_id.get(t),
                  l = r("AdsAdgroupRecordAccessors").campaign_id.get(t);
                return (
                  e.onReady(function (e) {
                    return e.log(function () {
                      return {
                        event: "lva_select_default_live_post",
                        extra_data: {
                          selected_post_id: _,
                          live_status: f,
                          adgroup_id: String(o),
                          ad_account_id: i != null ? i : "",
                          campaign_id: l != null ? l : "",
                          page_id: String(n.pageID),
                        },
                      };
                    });
                  }),
                  r("AdsAdgroupRecordAccessors").creative.object_story_id.set(
                    _,
                    t,
                  )
                );
              },
            );
          },
          "AdsUEditorAdgroupCurrentLiveVideoSelectPostActionPlugin",
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
