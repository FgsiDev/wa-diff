__d(
  "WAWebBaseNotification",
  [
    "WAAbortError",
    "WALogger",
    "WAWebBuildConstants",
    "WAWebEnvironment",
    "WAWebNotificationBanner",
    "WAWebNotificationConstants",
    "WAWebNotificationDeliveryWamEvent",
    "WAWebNotificationHelpers",
    "WAWebNotificationMuteReason",
    "WAWebNotificationTone",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebWamEnumNotificationActionType",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = (function () {
        function t() {
          var t = this;
          ((this.creationAt = Date.now()),
            (this.$1 = null),
            (this.$2 = r("WAWebPonyfillsCryptoRandomUUID")()),
            (this.closeBanner = function () {
              t.notificationBanner != null &&
                (o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "WABaseNotification:_closeNotification()",
                    ])),
                ),
                t.notificationBanner.close());
            }));
        }
        var n = t.prototype;
        return (
          (n.shouldPlaySound = function () {
            return r("WAWebEnvironment").isWindows &&
              Number(o("WAWebBuildConstants").WINDOWS_BUILD) >= 257300
              ? !1
              : o("WAWebNotificationHelpers").shouldPlaySoundGranular();
          }),
          (n.shouldMute = function (t) {
            return null;
          }),
          (n.shouldShowBanner = function () {
            return o(
              "WAWebNotificationHelpers",
            ).shouldEnableNotificationGranular();
          }),
          (n.shouldSquelch = function () {
            return null;
          }),
          (n.shouldSuppressBanner = function (t) {
            return (
              t === r("WAWebNotificationMuteReason").GroupFlood ||
              t === r("WAWebNotificationMuteReason").OfflineResumeInProgress
            );
          }),
          (n.buildKey = function () {
            throw r("err")(
              "WABaseNotification: must implement `buildKey` method",
            );
          }),
          (n.getBannerOptions = function () {
            throw r("err")(
              "WABaseNotification: must implement `getBannerOptions` method",
            );
          }),
          (n.getIcon = async function () {
            throw r("err")(
              "WABaseNotification: must implement `getIcon` method",
            );
          }),
          (n.matchesChat = function (t) {
            return !1;
          }),
          (n.beforeBannerShown = function () {
            return Promise.resolve();
          }),
          (n.afterBannerShown = function (t) {}),
          (n.getChatKind = function () {
            throw r("err")(
              "WABaseNotification: must implement `getChatKind` method",
            );
          }),
          (n.getNotificationDeliveryWamEventData = function () {
            return null;
          }),
          (n.performLogging = async function (t) {
            var e = await this.getNotificationDeliveryWamEventData();
            ((this.$1 = e),
              e != null &&
                new (o(
                  "WAWebNotificationDeliveryWamEvent",
                ).NotificationDeliveryWamEvent)({
                  uiNotificationType: e.uiNotificationType,
                  notificationId: this.$2,
                  notificationAction: o("WAWebWamEnumNotificationActionType")
                    .NOTIFICATION_ACTION_TYPE.SHOW,
                  isSilenced: t,
                  triggeredByOfflineMessage: e.triggeredByOfflineMessage,
                }).commit());
          }),
          (n.performClickLogging = async function (t) {
            var e,
              n =
                (e = this.$1) != null
                  ? e
                  : await this.getNotificationDeliveryWamEventData();
            n != null &&
              new (o(
                "WAWebNotificationDeliveryWamEvent",
              ).NotificationDeliveryWamEvent)({
                uiNotificationType: n.uiNotificationType,
                notificationId: this.$2,
                notificationAction: o("WAWebWamEnumNotificationActionType")
                  .NOTIFICATION_ACTION_TYPE.CLICK,
                isSilenced: t,
                triggeredByOfflineMessage: n.triggeredByOfflineMessage,
              }).commit();
          }),
          (n.isReplyable = function () {
            return !1;
          }),
          (n.triggerNotification = async function (t) {
            var e = await this.shouldMute(t);
            (e || (e = await this.shouldSquelch()),
              e &&
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "WABaseNotification:triggerNotification muteReason ",
                      "",
                    ])),
                  e,
                ));
            var n = !1;
            if (e)
              if (this.shouldSuppressBanner(e)) n = !0;
              else
                throw new (o("WAAbortError").AbortError)(
                  "Notification mute/squelched " + e,
                );
            var a;
            return (
              (await this.shouldShowBanner()) &&
                ((r("WAWebEnvironment").isWindows || !n) &&
                  (await this.beforeBannerShown(),
                  (a = await this.showBanner(n)),
                  this.afterBannerShown(a)),
                await this.performLogging(n)),
              !e && (await this.shouldPlaySound()) && this.playSound(),
              a
            );
          }),
          (n.showBanner = async function (t) {
            var e = this;
            (t === void 0 && (t = !1),
              (this.abortController = new AbortController()));
            var n = this.getBannerOptions(),
              a = await this.getIcon();
            if (this.abortController.signal.aborted)
              throw new (o("WAAbortError").AbortError)(
                "Aborted through abortController",
              );
            if (
              !r("WAWebEnvironment").isWindows &&
              window.Notification.permission !==
                o("WAWebNotificationConstants").PERMISSION_ALLOWED
            )
              throw new (o("WAAbortError").AbortError)("Permission Denied");
            var i = new (r("WAWebNotificationBanner"))(
              babelHelpers.extends({}, n, {
                onClick: function () {
                  try {
                    n.onClick == null || n.onClick();
                  } finally {
                    e.performClickLogging(t).catch(function (e) {
                      o("WALogger")
                        .ERROR(
                          u ||
                            (u = babelHelpers.taggedTemplateLiteralLoose([
                              "Notification click logging failed",
                            ])),
                        )
                        .catching(r("getErrorSafe")(e))
                        .sendLogs("notification-click-log-fail");
                    });
                  }
                },
                icon: a,
                key: this.buildKey(),
                isReplyable: this.isReplyable(),
                suppressBanner: t,
              }),
            );
            return ((this.notificationBanner = i), i);
          }),
          (n.playSound = function () {
            o("WAWebNotificationTone").playNotification();
          }),
          t
        );
      })();
    l.WABaseNotification = c;
  },
  98,
);
