__d(
  "adsBrandedContentPostPublishAdgroupErrorsSelector",
  [
    "AdsAdgroupDraftFragmentStore",
    "AdsDynamicAdObjectsSelectors",
    "AdsError",
    "LoadObject",
    "adsCreateMapSelector",
    "adsCreateSelector",
    "adsCreateStoreSelector",
    "adsUEditorAdgroupPublishStatusSelector",
    "adsUEditorSelectedAdgroupIDsSelector",
    "emptyObject",
    "getAdsErrorExtraData",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("adsCreateSelector")(
      [
        o("AdsDynamicAdObjectsSelectors").getAdsDynamicAdgroupSelector(
          "branded_content_post_publish_errors",
        ),
        r("adsCreateStoreSelector")(
          [r("AdsAdgroupDraftFragmentStore")],
          function (t) {
            return r("AdsAdgroupDraftFragmentStore").isNew(t);
          },
          { name: i.id },
        ),
      ],
      function (t, n) {
        var e = n || !t.isDone() ? null : t.getValue();
        if (e == null) return t.setValue(null);
        var a = e.map(function (e) {
          var t,
            n = e.blame_field_spec,
            a = e.error_code,
            i = e.error_message,
            l = e.error_placement,
            s = e.error_severity,
            u =
              (t = o("getAdsErrorExtraData").getAdsErrorExtraData(a)) != null
                ? t
                : r("emptyObject");
          return new (r("AdsError"))(
            a,
            i != null ? i : "?",
            babelHelpers.extends({}, u, {
              errorPlacementType: l,
              path: n || u.path || null,
              isServerError: !0,
              isDeliveryIssue: !0,
              level:
                s === "error"
                  ? r("AdsError").Level.WARN
                  : r("AdsError").Level.NOTIFY,
            }),
          );
        });
        return r("LoadObject").withValue(a, { creatorModuleID: i.id });
      },
      { name: i.id + ".adsBrandedContentPostPublishAdgroupErrorsSelectorImpl" },
    );
    function s(e, t) {
      return e.filter(function (e) {
        var n;
        return !((n = t.get(e)) != null && n.isNew);
      });
    }
    var u = r("adsCreateMapSelector")(
      r("adsCreateSelector")(
        [
          r("adsUEditorSelectedAdgroupIDsSelector"),
          r("adsUEditorAdgroupPublishStatusSelector"),
        ],
        s,
        { name: i.id },
      ),
      e,
      i.id + ".adsBrandedContentPostPublishAdgroupErrorsSelector",
    );
    ((l.adsBrandedContentPostPublishAdgroupErrorsSelectorImpl = e),
      (l.adsBrandedContentPostPublishAdgroupErrorsSelector = u));
  },
  98,
);
