__d(
  "AdsUEditorAdgroupConversionLocationCreativeRetentionMutator",
  [
    "AdDraftFragmentSource",
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupRecordAccessors",
    "AdsInterfacesLoggerUtils",
    "ApiAdObjectTypes",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e === r("AdDraftFragmentSource").ADS_SIMPLIFIED_ONE_CLICK
        ? !0
        : e !== r("AdDraftFragmentSource").ADS_SYD_AD_SLIDER
          ? !1
          : r("qex")._("5095") === !0;
    }
    function s(e) {
      var t = e.adgroup,
        n = e.oldAdgroup,
        a = e.retain_image,
        i = a === void 0 ? !1 : a;
      try {
        var l, s;
        if (n == null || o("AdsAPIAdgroupRecordUtils").isExistingPostAd(n))
          return null;
        var u = (l = n.creative) == null ? void 0 : l.object_story_spec,
          c = u == null ? void 0 : u.link_data,
          d = u == null ? void 0 : u.video_data,
          m = u == null ? void 0 : u.page_id,
          p = c == null ? void 0 : c.message,
          _ = c == null ? void 0 : c.picture,
          f = c == null ? void 0 : c.child_attachments,
          g =
            p != null ||
            _ != null ||
            (f != null && f.size > 0) ||
            d != null ||
            m != null ||
            (i &&
              (((s = n.creative) == null ? void 0 : s.thumbnail_url) != null ||
                (c == null ? void 0 : c.image_hash) != null));
        if (!g) return null;
        var h = t;
        if (
          (p != null &&
            (h = r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.link_data.message.set(p)(h)),
          _ != null &&
            (h = r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.link_data.picture.set(_)(h)),
          f != null && f.size > 0)
        ) {
          var y,
            C =
              (y = h.creative) == null || (y = y.object_story_spec) == null
                ? void 0
                : y.link_data,
            b = C == null ? void 0 : C.child_attachments,
            v = C == null ? void 0 : C.call_to_action,
            S = f.map(function (e, t) {
              var n,
                r,
                o =
                  (n =
                    b == null || (r = b.get(t)) == null
                      ? void 0
                      : r.get("call_to_action")) != null
                    ? n
                    : v;
              return o != null ? e.set("call_to_action", o) : e;
            });
          h = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.child_attachments.set(S)(h);
        }
        if (
          d != null &&
          ((h = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.video_data.set(d)(h)),
          i)
        ) {
          var R,
            L,
            E =
              (R = h.creative) == null ||
              (R = R.object_story_spec) == null ||
              (R = R.link_data) == null
                ? void 0
                : R.call_to_action,
            k = E == null || E.get == null ? void 0 : E.get("type");
          k != null &&
            (h = r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.video_data.call_to_action.type.set(
              k,
              h,
            ));
          var I =
            E == null ||
            E.get == null ||
            (L = E.get("value")) == null ||
            L.get == null
              ? void 0
              : L.get("link");
          (I != null &&
            (h = r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.video_data.call_to_action.value.link.set(
              I,
              h,
            )),
            (h = r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.video_data.call_to_action.value.page.delete(
              h,
            )),
            (h = r("AdsAdgroupRecordAccessors").creative.object_type.set(
              r("ApiAdObjectTypes").VIDEO,
              h,
            )));
        }
        if (
          (m != null &&
            (h = r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.page_id.set(m)(h)),
          i)
        ) {
          var T,
            D,
            x = (T = n.creative) == null ? void 0 : T.thumbnail_url,
            $ =
              (D = n.creative) == null ||
              (D = D.object_story_spec) == null ||
              (D = D.link_data) == null
                ? void 0
                : D.image_hash;
          (x != null &&
            (h = r("AdsAdgroupRecordAccessors").creative.thumbnail_url.set(x)(
              h,
            )),
            $ != null &&
              (h = r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.link_data.image_hash.set($)(h)));
        }
        return h;
      } catch (e) {
        var P;
        return (
          o("AdsInterfacesLoggerUtils").logException(
            e,
            ((P = {}),
            (P.module_name =
              "AdsUEditorAdgroupConversionLocationCreativeRetentionMutator"),
            P),
          ),
          t
        );
      }
    }
    function u(e) {
      var t;
      return (t = s(e)) != null ? t : e.adgroup;
    }
    ((l.shouldRetainCreativeData = e),
      (l.tryRetainCreativeData = s),
      (l.retainCreativeData = u));
  },
  98,
);
