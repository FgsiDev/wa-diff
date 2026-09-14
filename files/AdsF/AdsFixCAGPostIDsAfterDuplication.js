__d(
  "AdsFixCAGPostIDsAfterDuplication",
  [
    "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
    "AdsAdgroupRecordAccessors",
    "AdsCAGAssetUtils",
    "AdsDataAtom",
    "AdsPagePostSearchByIDDataManager",
    "AdsPagePostUtils",
    "AdsUEditorHostIDs",
    "Promise",
    "asyncToGeneratorRuntime",
    "cr:38188",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e, t) {
      if (t.hostID !== r("AdsUEditorHostIDs").EDITING) return e;
      var n = t.adgroupIDs
        .map(function (t) {
          var n,
            a,
            i = (n = e.get(t)) == null ? void 0 : n.getValue();
          if (
            i == null ||
            !o("AdsAdgroupCreativeAssetGroupsSpecOriginMutators").hasAnyOrigins(
              i,
              ["multi_post_to_single_post_pre_test"],
            )
          )
            return null;
          var l = r("AdsAdgroupRecordAccessors").creative.object_story_id.get(
              i,
            ),
            s =
              (a = r("AdsAdgroupRecordAccessors").creative.object_id.get(i)) !=
              null
                ? a
                : l != null
                  ? o("AdsPagePostUtils").getPageIdFromPagePostId_BROKEN(l)
                  : null,
            u = o("AdsCAGAssetUtils").getAllPostSpecs(i);
          return s == null || u.length === 0
            ? null
            : { adgroupID: t, pageID: s, postSpecs: u };
        })
        .filter(Boolean);
      return (
        n.length > 0 &&
          (s || (s = r("AdsDataAtom"))).addPostDispatchCallback(function () {
            for (var e of n) {
              var o,
                a = e.adgroupID,
                i = e.pageID,
                l = e.postSpecs;
              c(
                [a],
                (o = t.hostID) != null ? o : r("AdsUEditorHostIDs").EDITING,
                i,
                l,
              );
            }
          }),
        e
      );
    }
    function c(e, t, n, r) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, l, s) {
            var u = s.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      if (e.source_instagram_media_id != null)
                        return {
                          isInstagramPost: !0,
                          postId: e.source_instagram_media_id,
                        };
                      var t = e.post_id;
                      if (t == null) return null;
                      var n = o("AdsPagePostUtils").isPagePostId_BROKEN(t)
                          ? t
                          : o("AdsPagePostUtils").generatePagePostId_BROKEN(
                              l,
                              t,
                            ),
                        a = yield r("AdsPagePostSearchByIDDataManager").search(
                          n,
                          null,
                        );
                      if (a != null && !Array.isArray(a)) {
                        var i = a.promotable_id;
                        if (i != null)
                          return { isInstagramPost: !1, postId: i };
                      }
                      return { isInstagramPost: !1, postId: t };
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
              c = yield (e || (e = n("Promise"))).all(u),
              d = c.filter(Boolean);
            n("cr:38188").dispatch(
              {
                adgroupIDs: [].concat(t),
                fbPageID: l,
                hostID: a,
                orderedPostIDs: d,
                forceRegenerateGroupUUID: !0,
              },
              {
                line: "152",
                module: "AdsFixCAGPostIDsAfterDuplication.js",
                moduleID: i.id,
              },
            );
          },
        )),
        d.apply(this, arguments)
      );
    }
    l.default = u;
  },
  98,
);
