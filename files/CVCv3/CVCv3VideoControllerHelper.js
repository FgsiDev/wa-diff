__d(
  "CVCv3VideoControllerHelper",
  [
    "AsyncRequest",
    "CVCv3DisabledPlayerOrigins",
    "CVCv3DisabledPlayerSubOrigins",
    "CVCv3SubscriptionHelper",
    "DateConsts",
    "Run",
    "SubscriptionsHandler",
    "XVideoUnifiedCVCController",
    "clearTimeout",
    "gkx",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 10,
      s = Object.values(r("CVCv3DisabledPlayerOrigins")),
      u = Object.values(r("CVCv3DisabledPlayerSubOrigins")),
      c = (function () {
        function t(e) {
          var t = this;
          ((this.$13 = !1),
            (this.$3 = new (r("CVCv3SubscriptionHelper"))(
              e.getVideoID(),
              e.getPlayerOrigin(),
              e.getPlayerSuborigin(),
            )),
            (this.$2 = e),
            (this.$4 = null),
            (this.$5 = !1),
            (this.$7 = null),
            (this.$1 = null),
            (this.$11 = !this.$3.isValidSubscription()),
            (this.$6 = new (r("SubscriptionsHandler"))()),
            this.$6.addSubscriptions(
              e.addListener("beginPlayback", function () {
                return t.$14();
              }),
              e.addListener("pausePlayback", function () {
                return t.$15();
              }),
              e.addListener("finishPlayback", function () {
                return t.$16();
              }),
              e.addListener("updateStatus", function (e) {
                return t.$17(e);
              }),
            ),
            e.registerOption("UnifiedCVC", "cvcData", function () {
              return t.$12;
            }),
            this.$6.addSubscriptions(
              o("Run").onLeave(function () {
                return t.leave();
              }),
            ));
        }
        var n = t.prototype;
        return (
          (n.leave = function () {
            (this.$6.release(),
              this.$2.hasOption("UnifiedCVC", "cvcData") &&
                this.$2.unregisterOption("UnifiedCVC", "cvcData"));
          }),
          (n.disable = function () {
            this.$13 = !0;
          }),
          (n.$14 = function () {
            this.$2.isState("playing") && ((this.$4 = null), (this.$5 = !1));
          }),
          (n.$15 = function () {
            ((this.$4 = null), (this.$5 = !1));
          }),
          (n.$16 = function () {
            ((this.$4 = null), (this.$5 = !1));
          }),
          (n.$17 = function (t) {
            this.$2.isState("playing") &&
              (this.$4 == null && (this.$4 = t.position),
              !this.$5 &&
                this.$4 + 3 < t.position &&
                (this.$2.logEvent("played_for_three_seconds"), (this.$5 = !0)));
          }),
          (n.setLinearChannelID = function (t) {
            this.$7 = t;
          }),
          (n.startUnifiedCVC = function () {
            if (!(this.$13 || this.$18() || this.$19())) {
              var e = !1;
              (e || (e = this.$2.isLiveVideo() ? !0 : !r("gkx")("26215")),
                e && this.$20(0));
            }
          }),
          (n.stopUnifiedCVC = function () {
            this.$21();
          }),
          (n.$18 = function () {
            return s.includes(this.$2.getPlayerOrigin());
          }),
          (n.$19 = function () {
            return u.includes(this.$2.getPlayerSuborigin());
          }),
          (n.$21 = function () {
            (r("clearTimeout")(this.$9),
              r("clearTimeout")(this.$8),
              (this.$9 = null),
              (this.$8 = null),
              this.$3.clearAnyPreviousContext(),
              this.$10 != null && (this.$10.abandon(), (this.$10 = null)));
          }),
          (n.$22 = function () {
            (r("clearTimeout")(this.$8), (this.$8 = null));
          }),
          (n.$23 = function () {
            ((this.$10 = null), this.$22(), this.$20(0));
          }),
          (n.$20 = function (n) {
            var t = this;
            this.$9 != null ||
              this.$10 != null ||
              this.$11 ||
              (this.$9 = r("setTimeout")(function () {
                t.$9 = null;
                var n = t.$24(),
                  a = Date.now(),
                  i = !1;
                (n.setHandler(function (e) {
                  t.$25(e, a);
                }),
                  n.setErrorHandler(function (e) {
                    var n;
                    ((i = !0),
                      t.$3.logHttpRequestFailure(
                        ((n = e.errorSummary) != null ? n : "").toString(),
                        Date.now() - a,
                      ));
                  }),
                  (t.$10 = n),
                  n.send(),
                  (t.$8 = r("setTimeout")(
                    function () {
                      (i || t.$3.logHttpRequestTimeout(Date.now() - a),
                        t.$23());
                    },
                    e * o("DateConsts").MS_PER_SEC,
                  )));
              }, n));
          }),
          (n.$25 = function (n, r) {
            if (n.getRequest() === this.$10) {
              var t = Date.now() - r;
              this.$10 = null;
              var a = this.$3.processUnifiedResponse(n.payload);
              if (
                a != null &&
                (this.$22(),
                (this.$12 = a.d),
                a.d != null
                  ? (this.$2.emit("unifiedCVC/update", a.d),
                    this.$3.logHttpRequestSuccess(t))
                  : this.$3.logHttpResponseBad("no data field", t),
                a.a != null)
              ) {
                var i = a.a.t;
                switch (i) {
                  case "p":
                    var l = a.a.pi;
                    (l == null && (l = e),
                      this.$20(l * o("DateConsts").MS_PER_SEC));
                    break;
                  case "s":
                    this.$11 = !0;
                    break;
                }
              }
            }
          }),
          (n.$24 = function () {
            var e = {};
            (this.$7 != null && (e.lc = this.$7),
              this.$2.isLiveVideo() && ((e.ls = !0), (e.pc = !0)));
            var t = 0,
              n = 0;
            this.$4 != null &&
              ((t = this.$4), (n = this.$2.getCurrentTimePosition()));
            var o = this.$3.makeUnifiedVideoCVCUpdate(
                t,
                n,
                this.$2.getVideoState(),
                this.$2.isMuted(),
                e,
              ),
              a = { d: JSON.stringify(o) };
            return (
              this.$1 != null && (a.access_token = this.$1),
              new (r("AsyncRequest"))()
                .setMethod("POST")
                .setURI(
                  r("XVideoUnifiedCVCController").getURIBuilder().getURI(),
                )
                .setData(a)
            );
          }),
          (n.setAccessToken = function (t) {
            this.$1 = t;
          }),
          t
        );
      })();
    l.default = c;
  },
  98,
);
