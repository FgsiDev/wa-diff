__d(
  "adsUeditorAdgroupDestinationUrlSelector",
  [
    "adsCreateSelector",
    "adsCreateStructuredSelector",
    "adsUEditorSelectedAdgroupPlainObjectsSelector",
    "adsUeditorAdgroupDestinationUrlSelectorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("adsUEditorSelectedAdgroupPlainObjectsSelector")],
        function (t) {
          var e;
          return o(
            "adsUeditorAdgroupDestinationUrlSelectorUtils",
          ).adDestinationUrl(
            t == null || (e = t[0]) == null || (e = e.creative) == null
              ? void 0
              : e.object_story_spec,
          );
        },
        { name: i.id + ".adDestinationUrlSelector" },
      ),
      s = r("adsCreateStructuredSelector")(
        { destinationUrl: e },
        i.id + ".adsUeditorAdgroupDestinationUrlSelector",
      );
    ((l.adDestinationUrlSelector = e),
      (l.adsUeditorAdgroupDestinationUrlSelector = s));
  },
  98,
);
