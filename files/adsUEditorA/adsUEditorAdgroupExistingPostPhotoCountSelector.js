__d(
  "adsUEditorAdgroupExistingPostPhotoCountSelector",
  [
    "AdsExistingPostPhotoCountUtils",
    "AdsInstagramMediaV2DataProvider",
    "AdsLoadStateUtils_LEGACY",
    "adsCreateSelector",
    "adsInstagramPostConvertV2MediaToFBPagePost",
    "adsPagePostGetSelector",
    "adsUEditorSelectedAdgroupPlainObjectsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorSelectedAdgroupPlainObjectsSelector"),
          r("adsPagePostGetSelector"),
          r("AdsInstagramMediaV2DataProvider").toFluxSelector(),
        ],
        function (t, n, a) {
          var e,
            i =
              (t == null ? void 0 : t.length) === 1
                ? (e = t[0]) == null
                  ? void 0
                  : e.creative
                : null,
            l = i == null ? void 0 : i.object_story_id,
            s = i == null ? void 0 : i.source_instagram_media_id;
          if (s != null) {
            var u = a.get(s);
            if (u == null || !u.hasValueWithoutError()) return null;
            var c = r("adsInstagramPostConvertV2MediaToFBPagePost")(
              u.getValueEnforcing(),
            );
            return o("AdsExistingPostPhotoCountUtils").countExistingPostPhotos(
              null,
              c == null ? void 0 : c.children_media,
            );
          }
          if (l != null) {
            var d,
              m = n(l);
            return o("AdsLoadStateUtils_LEGACY").isLoaded(m)
              ? o("AdsExistingPostPhotoCountUtils").countExistingPostPhotos(
                  (d = m.attachments) == null ? void 0 : d.data,
                  null,
                )
              : null;
          }
          return 0;
        },
        { name: i.id + ".adsUEditorAdgroupExistingPostPhotoCountSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
