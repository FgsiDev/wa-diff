__d(
  "AdsCrepePublishingLogger",
  ["AdsCrepeLogger", "AdsPECrepeFlowLoggingProvider"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r, o, a, i, l) {
      var s,
        u = (e == null ? void 0 : e.adgroupFragments) || [],
        c = (e == null ? void 0 : e.campaignFragments) || [],
        d = (e == null ? void 0 : e.campaignGroupFragments) || [],
        m = (e == null ? void 0 : e.adgroupCreationSources) || [],
        p = (e == null ? void 0 : e.campaignCreationSources) || [],
        _ = (e == null ? void 0 : e.campaignGroupCreationSources) || [],
        f = (e == null ? void 0 : e.errorMessages) || [];
      switch (n) {
        case "ad":
          (u.push(r), m.push(o));
          break;
        case "ad_set":
          (c.push(r), p.push(o));
          break;
        case "campaign":
          (d.push(r), _.push(o));
          break;
      }
      return (
        !i && l != null && f.push(l),
        {
          packageConfigId: t,
          isNew: a,
          successCount:
            ((s = e == null ? void 0 : e.successCount) != null ? s : 0) +
            (i ? 1 : 0),
          adgroupFragments: u,
          campaignFragments: c,
          campaignGroupFragments: d,
          adgroupCreationSources: m,
          campaignCreationSources: p,
          campaignGroupCreationSources: _,
          errorMessages: f,
        }
      );
    }
    function s(e) {
      var t = e.adgroupCreationSources,
        n = e.adgroupFragments,
        a = e.campaignCreationSources,
        i = e.campaignFragments,
        l = e.campaignGroupCreationSources,
        s = e.campaignGroupFragments,
        u = e.errorMessages,
        c = e.isNew,
        d = e.packageConfigId,
        m = e.successCount,
        p = n.length + i.length + s.length,
        _;
      c
        ? m === p
          ? (_ = "PACKAGE_CREATE_SUCCEEDED")
          : m === 0
            ? (_ = "PACKAGE_CREATE_FAILED")
            : (_ = "PACKAGE_CREATE_PARTIAL")
        : m === p
          ? (_ = "PACKAGE_EDIT_SUCCEEDED")
          : m === 0
            ? (_ = "PACKAGE_EDIT_FAILED")
            : (_ = "PACKAGE_EDIT_PARTIAL");
      var f = r("AdsPECrepeFlowLoggingProvider")().deepLinkSource;
      o("AdsCrepeLogger").AdsCrepeLogger.log({
        ad_creation_package_config_id: d,
        category: "EDITOR",
        event: _,
        data: {
          adgroupFragments: n,
          campaignFragments: i,
          campaignGroupFragments: s,
          adgroupCreationSources: t,
          campaignCreationSources: a,
          campaignGroupCreationSources: l,
          fragmentCount: p,
          successCount: m,
          failCount: p - m,
          deep_link_source: f,
          error_messages: u.length > 0 ? u.join(" | ") : void 0,
        },
      });
    }
    ((l.updatePackagePublishStats = e), (l.logPackagePublished = s));
  },
  98,
);
