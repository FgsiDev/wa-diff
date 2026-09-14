__d(
  "adsUEditorAdgroupIsFlexibleFormatSelector",
  [
    "adsCreateSelector",
    "adsUEditorAdgroupIsFlexibleFormatSelectorUtils",
    "adsUEditorAdgroupLinkPostFormatSelector",
    "adsUEditorSelectedCampaignGroupPlainObjectsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorAdgroupLinkPostFormatSelector"),
          r("adsUEditorSelectedCampaignGroupPlainObjectsSelector"),
        ],
        function (t, n) {
          return o(
            "adsUEditorAdgroupIsFlexibleFormatSelectorUtils",
          ).adsUEditorAdgroupIsFlexibleFormat(t, n);
        },
        { name: i.id + ".adsUEditorAdgroupIsFlexibleFormatSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
