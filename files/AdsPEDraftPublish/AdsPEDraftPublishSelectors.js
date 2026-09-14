__d(
  "AdsPEDraftPublishSelectors",
  [
    "AdsDML",
    "AdsDMLQueryHandler_DerivedDataBase",
    "AdsDraftPublishDataProvider",
    "AdsPEDraftSelectors",
    "AdsPEFragmentSelectors",
    "AdsPEUploadStore",
    "FBLogger",
    "adsCreateSelector",
    "adsPECurrentDraftIDSelector",
    "isValidID",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = r("AdsDraftPublishDataProvider").toFluxSelector(),
      c = o("AdsDMLQueryHandler_DerivedDataBase").modularLoader(function () {
        return u.getStores();
      }, u),
      d = o("AdsDML")
        .Query({ name: i.id })
        .Derived(function () {
          var e = c();
          return { publishData: e };
        });
    function m() {
      var e = o("AdsDML").useSuspensefulDMLFragment(d),
        t = e.publishData;
      return t;
    }
    var p = (s = r("adsCreateSelector"))(
        [u, o("adsPECurrentDraftIDSelector").adsPECurrentDraftIDSelector],
        function (t, n) {
          var e = t.draftID;
          return _(e, n.getValue());
        },
        { name: i.id + ".isOtherDraftPublishingSelector" },
      ),
      _ = function (t, n) {
        return (
          t != null &&
            n == null &&
            r("FBLogger")("ads", "publishing").warn(
              "isOtherDraftPublishingSelector is in an unexpected state. Draft, %s, is currently publishing but there's no active draft",
              t,
            ),
          t != null && t !== n
        );
      };
    function f(e) {
      var t = o("adsPECurrentDraftIDSelector")
          .useGetAdsPECurrentDraftID(e)
          .getValue(),
        n = m(),
        r = n.draftID;
      return _(r, t);
    }
    var g = s(
        [
          (e = o("AdsPEDraftSelectors")).fragments.campaign,
          e.fragments.ad_set,
          e.fragments.ad,
          p,
          u,
        ],
        function (t, n, r, o, a) {
          return h(t, n, r, o, a);
        },
        { name: i.id + ".reviewCount" },
      ),
      h = function (t, n, r, o, a) {
        var e = t.size + n.size + r.size;
        return o
          ? e
          : e -
              a.requestedAdObjectIDs.size -
              a.pendingAdObjectIDs.size -
              a.completedAdObjectIDs.size;
      };
    function y(e) {
      var t = m(),
        n = o("AdsPEFragmentSelectors").useGetFragmentsForAdgroup(e),
        r = o("AdsPEFragmentSelectors").useGetFragmentsForCampaign(e),
        a = o("AdsPEFragmentSelectors").useGetFragmentsForCampaignGroup(e),
        i = f(e);
      return h(a, r, n, i, t);
    }
    var C = s(
        [r("AdsPEUploadStore").getSelection, e.allFragmentsNotPublishing],
        function (t, n) {
          var e = t.flatten();
          return n
            .filter(function (t) {
              return e.has(t.objectID);
            })
            .map(function (e) {
              return e.fragmentID;
            })
            .toSet();
        },
        { name: i.id + ".allSelectedFragmentIDs" },
      ),
      b = s(
        [r("AdsPEUploadStore").getSelection, e.allFragmentsNotPublishing],
        function (t, n) {
          var e = t.flatten();
          return n.filter(function (t) {
            return e.has(t.objectID);
          });
        },
        { name: i.id + ".allSelectedFragments" },
      ),
      v = s(
        [u],
        function (t) {
          return S(t);
        },
        { name: i.id + ".isPublishInitializingSelector" },
      ),
      S = function (t) {
        return t.publishID != null && !r("isValidID")(t.publishID);
      };
    function R() {
      var e = m();
      return S(e);
    }
    ((l.isOtherDraftPublishingSelector = p),
      (l.useGetIsOtherDraftPublishing = f),
      (l.reviewCount = g),
      (l.useGetReviewCount = y),
      (l.allSelectedFragmentIDs = C),
      (l.allSelectedFragments = b),
      (l.isPublishInitializingSelector = v),
      (l.useGetIsPublishInitializing = R));
  },
  98,
);
