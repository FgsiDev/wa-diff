__d(
  "adsUeditorMessagesAIGenIcebreakersParamSelectors",
  [
    "AdsAdgroupRecordAccessors",
    "AdsBulkValueUtils",
    "AdsExistingPostCTAUtils",
    "AdsUEditorSelectors",
    "adsCreateSelector",
    "adsGetUniformValueSelector",
    "adsUEditorAdgroupBulkMessageFieldSelector",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = (s = r("adsCreateSelector"))(
        [
          (u = r("adsGetUniformValueSelector"))(
            (e = o("AdsUEditorSelectors")).adgroup.bulkByAccessor(
              r("AdsAdgroupRecordAccessors").creative.object_story_id.get,
            ),
            null,
          ),
          u(
            e.adgroup.bulkByAccessor(
              r("AdsAdgroupRecordAccessors").creative.source_instagram_media_id
                .get,
            ),
            null,
          ),
        ],
        function (t, n) {
          return d(t, n);
        },
        { name: i.id + ".adsUEditorAdgroupPostIDSelector" },
      );
    function d(e, t) {
      var n = r("isTruthy")(e)
        ? o("AdsExistingPostCTAUtils").maybeGetPostIDFromObjectStoryID(e)
        : null;
      return n != null ? n : t;
    }
    var m = s(
      [
        u(
          e.adgroup.bulkByAccessor(
            r("AdsAdgroupRecordAccessors").creative.body.get,
          ),
          null,
        ),
        o("adsUEditorAdgroupBulkMessageFieldSelector").bulkMessageSelector,
        u(
          e.adgroup.bulkByAccessorToJS(function (e) {
            var t;
            return (t = e.creative) == null || (t = t.asset_feed_spec) == null
              ? void 0
              : t.bodies;
          }),
          null,
        ),
      ],
      function (t, n, r) {
        return p(t, n, r);
      },
      { name: i.id + ".adsUEditorAdgroupBodyTextSelector" },
    );
    function p(e, t, n) {
      var a, i;
      n === void 0 && (n = null);
      var l = o("AdsBulkValueUtils").getUniformValueOrDefault(t, null),
        s =
          (a =
            l != null
              ? l
              : (i = n) == null || (i = i[0]) == null
                ? void 0
                : i.text) != null
            ? a
            : null;
      if ((s === null || s === "") && r("isTruthy")(n)) {
        var u, c;
        s =
          n.length > 1 && (u = (c = n[1]) == null ? void 0 : c.text) != null
            ? u
            : null;
      }
      return e != null ? e : s;
    }
    var _ = e.adgroup.bulkByAccessorToJS(function (e) {
        var t;
        return (t = e.creative) == null ||
          (t = t.object_story_spec) == null ||
          (t = t.link_data) == null
          ? void 0
          : t.image_hash;
      }),
      f = e.adgroup.bulkByAccessorToJS(function (e) {
        var t;
        return (t = e.creative) == null ||
          (t = t.asset_feed_spec) == null ||
          (t = t.images) == null ||
          (t = t.at(0)) == null
          ? void 0
          : t.hash;
      }),
      g = e.adgroup.bulkByAccessorToJS(function (e) {
        var t;
        return (t = e.creative) == null ||
          (t = t.object_story_spec) == null ||
          (t = t.link_data) == null ||
          (t = t.child_attachments) == null ||
          (t = t.at(0)) == null
          ? void 0
          : t.image_hash;
      }),
      h = s(
        [_, f, g],
        function (t, n, r) {
          var e,
            a = o("AdsBulkValueUtils").getUniformValue(t, null),
            i = o("AdsBulkValueUtils").getUniformValue(n, null),
            l = o("AdsBulkValueUtils").getUniformValue(r, null);
          return (e = l != null ? l : a) != null ? e : i;
        },
        { name: i.id + ".adsUEditorAdgroupImageHashSelector" },
      ),
      y = e.adgroup.bulkByAccessorToJS(function (e) {
        var t;
        return (t = e.creative) == null ||
          (t = t.object_story_spec) == null ||
          (t = t.video_data) == null
          ? void 0
          : t.video_id;
      }),
      C = e.adgroup.bulkByAccessorToJS(function (e) {
        var t;
        return (t = e.creative) == null ||
          (t = t.asset_feed_spec) == null ||
          (t = t.videos) == null ||
          (t = t.at(0)) == null
          ? void 0
          : t.video_id;
      }),
      b = e.adgroup.bulkByAccessorToJS(function (e) {
        var t;
        return (t = e.creative) == null ||
          (t = t.object_story_spec) == null ||
          (t = t.link_data) == null ||
          (t = t.child_attachments) == null ||
          (t = t.at(0)) == null
          ? void 0
          : t.video_id;
      }),
      v = s(
        [y, C, b],
        function (t, n, r) {
          var e,
            a,
            i = o("AdsBulkValueUtils").getUniformValue(t, null),
            l = o("AdsBulkValueUtils").getUniformValue(n, null),
            s = o("AdsBulkValueUtils").getUniformValue(r, null);
          return Number(
            (e = (a = s != null ? s : i) != null ? a : l) != null ? e : 0,
          );
        },
        { name: i.id + ".adsUEditorAdgroupVideoIDSelector" },
      );
    ((l.adsUEditorAdgroupPostIDSelector = c),
      (l.adsUEditorAdgroupPostID = d),
      (l.adsUEditorAdgroupBodyTextSelector = m),
      (l.adsUEditorAdgroupBodyText = p),
      (l.adsUEditorAdgroupImageHashSelector = h),
      (l.adsUEditorAdgroupVideoIDSelector = v));
  },
  98,
);
