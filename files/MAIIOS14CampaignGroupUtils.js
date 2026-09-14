__d(
  "MAIIOS14CampaignGroupUtils",
  [
    "AdsAPIObjectives",
    "AdsAdgroupRecordAccessors",
    "AdsCampaignGroupRecordAccessors",
    "AdsMutators",
    "IsAppAdUtils",
    "SKAdNetworkCampaignGroupSitevarsUtils",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        r(
          "SKAdNetworkCampaignGroupSitevarsUtils",
        ).getSKANCampaignUserOSString(),
      ],
      s = ["iPad", "iPod", "iPhone"],
      u = "SHOP_NOW",
      c = "INSTALL_MOBILE_APP",
      d = {
        maybeUpdateCampaignSpec: function (n, o, a) {
          var t, i;
          if (!r("IsAppAdUtils").isMAIIOS14CampaignGroup(n)) return o;
          var l = babelHelpers.extends({}, o, {
            promoted_object: {
              application_id:
                (t = n.promoted_object) == null ? void 0 : t.application_id,
              object_store_url:
                (i = n.promoted_object) == null ? void 0 : i.object_store_url,
            },
            targeting: babelHelpers.extends({}, o.targeting, {
              user_device: s,
              user_os: e,
            }),
          });
          return a != null
            ? babelHelpers.extends({}, l, { optimization_goal: a })
            : l;
        },
        maybeUpdateAdGroupSpec: function (t, n) {
          var e = n;
          if (
            r("IsAppAdUtils").isMAIIOS14CampaignGroup(t) &&
            t.promoted_object !== null
          ) {
            var o;
            if (
              r("isTruthy")(
                (o = e.creative) == null ? void 0 : o.product_set_id,
              )
            ) {
              var a, i, l;
              ((e = r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.template_data.call_to_action.type.set(
                u,
                e,
              )),
                (e = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.object_story_spec.template_data.link.set(
                  (a = t.promoted_object) == null ? void 0 : a.object_store_url,
                  e,
                )),
                (e = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.object_story_spec.template_data.call_to_action.value.application.set(
                  (i = t.promoted_object) == null ? void 0 : i.application_id,
                  e,
                )),
                (e = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.object_story_spec.template_data.call_to_action.value.link.set(
                  (l = t.promoted_object) == null ? void 0 : l.object_store_url,
                  e,
                )),
                (e = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.object_story_spec.template_data.message.delete(e)));
            } else {
              var s, d, m;
              ((e = r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.link_data.call_to_action.type.set(
                c,
                e,
              )),
                (e = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.object_story_spec.link_data.link.set(
                  (s = t.promoted_object) == null ? void 0 : s.object_store_url,
                  e,
                )),
                (e = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.object_story_spec.link_data.call_to_action.value.application.set(
                  (d = t.promoted_object) == null ? void 0 : d.application_id,
                  e,
                )),
                (e = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.object_story_spec.link_data.call_to_action.value.link.set(
                  (m = t.promoted_object) == null ? void 0 : m.object_store_url,
                  e,
                )),
                (e = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.object_story_spec.link_data.message.delete(e)));
            }
          }
          return e;
        },
        removeSKAdNetworkFlag: function (t, n) {
          return !r("IsAppAdUtils").isMAIIOS14CampaignGroup(t) ||
            n === r("AdsAPIObjectives").APP_INSTALLS
            ? t
            : o("AdsMutators").chain(
                function (e) {
                  return r(
                    "AdsCampaignGroupRecordAccessors",
                  ).is_skadnetwork_attribution.delete(e);
                },
                function (e) {
                  return r(
                    "AdsCampaignGroupRecordAccessors",
                  ).promoted_object.delete(e);
                },
              )(t);
        },
      };
    l.default = d;
  },
  98,
);
