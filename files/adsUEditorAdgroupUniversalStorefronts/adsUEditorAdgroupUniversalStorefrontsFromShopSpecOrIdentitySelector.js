__d(
  "adsUEditorAdgroupUniversalStorefrontsFromShopSpecOrIdentitySelector",
  [
    "AdsBulkValueUtils",
    "LoadObject",
    "adsCreateSelector",
    "adsUEditorAdgroupShopSpecSelectedShopSelector",
    "adsUEditorAdgroupUniversalStorefrontsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          o("adsUEditorAdgroupUniversalStorefrontsSelector")
            .adsUEditorAdgroupUniversalStorefrontsSelector,
          o("adsUEditorAdgroupShopSpecSelectedShopSelector")
            .adsUEditorAdgroupShopSpecSelectedShopSelector,
        ],
        function (t, n) {
          return u(t, n);
        },
        {
          name:
            i.id +
            ".adsUEditorAdgroupUniversalStorefrontsFromShopSpecOrIdentitySelector",
        },
      ),
      s = r("adsCreateSelector")(
        [e],
        function (t) {
          return t.mapValue(function (e) {
            return o("AdsBulkValueUtils").getUniformValue(e);
          });
        },
        {
          name:
            i.id +
            ".adsUEditorAdgroupStorefrontsFromShopSpecOrIdentityUniformValueSelector",
        },
      );
    function u(e, t) {
      if (t.isLoading())
        return r("LoadObject").loading({ creatorModuleID: i.id });
      if (!t.hasValueWithoutError())
        return r("LoadObject").empty({ creatorModuleID: i.id });
      var n = t.getValue();
      if (n != null) {
        var a = o("AdsBulkValueUtils").wrapValue({
          facebookStorefront: n.page != null ? n : null,
          instagramStorefront: n.ig_user != null ? n : null,
        });
        return r("LoadObject").withValue(a, { creatorModuleID: i.id });
      }
      return e;
    }
    ((l.adsUEditorAdgroupUniversalStorefrontsFromShopSpecOrIdentitySelector =
      e),
      (l.adsUEditorAdgroupStorefrontsFromShopSpecOrIdentityUniformValueSelector =
        s),
      (l.adsUEditorAdgroupUniversalStorefrontsFromShopSpecOrIdentity = u));
  },
  98,
);
