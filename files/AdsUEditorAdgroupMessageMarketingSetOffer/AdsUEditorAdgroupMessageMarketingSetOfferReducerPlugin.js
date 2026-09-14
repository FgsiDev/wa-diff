__d(
  "AdsUEditorAdgroupMessageMarketingSetOfferReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupMessageMarketingSetOfferActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "MarketingMessageButtonUtils",
    "adsUEditorSelectedAdgroupMessageMarketingButtonsSelector",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        switch (t) {
          case "COPY_CODE":
            return 0;
          case "URL":
            return 1;
          case "APP":
            return 2;
          case "PHONE_NUMBER":
            return 3;
          case "QUICK_REPLY":
            return 4;
        }
      },
      s = function (n, r) {
        var t = e(n.type),
          o = e(r.type);
        return t - o;
      },
      u = function (t, n) {
        return t
          .concat(n ? [{ text: "", type: "URL" }] : [])
          .filter(function (e) {
            return e.type !== "COPY_CODE";
          })
          .sort(s)
          .map(
            o("MarketingMessageButtonUtils")
              .getButtonDictFromMarketingMessageButton,
          );
      },
      c = function (t, n, a, i) {
        var e,
          l,
          u = { type: "COPY_CODE", text: a != null ? a : "", coupon_code: i },
          c = (e = r("immutable").List([u])).push.apply(e, t.toArray());
        return (l = c
          .concat(n ? [{ text: "", type: "URL" }] : [])
          .sort(s)
          .map(
            o("MarketingMessageButtonUtils")
              .getButtonDictFromMarketingMessageButton,
          )) != null
          ? l
          : r("immutable").List();
      },
      d = function (t, n, a, i, l) {
        var e,
          u = a[0],
          c = a[1],
          d = t.set(
            u,
            babelHelpers.extends({}, c, {
              text: i != null ? i : "",
              coupon_code: l,
            }),
          ),
          m =
            (e = d
              .concat(n ? [{ text: "", type: "URL" }] : [])
              .sort(s)
              .map(
                o("MarketingMessageButtonUtils")
                  .getButtonDictFromMarketingMessageButton,
              )) != null
              ? e
              : r("immutable").List();
        return m;
      },
      m = function (t, n) {
        var e = n.findEntry(function (e) {
            return e.type === "URL";
          }),
          r = e == null && t.offer != null,
          o =
            t.offer == null ||
            (t.couponCode == null && t.couponCodeButtonText == null);
        if (o) return u(n, r);
        var a = n.findEntry(function (e) {
            return e.type === "COPY_CODE";
          }),
          i = a == null;
        return i
          ? c(n, r, t.couponCodeButtonText, t.couponCode)
          : d(n, r, a, t.couponCodeButtonText, t.couponCode);
      },
      p = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            buttons: r(
              "adsUEditorSelectedAdgroupMessageMarketingButtonsSelector",
            ),
          },
          function (e, t, n) {
            var a = n.buttons;
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n, i, l;
              return t.offer == null || t.offer.text == null
                ? o("AdsMutators").chain(
                    r("AdsAdgroupRecordAccessors").creative
                      .marketing_message_structured_spec.offer.delete,
                    r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.marketing_message_structured_spec.buttons.set(
                      m(t, a),
                    ),
                  )(e)
                : o("AdsMutators").chain(
                    r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.marketing_message_structured_spec.offer.expiration_time.set(
                      (n = t.offer) == null ? void 0 : n.expiration_time,
                    ),
                    r("AdsAdgroupRecordAccessors").creative
                      .marketing_message_structured_spec.footer.delete,
                    r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.marketing_message_structured_spec.offer.text.set(
                      (i = t.offer) == null ? void 0 : i.text,
                    ),
                    r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.marketing_message_structured_spec.offer.is_offer_code_personalized.set(
                      (l = t.offer) == null
                        ? void 0
                        : l.is_offer_code_personalized,
                    ),
                    r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.marketing_message_structured_spec.buttons.set(
                      m(t, a),
                    ),
                    r("AdsAdgroupRecordAccessors").creative.object_story_spec
                      .link_data.name.delete,
                  )(e);
            });
          },
          r("AdsUEditorAdgroupMessageMarketingSetOfferActionFlux").actionType,
        ),
      },
      _ = p;
    l.default = _;
  },
  98,
);
