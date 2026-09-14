__d(
  "adsDuplicateDialogUtils",
  ["AdsLoadStateUtils_LEGACY", "LoadObject", "adsStoreFlattenLists", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "adgroup",
      s = "campaign",
      u = "campaignGroup";
    function c(e, t, n, r, a) {
      return (
        !e ||
        !n ||
        n.some(function (e) {
          return e.hasError();
        }) ||
        !r ||
        r.some(function (e) {
          return e.hasError();
        }) ||
        (t && o("AdsLoadStateUtils_LEGACY").anyError(t)) ||
        !a ||
        a.hasError()
      );
    }
    function d(e, t, n, r, a, i, l) {
      return !(
        e.isDone() &&
        t.isDone() &&
        n.every(function (e) {
          return e.hasValue();
        }) &&
        r.every(function (e) {
          return e.hasValue();
        }) &&
        a.every(function (e) {
          return e.hasValue();
        }) &&
        (!i || o("AdsLoadStateUtils_LEGACY").allLoaded(i)) &&
        l.hasValue()
      );
    }
    function m(e) {
      return e.every(function (e) {
        return e.hasValue();
      })
        ? Array.from(
            e
              .map(function (e) {
                return e.getValueEnforcing();
              })
              .values(),
          )
        : null;
    }
    function p(e) {
      return Array.from(e(u));
    }
    function _(e, t, n, a) {
      var l = t === "campaign" ? [] : Array.from(a(s));
      if (!l.length && e != null) {
        var u = n(e.account_id, p(a)),
          c = !1;
        if (
          (o("AdsLoadStateUtils_LEGACY").anyError(u) &&
          r("qex")._("1445") === !0
            ? (c = !o("AdsLoadStateUtils_LEGACY").anyLoading(u))
            : (c = Array.from(u.values()).every(function (e) {
                return o("AdsLoadStateUtils_LEGACY").isLoaded(e);
              })),
          c)
        )
          l = r("adsStoreFlattenLists")(u);
        else return r("LoadObject").loading({ creatorModuleID: i.id });
      }
      return r("LoadObject").withValue(l, { creatorModuleID: i.id });
    }
    function f(t, n, a, l, s) {
      var u = n === "ad" ? Array.from(s(e)) : [];
      if (!u.length && t != null) {
        var c = a([t.account_id, _(t, n, l, s).getValue() || []]),
          d = !1;
        if (
          (o("AdsLoadStateUtils_LEGACY").anyError(c) &&
          r("qex")._("1445") === !0
            ? (d = !o("AdsLoadStateUtils_LEGACY").anyLoading(c))
            : (d = Array.from(c.values()).every(function (e) {
                return o("AdsLoadStateUtils_LEGACY").isLoaded(e);
              })),
          d)
        )
          u = r("adsStoreFlattenLists")(c);
        else return r("LoadObject").loading({ creatorModuleID: i.id });
      }
      return r("LoadObject").withValue(u, { creatorModuleID: i.id });
    }
    ((l.getIsDefaultOptInStateError = c),
      (l.getIsDefaultOptInStateLoading = d),
      (l.getSelectedAdObjectsArrayFromMap = m),
      (l.getSelectedCampaignGroupIDs = p),
      (l.getSelectedCampaignIDs = _),
      (l.getSelectedAdgroupIDs = f));
  },
  98,
);
