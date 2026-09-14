__d(
  "AdsInteractivePollUtils",
  [
    "fbt",
    "AdsAPIDevicePlatform",
    "AdsPlacementAPISpecReaderUtils",
    "CenteredContainer.react",
    "CometPlaceholder.react",
    "GeoSpinner.react",
    "JSResource",
    "LoadingMarkerArea.react",
    "URI",
    "ads-lib-urllib",
    "immutable",
    "lazyLoadComponent",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = r("lazyLoadComponent")(
        r("JSResource")(
          "AdsInteractivePollPreviewExampleVideoSection.react",
        ).__setRef("AdsInteractivePollUtils"),
      );
    function m(e) {
      return /^\s*$/.test(e);
    }
    function p(t) {
      if (t == null) return null;
      var n = t.get("option_a_text"),
        o = t.get("option_b_text");
      if (n == null || m(String(n)) || o == null || m(String(o)))
        return {
          title: s._(/*BTDS*/ "Apply changes without saving poll?"),
          msg: s._(
            /*BTDS*/ "The poll you're creating is incomplete and will not be saved. Click {The label for the cancel button} to continue editing poll options.",
            [
              s._param(
                "The label for the cancel button",
                c.jsx("strong", { children: "Cancel" }),
              ),
            ],
          ),
        };
      var a = t.get("option_a_call_to_action"),
        i = t.get("option_b_call_to_action");
      if (a == null && i == null) return null;
      var l = r("immutable").fromJS(a).get("value").get("link"),
        u = r("immutable").fromJS(i).get("value").get("link");
      return (a != null &&
        (!r("ads-lib-urllib").isUrl(l) ||
          !(e || (e = r("URI"))).isValidURI(
            r("ads-lib-urllib").normalize(l),
          ))) ||
        (i != null &&
          (!r("ads-lib-urllib").isUrl(u) ||
            !(e || (e = r("URI"))).isValidURI(
              r("ads-lib-urllib").normalize(u),
            )))
        ? {
            title: s._(/*BTDS*/ "Apply changes without saving poll?"),
            msg: s._(
              /*BTDS*/ "The poll you're creating is incomplete and will not be saved. Click {The label for the cancel button} to continue editing website URLs.",
              [
                s._param(
                  "The label for the cancel button",
                  c.jsx("strong", { children: "Cancel" }),
                ),
              ],
            ),
          }
        : null;
    }
    function _(e, t, n, a) {
      return (
        !g(e) ||
          t == null ||
          !o("AdsPlacementAPISpecReaderUtils").isActiveDevicePlatform(
            n,
            r("AdsAPIDevicePlatform").MOBILE,
          ),
        !1
      );
    }
    function f(e) {
      return g(e);
    }
    function g(e) {
      return e != null && e.is_tier_0 !== !0;
    }
    function h(e) {
      return g(e);
    }
    function y(e, t, n) {
      return !1;
    }
    function C(e) {
      var t = 235,
        n = 455;
      return c.jsx(r("CometPlaceholder.react"), {
        fallback: c.jsx("div", {
          children: c.jsx(r("CenteredContainer.react"), {
            children: c.jsx(r("LoadingMarkerArea.react"), {
              name: "AdsInteractivePollPopoverCard",
              owner: "video_ads",
              children: c.jsx(r("GeoSpinner.react"), { loggingName: i.id }),
            }),
          }),
        }),
        name: i.id,
        children: c.jsx(d, { playerHeight: n, playerWidth: t, videoID: e }),
      });
    }
    ((C.displayName = C.name + " [from " + i.id + "]"),
      (l.validatePollSpec = p),
      (l.isPollAvailableForAssetGroupsAndFormat = _),
      (l.passPollGK = f),
      (l.passPollBetaGK = h),
      (l.isInstagramInteractiveStoryAdEnabled = y),
      (l.generateContentForEducationalContainer = C));
  },
  226,
);
