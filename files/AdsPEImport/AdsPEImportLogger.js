__d(
  "AdsPEImportLogger",
  [
    "AdDraftFragmentSource",
    "AdsDataAtom",
    "AdsPECreateLoggerHelper",
    "AdsPEImportErrorEvent",
    "AdsPEImportStore",
    "AdsPEServerImportActions",
    "PEAppLogger",
    "Promise",
    "asyncToGeneratorRuntime",
    "isTruthy",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 3927;
    function c(e, t, n) {
      var o,
        a = r("AdsPEImportStore").getState(),
        i = r("isTruthy")(a.fileMimeType) ? a.fileMimeType : "-empty-",
        l = r("isTruthy")(a.filename)
          ? ((o = a.filename) != null ? o : "") + " (type: " + i + ")"
          : "";
      r("PEAppLogger").logForAnalytics(
        e,
        t,
        babelHelpers.extends({}, n, {
          action_session_id: a.token,
          everstore_handle: a.everstoreHandle,
          fbtype: r("isTruthy")(a.everstoreHandle) ? u : null,
          filename: l,
        }),
      );
    }
    function d(e) {
      var t = e.description,
        n = e.summary;
      return n.toString() + ": " + t.toString();
    }
    function m(e, t) {
      var n = r("AdsPEImportErrorEvent").errorCodeToErrorNameMap[String(e)];
      return n || t;
    }
    function p(e, t) {
      c("errors", m(t.error.code, e), {
        error_sub_code: t.error.code,
        error_message: d(t.error),
        stack_trace: t.error.stackTrace,
      });
    }
    function _(e, t) {
      c("import_lifecycle", e, t);
    }
    function f(e) {
      c("user_action", e, void 0);
    }
    var g = new Map();
    function h(e) {
      g.set(e, Date.now());
    }
    function y(e) {
      var t;
      return Date.now() - ((t = g.get(e)) != null ? t : 0);
    }
    function C(e, t, n) {
      var r = n.ad,
        o = n.ad_set,
        a = n.campaign;
      _(e, {
        current_action_time: y("startDraft"),
        current_action_ads_count: r,
        current_action_campaigns_count: o,
        current_action_campaign_groups_count: a,
        current_action_items_count: r + o + a,
      });
    }
    function b(e, t) {
      return e
        .filter(function (e) {
          return e.ad_object_type === t;
        })
        .map(function (e) {
          return e.ad_object_id;
        });
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield (s || (s = n("Promise"))).all([
              o("AdsPECreateLoggerHelper").getNewCampaignGroupFragmentData(
                b(e, "campaign"),
                r("AdDraftFragmentSource").CLICK_BULK_IMPORT,
                !1,
              ),
              o("AdsPECreateLoggerHelper").getNewCampaignFragmentData(
                b(e, "ad_set"),
                r("AdDraftFragmentSource").CLICK_BULK_IMPORT,
                !1,
              ),
              o("AdsPECreateLoggerHelper").getNewAdgroupFragmentData(
                b(e, "ad"),
                r("AdDraftFragmentSource").CLICK_BULK_IMPORT,
                !1,
              ),
            ]),
            a = t[0],
            i = t[1],
            l = t[2];
          (a.forEach(function (e) {
            return _("campaign_group_fragment_creation", e);
          }),
            i.forEach(function (e) {
              return _("campaign_fragment_creation", e);
            }),
            l.forEach(function (e) {
              return _("ad_fragment_creation", e);
            }));
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      e instanceof o("AdsPEServerImportActions").OpenDialogWithPastedText
        ? (h("open"), _("import_open_dialog_with_pasted_text"))
        : e instanceof o("AdsPEServerImportActions").OpenDialog
          ? (h("open"), _("import_open_dialog"))
          : e instanceof o("AdsPEServerImportActions").CloseDialog
            ? _("import_close_dialog", { current_action_time: y("open") })
            : e instanceof o("AdsPEServerImportActions").PastedText
              ? f("import_text_pasted")
              : e instanceof o("AdsPEServerImportActions").ChooseImagesClick
                ? f("bulk_import_choose_images_clicked")
                : e instanceof o("AdsPEServerImportActions").ImageUploaded
                  ? _("import_image_uploaded")
                  : e instanceof o("AdsPEServerImportActions").ParseErrored
                    ? p("import_parse_errored", e)
                    : e instanceof
                        o("AdsPEServerImportActions").StartImportFromPastedText
                      ? (h("start"), _("import_start_from_pasted_text"))
                      : e instanceof
                          o("AdsPEServerImportActions").StartImportFromFile
                        ? (h("start"), _("import_start_from_file"))
                        : e instanceof
                            o("AdsPEServerImportActions").AsyncParseJobStart
                          ? h("asyncJobStart")
                          : e instanceof
                              o("AdsPEServerImportActions")
                                .ParseCompletedWithError
                            ? (h("startDraft"),
                              _("import_parse_async_spreadsheet_error", {
                                current_action_time: y("asyncJobStart"),
                              }))
                            : e instanceof
                                o("AdsPEServerImportActions")
                                  .ParseCompletedWithoutError
                              ? (h("startDraft"),
                                _("import_parse_async_success", {
                                  current_action_time: y("asyncJobStart"),
                                }))
                              : e instanceof
                                  o("AdsPEServerImportActions")
                                    .FragmentCreationCompleted
                                ? C(
                                    "import_draft_import_completed",
                                    y("startDraft"),
                                    e.draftFragmentCount,
                                  )
                                : e instanceof
                                    o("AdsPEServerImportActions")
                                      .FragmentDownloadCompleted
                                  ? r("promiseDone")(v(e.fragments))
                                  : e instanceof
                                      o("AdsPEServerImportActions")
                                        .FragmentDownloadErrored
                                    ? p("import_fragment_download_error", e)
                                    : e instanceof
                                        o("AdsPEServerImportActions")
                                          .TextFileConvertToTSVStarted &&
                                      h("startConvertToTsv");
    }
    (e || (e = r("AdsDataAtom"))).register(function (t) {
      if (t.action instanceof o("AdsPEServerImportActions").ImportAction) {
        var n = t.action;
        ((e || (e = r("AdsDataAtom"))).waitFor([
          r("AdsPEImportStore").getDispatchToken(),
        ]),
          R(n));
      }
    });
  },
  34,
);
