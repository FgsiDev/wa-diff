__d(
  "AdsAdgroupDraftFragmentEnablePageActorReducerPlugin",
  [
    "AdsAPIAdgroupObjectStorySpecRecord",
    "AdsAdgroupEditorStore",
    "AdsAdgroupRecordAccessors",
    "AdsDataAtom",
    "AdsMutators",
    "AdsSelectorUtils",
    "ApiAdObjectTypes",
    "adsAdgroupDraftFragmentCreateReducer",
    "adsPageIDSelector",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t) {
      var n;
      (s || (s = r("AdsDataAtom"))).waitFor(
        [r("AdsAdgroupEditorStore").getDispatchToken()].concat(
          (e || (e = o("AdsSelectorUtils"))).getStoreDispatchTokens([
            r("adsPageIDSelector"),
          ]),
        ),
      );
      var a = r("AdsAdgroupEditorStore").getCachedObjectStorySpec(t.id),
        i = r("AdsAdgroupRecordAccessors").creative.object_story_spec.set(
          new (r("AdsAPIAdgroupObjectStorySpecRecord"))(a || {}),
          t,
        ),
        l = r("adsPageIDSelector")({ adgroup: i });
      l != null &&
        (i = r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.page_id.set(l, i));
      var u =
        (n = i.creative) == null || (n = n.object_story_spec) == null
          ? void 0
          : n.video_data;
      if (u)
        i = r("AdsAdgroupRecordAccessors").creative.object_type.set(
          r("ApiAdObjectTypes").VIDEO,
          i,
        );
      else {
        var d, m, p, _;
        i = o("AdsMutators").chain(
          r("AdsAdgroupRecordAccessors").creative.object_type.set(
            r("ApiAdObjectTypes").SHARE,
          ),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.image_crops.set(
            (d = i.creative) == null ? void 0 : d.image_crops,
          ),
          function (e) {
            return c(e);
          },
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.link.set(
            (m = i.creative) == null ? void 0 : m.object_url,
          ),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.message.set(
            (p = i.creative) == null ? void 0 : p.body,
          ),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.name.set(
            (_ = i.creative) == null ? void 0 : _.title,
          ),
        )(i);
      }
      return o("AdsMutators").chain(
        r("AdsAdgroupRecordAccessors").creative.image_crops.delete,
        r("AdsAdgroupRecordAccessors").creative.image_hash.delete,
        r("AdsAdgroupRecordAccessors").creative.image_url.delete,
        r("AdsAdgroupRecordAccessors").creative.object_url.delete,
        r("AdsAdgroupRecordAccessors").creative.body.delete,
        r("AdsAdgroupRecordAccessors").creative.title.delete,
      )(i);
    }
    function c(e) {
      var t,
        n = (t = e.creative) == null ? void 0 : t.image_hash,
        a = e;
      if (r("isTruthy")(n))
        a = o("AdsMutators").chain(
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.image_hash.set(n),
          r("AdsAdgroupRecordAccessors").creative.object_story_spec.link_data
            .picture.delete,
        )(a);
      else {
        var i;
        a = o("AdsMutators").chain(
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.picture.set(
            (i = a.creative) == null ? void 0 : i.image_url,
          ),
          r("AdsAdgroupRecordAccessors").creative.object_story_spec.link_data
            .image_hash.delete,
        )(a);
      }
      return a;
    }
    var d = {
        reduce: r("adsAdgroupDraftFragmentCreateReducer")(
          function (e) {
            return e;
          },
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.ids, function (e) {
              return u(e);
            });
          },
          function (e) {
            return e;
          },
          function (e) {
            return e;
          },
        ),
      },
      m = d;
    l.default = m;
  },
  98,
);
