__d(
  "AdsMgmtTableUIColumnLevelOverrides",
  [
    "fbt",
    "AdsMgmtColumn",
    "AdsObjectTypes",
    "adsMgmtTableSpecializeLevelSpecificPropsForObjectType",
    "createObjectFrom",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = {
        align: "left",
        isMovable: !1,
        isRemovable: !1,
        isResizable: !1,
        hasEmptyFooter: !0,
        showInSelector: !1,
      },
      c = s._(/*BTDS*/ "Off \/ On"),
      d = [
        {
          id: r("AdsMgmtColumn").ROW_SELECTOR,
          align: "center",
          isSortable: !1,
          minWidth: 49,
          fixed: !0,
          objectTypes: [
            (e = r("AdsObjectTypes")).CAMPAIGN_GROUP,
            e.CAMPAIGN,
            e.ADGROUP,
          ],
          width: 49,
        },
        { id: r("AdsMgmtColumn").SUGGESTIONS_TOGGLE, minWidth: 32, width: 32 },
        {
          id: r("AdsMgmtColumn").TOGGLE,
          fixed: !0,
          minWidth: 94,
          label: c,
          isResizable: !0,
          objectTypes: [e.CAMPAIGN_GROUP, e.CAMPAIGN, e.ADGROUP],
          width: 94,
          levelSpecificProps: {
            CAMPAIGN_GROUP: { sortField: "status" },
            CAMPAIGN: { sortField: "status" },
            ADGROUP: { sortField: "status" },
          },
        },
      ],
      m = r("createObjectFrom")(
        d.map(function (e) {
          return e.id;
        }),
        d,
      );
    function p(e) {
      var t = e.id,
        n = e.objectType,
        o = m[t],
        a =
          n != null
            ? r("adsMgmtTableSpecializeLevelSpecificPropsForObjectType")(
                o == null ? void 0 : o.levelSpecificProps,
                n,
              )
            : void 0;
      return babelHelpers.extends({}, u, o, a);
    }
    function _(e) {
      return m[e.id] != null;
    }
    var f = { getProps: p, isApplicable: _ };
    l.default = f;
  },
  226,
);
