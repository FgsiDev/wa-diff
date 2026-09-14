__d(
  "AdsPEDraftSelectors",
  [
    "AdsNewIDs",
    "AdsObjectLevelToStore",
    "AdsPEFragmentSelectors",
    "AdsPEUploadStore",
    "adsCreateSelector",
    "adsCreateSelectorsByLevel",
    "adsCreateStoreSelector",
    "adsNotImplementedSelector",
    "adsPELockedAndPublishingSelectors",
    "filterNulls",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = (s = r("adsCreateSelectorsByLevel"))(function (e) {
        return r("adsCreateSelector")(
          [
            o("AdsPEFragmentSelectors").toolFragmentsByLevel[e],
            o("adsPELockedAndPublishingSelectors").adsPEPublishingIDsSelector,
          ],
          function (t, n) {
            return t.filter(function (e, t) {
              return (
                !n.contains(t) &&
                (!e.value ||
                  !o("AdsNewIDs").isNewNegativeID(e.value.fragmentID))
              );
            });
          },
          { name: i.id },
        );
      }),
      d =
        ((e = {}),
        (e.campaign = function () {
          return c.campaign.rawSelectFn(
            o("AdsPEFragmentSelectors").toolFragmentsByLevel.campaign(),
            o("adsPELockedAndPublishingSelectors").adsPEPublishingIDsSelector(),
          );
        }),
        (e.ad_set = function () {
          return c.ad_set.rawSelectFn(
            o("AdsPEFragmentSelectors").toolFragmentsByLevel.ad_set(),
            o("adsPELockedAndPublishingSelectors").adsPEPublishingIDsSelector(),
          );
        }),
        (e.ad = function () {
          return c.ad.rawSelectFn(
            o("AdsPEFragmentSelectors").toolFragmentsByLevel.ad(),
            o("adsPELockedAndPublishingSelectors").adsPEPublishingIDsSelector(),
          );
        }),
        (e.opportunities = (u = r("adsNotImplementedSelector")).rawSelectFn),
        (e.privacy_info_center = u.rawSelectFn),
        (e.topline = u.rawSelectFn),
        (e.ad_account = u.rawSelectFn),
        (e.unique_adcreative = u.rawSelectFn),
        (e.product = u.rawSelectFn),
        e),
      m = r("adsCreateSelector")(
        [c.campaign, c.ad_set, c.ad],
        function (t, n, r) {
          return t
            .concat(n)
            .concat(r)
            .filter(function (e) {
              return e.hasValue();
            })
            .map(function (e) {
              return e.getValueEnforcing();
            })
            .toList();
        },
        { name: i.id + ".allFragmentsNotPublishing" },
      ),
      p = s(function (e) {
        return r("adsCreateSelector")(
          [c[e]],
          function (t) {
            return t.keySeq().toArray();
          },
          { name: i.id },
        );
      }),
      _ = s(function (e) {
        var t = r("AdsObjectLevelToStore").get(e),
          n = p[e];
        return t == null
          ? r("adsNotImplementedSelector")
          : r("adsCreateStoreSelector")(
              [t].concat(n.getStores()),
              function () {
                return t.getAllObjects(n());
              },
              { name: i.id },
            );
      }),
      f = s(function (e) {
        return r("adsCreateSelector")(
          [_[e]],
          function (t) {
            var e = t.toArray().map(function (e) {
              return e.getValue();
            });
            return r("filterNulls")(
              e.map(function (e) {
                return e == null ? void 0 : e.campaign_id;
              }),
            );
          },
          { name: i.id },
        );
      }),
      g = s(function (e) {
        var t = p[e];
        return r("adsCreateStoreSelector")(
          [r("AdsPEUploadStore")].concat(t.getStores()),
          function () {
            return r("AdsPEUploadStore").getCachedNames(e, t());
          },
          { name: i.id },
        );
      });
    ((l.fragments = o("AdsPEFragmentSelectors").toolFragmentsByLevel),
      (l.fragmentsNotPublishing = c),
      (l.fragmentsNotPublishing_UNSAFE_NOT_REALLY_A_SELECTOR = d),
      (l.allFragmentsNotPublishing = m),
      (l.fragmentObjectIDsNotPublishing = p),
      (l.adObjectsInDraftNotPublishing = _),
      (l.parentCampaignGroupIDs = f),
      (l.cachedNames = g));
  },
  98,
);
