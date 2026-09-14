__d(
  "AdsUEditorAdgroupSetAppDeepLinkSelectorReducerUtils",
  ["AdsAPIChildAttachmentPaths", "AdsAdgroupRecordAccessors", "AdsMutators"],
  function (t, n, r, o, a, i, l) {
    var e = function (t, n) {
      var e = t;
      if (n != null && n !== "") {
        var a,
          i = (a = e.creative) == null ? void 0 : a.applink_treatment;
        return (
          i ||
            (e = r("AdsAdgroupRecordAccessors").creative.applink_treatment.set(
              "deeplink_with_web_fallback",
              e,
            )),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.template_url_spec.config.app_id.set(n, e)
        );
      } else {
        var l,
          s,
          u =
            (l = e.creative) == null || (l = l.template_url_spec) == null
              ? void 0
              : l.web,
          c = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.template_data.child_attachments.get(t);
        return (
          (c =
            (s = c) == null
              ? void 0
              : s.map(function (e) {
                  var t = e.toJS(),
                    n = e;
                  return (
                    t.static_card === !0 &&
                      (n = n.setIn(
                        r("AdsAPIChildAttachmentPaths").CALL_TO_ACTION.VALUE
                          .APP_LINK,
                        "",
                      )),
                    n
                  );
                })),
          o("AdsMutators").chain(
            r("AdsAdgroupRecordAccessors").creative.template_url_spec.delete,
            r("AdsAdgroupRecordAccessors").creative.template_url_spec.web.set(
              u,
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.template_data.child_attachments.set(c),
          )(e)
        );
      }
    };
    l.setAppDeepLinkSelectorReducerPluginMutator = e;
  },
  98,
);
