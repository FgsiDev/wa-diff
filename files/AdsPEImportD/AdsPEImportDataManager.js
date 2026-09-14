__d(
  "AdsPEImportDataManager",
  [
    "errorCode",
    "fbt",
    "invariant",
    "AdsApplicationIDs",
    "AdsDraftFragmentDataManager",
    "AdsDraftFragmentStore",
    "AdsImportParsingRealtimeConfig.experimental",
    "AdsImportToastCardUtils",
    "AdsManagerErrorUtils",
    "AdsPEImportCriticalError",
    "AdsPEServerImportActions",
    "AsyncTypedRequest",
    "Promise",
    "WebApiApplication",
    "XAdsManagerParseSpreadsheetController",
    "XAdsManagerParseTSVController",
    "XAdsManagerParsedSpecGetControllerRouteBuilder",
    "clearInterval",
    "nullthrows",
    "promiseDone",
    "setInterval",
  ],
  function (t, n, r, o, a, i, l, s, u, c) {
    "use strict";
    var e;
    function d(e, t) {
      var n = new (r("AsyncTypedRequest"))()
          .setURI(r("XAdsManagerParseTSVController").getURIBuilder().getURI())
          .setMethod("POST"),
        a,
        i,
        l = 0,
        s = 0,
        u = function (t, n, r, o) {
          return n + (r - n) * (1 - Math.exp(-o * t));
        };
      function c(t, n) {
        (r("clearInterval")(i),
          r("clearInterval")(a),
          o("AdsPEServerImportActions").dispatch(
            new (o("AdsPEServerImportActions").ParseErrored)(
              e,
              new (r("AdsPEImportCriticalError"))(
                t.getError(),
                t.getErrorSummary() || "",
                t.getErrorDescriptionString() || "",
                n,
                "",
                [t.errorMid],
              ),
            ),
          ));
      }
      if (
        (n
          .setData(t)
          .setErrorHandler(function (e) {
            return c(e, !1);
          })
          .setTransportErrorHandler(function (e) {
            return c(e, !0);
          })
          .setUploadProgressHandler(function (e) {
            e.lengthComputable &&
              (o("AdsPEServerImportActions").dispatch(
                new (o("AdsPEServerImportActions").ParseProgressed)(
                  (0.2 * e.loaded) / e.total,
                ),
              ),
              e.loaded === e.total &&
                (a = r("setInterval")(function () {
                  (l++,
                    o("AdsPEServerImportActions").dispatch(
                      new (o("AdsPEServerImportActions").ParseProgressed)(
                        u(
                          l,
                          r("AdsImportParsingRealtimeConfig.experimental")
                            .enabled
                            ? 0
                            : 0.2,
                          r("AdsImportParsingRealtimeConfig.experimental")
                            .enabled
                            ? 0.2
                            : 0.95,
                          0.5,
                        ),
                      ),
                    ));
                }, 1e3)));
          })
          .setPayloadHandler(function (t) {
            (r("clearInterval")(i), r("clearInterval")(a), m(t, e));
          })
          .send(),
        !!n.transport)
      ) {
        var d = !1;
        n.transport.onprogress = function (e) {
          d ||
            r("AdsImportParsingRealtimeConfig.experimental").enabled ||
            (r("clearInterval")(a),
            (i = r("setInterval")(function () {
              (s++,
                o("AdsPEServerImportActions").dispatch(
                  new (o("AdsPEServerImportActions").ParseProgressed)(
                    u(s, 0.95, 1, 0.7),
                  ),
                ));
            }, 500)),
            (d = !0));
        };
      }
    }
    function m(e, t) {
      var n = e.async_session_id;
      o("AdsPEServerImportActions").dispatch(
        new (o("AdsPEServerImportActions").AsyncParseJobStart)(n),
      );
    }
    function p(e, t) {
      e.specs != null &&
        o("AdsPEServerImportActions").dispatch(
          new (o("AdsPEServerImportActions").ParseCompletedWithError)(
            t,
            JSON.parse(e.specs),
          ),
        );
    }
    function _(e, t, n) {
      e.draft_id != null &&
        e.fragments_count != null &&
        e.fragment_ids != null &&
        o("AdsPEServerImportActions").dispatch(
          new (o("AdsPEServerImportActions").FragmentCreationCompleted)(
            t,
            e.draft_id,
            e.fragments_count,
            !1,
            e.fragment_ids,
            null,
            n,
          ),
        );
    }
    function f(e, t) {
      var n = e.error_code,
        a = e.error_description,
        i = e.error_summary,
        l = e.mid;
      n != null &&
        o("AdsPEServerImportActions").dispatch(
          new (o("AdsPEServerImportActions").ParseErrored)(
            t,
            new (r("AdsPEImportCriticalError"))(
              n,
              i != null ? i : "",
              a != null ? a : "",
              !1,
              "",
              [l != null ? l : "fake_mid_empty_response"],
            ),
          ),
        );
    }
    function g(e, t, n) {
      o("AdsPEServerImportActions").dispatch(
        new (o("AdsPEServerImportActions").ParseErrored)(
          t,
          new (r("AdsPEImportCriticalError"))(
            e.getError(),
            e.getErrorSummary() || "",
            e.getErrorDescriptionString() || "",
            n,
            "",
            [e.errorMid],
          ),
        ),
      );
    }
    function h(e, t, n, o, a) {
      new (r("AsyncTypedRequest"))()
        .setURI(
          r("XAdsManagerParsedSpecGetControllerRouteBuilder").buildUri({
            session_id: e + "",
            token: t,
          }),
        )
        .setData({ token: t })
        .setReadOnly(!0)
        .setMethod("GET")
        .setPayloadHandler(function (e) {
          (y(e, t, n, o), a == null || a());
        })
        .setErrorHandler(function (e) {
          return g(e, t, !1);
        })
        .setTransportErrorHandler(function (e) {
          return g(e, t, !0);
        })
        .send();
    }
    function y(e, t, n, o) {
      var a = e.status;
      e: {
        if (a === 13) {
          C(e, t, n, o);
          break e;
        }
        if (a === 15) {
          b(e, t);
          break e;
        }
        if (a === 14) {
          f(e, t);
          break e;
        }
        {
          r("nullthrows")(o)(t);
          break e;
        }
      }
    }
    function C(e, t, n, o) {
      n !== 13 ? r("nullthrows")(o)(t) : p(e, t);
    }
    function b(e, t) {
      var n = e.specs != null ? JSON.parse(e.specs) : null;
      (p(e, t), _(e, t, n));
    }
    function v(e, t, n, o, a) {
      r("promiseDone")(R(e, t, n, o, a));
    }
    function S(e) {
      var t = e.adImportSessionID,
        n = e.fragmentCountsByLevel,
        r = e.fragments,
        a = e.hasSpecErrors,
        i = e.importSessionToken,
        l = e.targetingSignalUpdate;
      if (!a) {
        var s, u, c;
        o("AdsImportToastCardUtils").showSuccessToastCard(
          t,
          (s = n.campaign) != null ? s : 0,
          (u = n.ad_set) != null ? u : 0,
          (c = n.ad) != null ? c : 0,
          l,
        );
      }
      o("AdsPEServerImportActions").dispatch(
        new (o("AdsPEServerImportActions").FragmentDownloadCompleted)(i, r),
      );
    }
    function R(t, a, i, l, s) {
      var c = s.adImportSessionID,
        d = s.fragmentIDs,
        m = s.hasSpecErrors,
        p = i.campaign,
        _ = i.ad_set,
        f = i.ad,
        g = f + _ + p;
      return g
        ? r("AdsDraftFragmentDataManager")
            .loadAll(d)
            .then(
              function () {
                return S({
                  adImportSessionID: c,
                  importSessionToken: a,
                  fragmentCountsByLevel: i,
                  targetingSignalUpdate: l,
                  fragments: d
                    .map(function (e) {
                      return r("AdsDraftFragmentStore").getCached(e);
                    })
                    .filter(Boolean),
                  hasSpecErrors: m,
                });
              },
              function (e) {
                o("AdsPEServerImportActions").dispatch(
                  new (o("AdsPEServerImportActions").FragmentDownloadErrored)(
                    a,
                    new (r("AdsPEImportCriticalError"))(
                      1792060,
                      u._(/*BTDS*/ "Draft import failed"),
                      u._(
                        /*BTDS*/ "Changes from your spreadsheet failed to completely import",
                      ),
                      !1,
                      e.stack,
                      o("AdsManagerErrorUtils").getOpesMIDs(e),
                    ),
                  ),
                );
              },
            )
        : (e || (e = n("Promise"))).resolve().then(function () {
            return S({
              adImportSessionID: c,
              fragmentCountsByLevel: i,
              targetingSignalUpdate: l,
              importSessionToken: a,
              fragments: [],
              hasSpecErrors: m,
            });
          });
    }
    function L(e, t, n, a, i, l) {
      var s;
      d(e, {
        account_id: t,
        app_id:
          (s = o("WebApiApplication").getClientID()) != null
            ? s
            : r("AdsApplicationIDs").ADS_POWER_EDITOR,
        draft_id: l,
        image_mapping: a ? a.toObject() : null,
        video_mapping: i ? i.toObject() : null,
        import_session_token: e,
        tsv: n,
      });
    }
    function E(e, t, n, a, i, l, s) {
      var u;
      d(e, {
        account_id: t,
        app_id:
          (u = o("WebApiApplication").getClientID()) != null
            ? u
            : r("AdsApplicationIDs").ADS_POWER_EDITOR,
        draft_id: s,
        image_mapping: i ? i.toObject() : null,
        video_mapping: l ? l.toObject() : null,
        import_session_token: e,
        sheet: a,
        file_handle: n,
      });
    }
    function k(e, t) {
      var n = new FormData();
      (n.append("file", t), n.append("force_sheets", "true"));
      var a = new (r("AsyncTypedRequest"))()
        .setURI(
          r("XAdsManagerParseSpreadsheetController").getURIBuilder().getURI(),
        )
        .setMethod("POST");
      a.setRawData(n)
        .setPayloadHandler(function (t) {
          t.action === "select_sheet"
            ? o("AdsPEServerImportActions").dispatch(
                new (o("AdsPEServerImportActions").ExcelUploadCompleted)(e, t),
              )
            : c(0, 12240, JSON.stringify(t));
        })
        .setErrorHandler(function (t) {
          o("AdsPEServerImportActions").dispatch(
            new (o("AdsPEServerImportActions").ExcelUploadErrored)(
              e,
              new (r("AdsPEImportCriticalError"))(
                t.getError(),
                t.getErrorSummary() || "",
                t.getErrorDescriptionString() || "",
                !1,
                "",
                [t.errorMid],
              ),
            ),
          );
        })
        .setUploadProgressHandler(function (e) {
          e.lengthComputable &&
            o("AdsPEServerImportActions").dispatch(
              new (o("AdsPEServerImportActions").ExcelUploadProgressed)(
                e.loaded / e.total,
              ),
            );
        })
        .send();
    }
    ((l.getParseResultFromAsyncJob = h),
      (l.downloadFragments = v),
      (l.parseTSV = L),
      (l.parseSheetReference = E),
      (l.uploadExcel = k));
  },
  226,
);
