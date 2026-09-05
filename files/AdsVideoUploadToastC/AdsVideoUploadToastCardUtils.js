__d(
  "AdsVideoUploadToastCardUtils",
  [
    "fbt",
    "AdsL1UVFVideoUploadToastGK",
    "AdsLoginAs",
    "AdsToggleSource",
    "AdsVideoUploadStatus",
    "AdsVideoUploadToastContentUtils",
    "AdsVideoUploadToastLoggingUtils",
    "ExecutionEnvironment",
    "JSResource",
    "URI",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = {
        toastWithBottomSheet: { bottom: "xtrxkvy", $$css: !0 },
        toastRaised: { bottom: "x11unvnq", $$css: !0 },
      },
      d = 2e4,
      m = "videoUpload";
    function p(e, t, n, r, a, i, l, s, u, c, d, p, _) {
      if ((_ === void 0 && (_ = !0), !a)) return e;
      var f = a.videoUploadingAdgroupIDs;
      o("AdsVideoUploadToastLoggingUtils").logVideoUploadToastImpression(f, t);
      var g = h(
        f,
        t,
        n,
        r,
        i,
        l,
        m,
        _ &&
          o(
            "AdsL1UVFVideoUploadToastGK",
          ).isL1UVFVideoUploadToastUpdateEnabledWithExposure(),
        s,
        u,
        c,
        d,
        p,
      );
      return e.concat([g]);
    }
    function _(e, t, n, r, a, i, l) {
      if (!a) return e;
      var s = a.videoUploadingAdgroupIDs,
        u =
          s &&
          e.find(function (e) {
            return e.id === y(t, s);
          });
      if (!u) return e;
      var c = h(
        s,
        t,
        n,
        r,
        i,
        l,
        m,
        o("AdsL1UVFVideoUploadToastGK").isL1UVFVideoUploadToastUpdateEnabled(),
      );
      return (Object.assign(u, c), [].concat(e));
    }
    function f(e) {
      var t = e.filter(function (e) {
        return !(e.useCase === m && e.cardType === "progress");
      });
      return t.length !== e.length ? t : e;
    }
    function g(e, t) {
      if (t.data.source !== r("AdsToggleSource").toast_card_cta) return e;
      var n = e.filter(function (e) {
        return !(
          e.useCase === m &&
          (e.id === y("error", t.data.ids) || e.id === y("success", t.data.ids))
        );
      });
      return n.length !== e.length ? n : e;
    }
    function h(e, t, n, a, i, l, s, u, d, m, p, _, f) {
      var g,
        h,
        b,
        v,
        S = {
          id: y(t, e),
          "data-testid": _ != null ? _ : "ads-video-toast-card",
          cardType: t,
          canDismiss: (g = p == null ? void 0 : p.canDimiss) != null ? g : !0,
          dismissTimer: a,
          header:
            (h = p == null ? void 0 : p.header) != null
              ? h
              : o("AdsVideoUploadToastContentUtils").getToastCardHeader(
                  t,
                  n,
                  l === r("AdsVideoUploadStatus").ENCODING,
                ),
          bodyText:
            (b = p == null ? void 0 : p.bodyText) != null
              ? b
              : o("AdsVideoUploadToastContentUtils").getToastCardBody(t),
          callsToAction:
            (v = p == null ? void 0 : p.callToAction) != null
              ? v
              : C(t, e, d, m),
          useCase: s,
          progressBar: R(l, i || 0),
          error: f,
          onDismiss:
            t === "success" || t === "error"
              ? function () {
                  o(
                    "AdsVideoUploadToastLoggingUtils",
                  ).logVideoUploadToastDismiss(e, t);
                }
              : void 0,
          xstyle: u ? c.toastRaised : c.toastWithBottomSheet,
        };
      return S;
    }
    function y(e, t) {
      return e.concat(t.toString());
    }
    function C(e, t, n, r) {
      var o = [b(e, t)];
      if (e === "success") return o;
      if (e === "error") {
        var a = v(e, n),
          i = S(e, r);
        return (a && o.push(a), i && o.push(i), o);
      }
      return [];
    }
    function b(e, t) {
      return {
        label: o("AdsVideoUploadToastContentUtils").getCTAButtonLabel(e),
        onClick: function () {
          (o("AdsVideoUploadToastLoggingUtils").logVideoUploadToastClickCTA(
            t,
            e,
          ),
            L(t, e === "error"));
        },
        use: "default",
      };
    }
    function v(t, n) {
      return t !== "error" ||
        n == null ||
        !o("AdsLoginAs").isEmployeeContingentOrUsingLoginAs()
        ? null
        : {
            label: s._(/*BTDS*/ "[FB-Only] Inspect in VUI"),
            onClick: function () {
              if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
                var t = Math.floor(Date.now() / 1e3),
                  o = t - 1440 * 60,
                  a = t + 1440 * 60,
                  i =
                    "https://www.internalfb.com/intern/video_upload_inspector/session/?id=" +
                    n +
                    "&product=fb&start_time_sec=" +
                    o +
                    "&end_time_sec=" +
                    a;
                (u || (u = r("URI"))).goURIOnWindow(
                  i,
                  window.open("", "_blank"),
                  !0,
                );
              }
            },
            use: "default",
          };
    }
    function S(t, n) {
      if (
        t !== "error" ||
        n == null ||
        !o("AdsLoginAs").isEmployeeContingentOrUsingLoginAs()
      )
        return null;
      var a =
        "http://www.internalfb.com/intern/ads_interface/log_viewer/?query_type=requestID&www_request_id=" +
        n;
      return {
        label: s._(/*BTDS*/ "[FB-Only] Inspect in adlog"),
        onClick: function () {
          (e || (e = r("ExecutionEnvironment"))).canUseDOM &&
            (u || (u = r("URI"))).goURIOnWindow(
              a,
              window.open("", "_blank"),
              !0,
            );
        },
        use: "default",
      };
    }
    function R(e, t) {
      switch (e) {
        case r("AdsVideoUploadStatus").UPLOADING:
          return { isBuffering: !1, percentage: t * 100 };
        case r("AdsVideoUploadStatus").ENCODING:
          return { isBuffering: !0, percentage: 100 };
      }
      return null;
    }
    function L(e, t) {
      r("JSResource").loadAll(
        [
          r("JSResource")("AdsMgmtDrawerActions").__setRef(
            "AdsVideoUploadToastCardUtils",
          ),
        ],
        function (n) {
          n.openTarget(
            "EDITOR_DRAWER",
            e,
            "ad",
            r("AdsToggleSource").toast_card_cta,
            t,
          );
        },
      );
    }
    ((l.DISMISS_TIMER = d),
      (l.VIDEO_UPLOAD_USE_CASE = m),
      (l.createToastCard = p),
      (l.updateToastCard = _),
      (l.dismissProgressVideoToastCard = f),
      (l.dismissVideoToastCardByCTA = g));
  },
  226,
);
