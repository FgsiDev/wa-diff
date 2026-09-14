__d(
  "adsUEditorSelectedAdgroupsIssuesInfoSelector",
  [
    "AdsPEIssuesInfoSelectors",
    "BrandedContentPostPublishPermissionErrorCodes",
    "adsBrandedContentPostPublishAdgroupErrorsSelector",
    "adsCreateSelector",
    "adsUEditorAdgroupPublishStatusSelector",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("adsCreateSelector")(
        [
          o("AdsPEIssuesInfoSelectors")
            .selectedAdgroupIssuesInfoUEditorSelector,
          o("adsBrandedContentPostPublishAdgroupErrorsSelector")
            .adsBrandedContentPostPublishAdgroupErrorsSelector,
          r("adsUEditorAdgroupPublishStatusSelector"),
        ],
        function (t, n, o) {
          var e = new Set(r("BrandedContentPostPublishPermissionErrorCodes")),
            a = t
              .map(function (t, n) {
                var r = t.hasValueWithoutError() ? t.getValueEnforcing() : null,
                  a = o.get(n);
                return (
                  a != null &&
                    a.hasDraft &&
                    r != null &&
                    (r = r.filter(function (t) {
                      return !e.has(t.key.toString());
                    })),
                  r != null && r.length > 0 ? r : null
                );
              })
              .filter(Boolean),
            i = n
              .map(function (t, n) {
                var r = t.hasValueWithoutError() ? t.getValueEnforcing() : null,
                  a = o.get(n);
                return (
                  a != null &&
                    a.hasDraft &&
                    r != null &&
                    (r = r.filter(function (t) {
                      return !e.has(t.key.toString());
                    })),
                  r != null && r.length > 0 ? r : null
                );
              })
              .filter(Boolean);
          return a.concat(i);
        },
        { name: i.id + ".adsUEditorSelectedAdgroupsIssuesInfoSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
