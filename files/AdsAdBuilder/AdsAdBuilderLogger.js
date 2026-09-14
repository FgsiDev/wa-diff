__d(
  "AdsAdBuilderLogger",
  [
    "AdsAccountStore",
    "AdsAdBuilderFalcoEvent",
    "AdsAdvancedPreviewLoggingUtils",
    "AdsDraftSelectionStore",
    "AdsInterfacesLogger",
    "AdsUnifiedLoggingConfig",
    "FBLogger",
    "URI",
    "URIInitDataUtil",
    "WebApiApplication",
    "adsCastToAdsApplicationID",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "side_by_side_preview",
      u = function (t) {
        t == null &&
          r("FBLogger")("ads").mustfix(
            "Calling AdsAdBuilderLogger with empty event source",
          );
      },
      c = function () {
        var t,
          n = new (e || (e = r("URI")))(window.location.href).getQueryData(),
          a = r("AdsAccountStore").getSelectedAccountID() || n.act;
        return (
          (t = {}),
          (t.ad_account_id_explicit = a),
          (t.business_id_explicit = o("URIInitDataUtil").getBusinessID()),
          (t.session_id = r("AdsUnifiedLoggingConfig").sessionId),
          (t.draft_id =
            a != null
              ? r("AdsDraftSelectionStore")
                  .getCached(
                    String(a),
                    r("adsCastToAdsApplicationID")(
                      o("WebApiApplication").getClientID(),
                    ),
                  )
                  .getValue()
              : null),
          t
        );
      };
    function d(e, t) {
      var n;
      return ((n = {}), (n.adgroup_id = e), (n.event_source = t), n);
    }
    function m() {
      var e = new (r("AdsInterfacesLogger"))({
        log: function (t) {
          var e = t.data,
            n = t.eventName;
          r("AdsAdBuilderFalcoEvent").log(function () {
            var t;
            return babelHelpers.extends(
              ((t = {}), (t.event_name = n), t),
              c(),
              e,
            );
          });
        },
      });
      e.register(r("AdsInterfacesLogger").LOG_TYPE_PRIMARY_APP);
    }
    function p(e, t) {
      var n = babelHelpers.extends({}, t);
      r("AdsInterfacesLogger").log({ eventName: e, data: n });
    }
    function _(e, t) {
      r("AdsAdBuilderFalcoEvent").log(function () {
        var n;
        return babelHelpers.extends(((n = {}), (n.event_name = e), n), c(), t);
      });
    }
    function f(e, t, n, a, i, l, c) {
      var m;
      u(n);
      var p = "sbs_placement_preview_seen";
      r("AdsInterfacesLogger").log({
        eventName: p,
        eventCategory: "performance",
        data: babelHelpers.extends(
          {},
          o("AdsAdvancedPreviewLoggingUtils").getVariationLoggingData(l),
          d(e, n),
          ((m = {}),
          (m.creative_event_source = s),
          (m.sbs_preview_params = t),
          (m.meta_message = a),
          (m.error_code = i),
          (m.is_new_fragment = c),
          m),
        ),
      });
    }
    function g(e, t, n) {
      var o;
      (u(n),
        r("AdsInterfacesLogger").log({
          eventName: "sbs_expanded_view_visible_loading_start",
          eventCategory: "performance",
          data: babelHelpers.extends(
            {},
            d(e, n),
            ((o = {}), (o.creative_event_source = s), (o.meta_message = t), o),
          ),
        }));
    }
    function h(e, t, n) {
      u(t);
    }
    function y(e) {}
    ((l.init = m),
      (l.log = p),
      (l.logToAdBuilder = _),
      (l.logPreviewSeen = f),
      (l.logVisiblePreviewsStartLoading = g),
      (l.logExpandPreview = h),
      (l.logExpandPreviewSiblingPreviewsClick = y));
  },
  98,
);
