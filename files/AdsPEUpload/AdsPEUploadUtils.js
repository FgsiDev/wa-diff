__d(
  "AdsPEUploadUtils",
  [
    "invariant",
    "AdAsyncRequestStatus",
    "AdsAPIDraftPublishStatusErrorPaths",
    "AdsAPIDraftPublishStatusPaths",
    "adsDraftGetAdsErrorFromDraftError",
    "adsDraftGetFragmentPublishErrorMessage",
    "adsDraftSortLevel",
    "expectationViolation",
    "getByPath",
    "intlList",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t, n) {
      var o = r("getByPath")(
        n,
        r("AdsAPIDraftPublishStatusErrorPaths").ERROR_DATA.FRAGMENT_ID,
      );
      if (o) {
        var a = r("getByPath")(
            e,
            r("AdsAPIDraftPublishStatusPaths").FRAGMENT_STATUSES.DATA,
            [],
          ),
          i = a
            .filter(function (e) {
              return e.status === r("AdAsyncRequestStatus").ERROR;
            })
            .map(function (e) {
              var n = u(e, t);
              return n.name != null &&
                n.name.value != null &&
                n.name.value !== ""
                ? n.name.value
                : n.id;
            });
        if (i.length > 0) return r("intlList")(i);
      }
      return null;
    }
    function u(e, t) {
      var n,
        r = e.ad_object_id,
        o = e.ad_object_type,
        a = (n = t.get(o)) == null ? void 0 : n.names,
        i = a ? a.get(r) : null;
      return { id: r, name: i };
    }
    function c(t, n, o, a, i) {
      var l = e(o, n, a),
        s = r("getByPath")(
          o,
          r("AdsAPIDraftPublishStatusPaths").FRAGMENT_STATUSES.DATA,
          [],
        );
      return s
        .filter(function (e) {
          return e.ad_object_type === t;
        })
        .map(function (e) {
          return d(e, u(e, n), l, i);
        });
    }
    function d(e, t, n, o) {
      var a = e.status,
        i = null,
        l = r("adsDraftGetFragmentPublishErrorMessage")(e, n, o),
        s = void 0,
        u = void 0,
        c = void 0;
      switch (a) {
        case r("AdAsyncRequestStatus").SUCCESS:
          i = "COMPLETE";
          break;
        case r("AdAsyncRequestStatus").CANCELED:
        case r("AdAsyncRequestStatus").ERROR:
          ((i = "ERROR"),
            e &&
              ((s = r("adsDraftGetAdsErrorFromDraftError")(e)),
              (u = e.www_request_id),
              (c = e.fragment_id)));
          break;
        case r("AdAsyncRequestStatus").ERROR_DEPENDENCY:
        case r("AdAsyncRequestStatus").CANCELED_DEPENDENCY:
        case r("AdAsyncRequestStatus").INITIAL:
          i = "DEPENDENCY_ERROR";
          break;
        case r("AdAsyncRequestStatus").PENDING_DEPENDENCY:
        case r("AdAsyncRequestStatus").IN_PROGRESS:
          i = "IN_PROGRESS";
          break;
      }
      return (
        i ||
          (r("expectationViolation")(
            "Failed to determine icon for summary row! Status: %s",
            a,
          ),
          (i = "COMPLETE")),
        babelHelpers.extends({}, t, {
          error: s,
          fragmentID: c,
          icon: i,
          statusText: l,
          wwwRequestId: u,
        })
      );
    }
    function m(e) {
      var t = r("getByPath")(
          e,
          r("AdsAPIDraftPublishStatusPaths").FRAGMENT_STATUSES.DATA,
        ),
        n,
        o = "ad";
      return (
        (t || []).forEach(function (e) {
          var t = e.status,
            a = e.ad_object_type;
          t === r("AdAsyncRequestStatus").SUCCESS
            ? (o = p(o, a))
            : (n = n ? p(n, a) : a);
        }),
        n || o
      );
    }
    function p(e, t) {
      return r("adsDraftSortLevel")(e, t) > 0 ? t : e;
    }
    function _(e, t, n, r, o, a) {
      var i = t.withMutations(function (t) {
        var a = t,
          i = e.get(n),
          l = e.get("campaign"),
          u = e.get("ad_set"),
          c = e.get("ad"),
          d = function (t) {
            var e =
              i == null
                ? void 0
                : i.find(function (e) {
                    return e.id === t;
                  });
            e || s(0, 5803, t);
            var r = e.isDeleted,
              d = e.parentCampaignGroupID,
              m = e.parentCampaignID;
            switch (n) {
              case "campaign":
                (u &&
                  (a = f(
                    a,
                    u
                      .filter(function (e) {
                        return e.parentCampaignGroupID === t;
                      })
                      .map(function (e) {
                        return e.id;
                      }),
                    "ad_set",
                    o,
                  )),
                  c &&
                    (a = f(
                      a,
                      c
                        .filter(function (e) {
                          return e.parentCampaignGroupID === t;
                        })
                        .map(function (e) {
                          return e.id;
                        }),
                      "ad",
                      o,
                    )));
                break;
              case "ad_set":
                (c &&
                  (a = f(
                    a,
                    c
                      .filter(function (e) {
                        return e.parentCampaignID === t;
                      })
                      .map(function (e) {
                        return e.id;
                      }),
                    "ad",
                    o,
                  )),
                  ((o && !r) || (!o && r)) &&
                    l &&
                    (a = f(
                      a,
                      l
                        .filter(function (e) {
                          return e.id === d;
                        })
                        .map(function (e) {
                          return e.id;
                        }),
                      "campaign",
                      o,
                    )));
                break;
              case "ad":
                ((o && !r) || (!o && r)) &&
                  (u &&
                    (a = f(
                      a,
                      u
                        .filter(function (e) {
                          return e.id === m;
                        })
                        .map(function (e) {
                          return e.id;
                        }),
                      "ad_set",
                      o,
                    )),
                  l &&
                    (a = f(
                      a,
                      l
                        .filter(function (e) {
                          return e.id === d;
                        })
                        .map(function (e) {
                          return e.id;
                        }),
                      "campaign",
                      o,
                    )));
                break;
            }
            i &&
              (a = f(
                a,
                i
                  .filter(function (e) {
                    return e.id === t;
                  })
                  .map(function (e) {
                    return e.id;
                  }),
                n,
                o,
              ));
          };
        for (var m of r) d(m);
      });
      return a == null
        ? i
        : i.map(function (e) {
            return e.filter(function (e) {
              return a.includes(e);
            });
          });
    }
    function f(e, t, n, r) {
      var o = e.get(n);
      return e.set(n, r ? o.concat(t) : o.subtract(t));
    }
    ((l.buildPublishReceiptRows = c),
      (l.buildPublishReceiptRow = d),
      (l.getDefaultLevel = m),
      (l.toggleSelectionInPreview = _));
  },
  98,
);
