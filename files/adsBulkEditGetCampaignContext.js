__d(
  "adsBulkEditGetCampaignContext",
  [
    "AdsBulkEditCampaignContext",
    "AdsBulkEditCampaignEditorContext",
    "AdsUEditorContextFactory",
    "adsMemoizeWithArgs",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        return t.toSorted().join(",");
      },
      s = r("adsMemoizeWithArgs")(
        function (e) {
          return e.length === 0
            ? r("AdsBulkEditCampaignEditorContext")
            : o("AdsUEditorContextFactory").getForIDs(
                r("AdsBulkEditCampaignContext"),
                e,
                i.id,
              );
        },
        e,
        i.id,
      ),
      u = s;
    l.default = u;
  },
  98,
);
