__d(
  "AdsUEditorAdgroupBulkSelectors",
  [
    "codedError",
    "invariant",
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupRecordAccessors",
    "AdsBulkValueUtils",
    "AdsChildAttachmentsUtils",
    "AdsError",
    "AdsUEditorAdgroupErrorSelectors",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorErrorSelectorUtils",
    "AdsUEditorSelectorUtils",
    "PathArrayIndex",
    "Result",
    "adsCreateSelector",
    "adsMemoizeWithArgs",
    "adsUEditorAdObjectsAdgroupErrorsSelector",
    "adsUEditorAdObjectsForSelectedAdgroupsSelector",
    "adsUEditorAdgroupBulkSelectorsUtils",
    "adsUEditorAdgroupCombinedErrorsForSelectedAdgroupsSelector",
    "adsUEditorAdgroupErrorMessageSpecsForSelectedAdgroupsSelector",
    "adsUEditorAdgroupPublishStatusSelector",
    "adsUEditorAdgroupSelectedChildAttachmentIndexSelector",
    "adsUEditorSelectedAdgroupIDsSelector",
    "adsUEditorSelectedAdgroupsIssuesInfoSelector",
    "adsUEditorSelectedAdgroupsSelector",
    "arrayContainsArray",
    "getByPath",
    "memoizeByReference",
    "shallowArrayEqual",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c,
      d,
      m,
      p = function (t) {
        return r("adsCreateSelector")(
          [r("adsUEditorAdObjectsForSelectedAdgroupsSelector")],
          function (n) {
            return t.aggregate(
              n.map(function (e) {
                return {
                  adgroup: e.adgroup,
                  adgroupSpecPathPlugin: o(
                    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
                  ).getAdgroupSpecPathPlugin(e),
                };
              }),
            );
          },
          { name: i.id },
        );
      },
      _ = (c = r("adsMemoizeWithArgs"))(
        p,
        function (e) {
          return e.name;
        },
        i.id + ".selectorByCreativeField_DEPRECATED_USE_BULKBYSEMANTICFIELD",
      ),
      f = function (t) {
        return r("adsCreateSelector")(
          [r("adsUEditorAdgroupErrorMessageSpecsForSelectedAdgroupsSelector")],
          o("AdsUEditorSelectorUtils").memoizeBulkAggregation(function (e) {
            return e.map(function (e) {
              var n = e.errorSpec;
              return r("getByPath")(n, t);
            });
          }),
          { name: i.id },
        );
      },
      g = c(
        f,
        function (e) {
          return e.join(".");
        },
        i.id + ".errorMessageSpecSelectorByPath",
      ),
      h = function (t, n) {
        return r("adsCreateSelector")(
          [z],
          o("AdsUEditorErrorSelectorUtils").getBulkErrorObjectByPath(t, n),
          { name: i.id },
        );
      },
      y = c(
        h,
        function (e, t) {
          return (
            (Array.isArray(t) ? t.join("") : t != null ? t : "") + e.join(".")
          );
        },
        i.id + ".errorObjectSelectorByPath",
      ),
      C = function (t, n) {
        return r("adsCreateSelector")(
          [r("adsUEditorAdgroupCombinedErrorsForSelectedAdgroupsSelector")],
          o("AdsUEditorErrorSelectorUtils").getBulkErrorObjectByPath(t, n),
          { name: i.id },
        );
      },
      b = c(
        C,
        function (e, t) {
          return e
            .map(function (e) {
              return (
                (Array.isArray(t) ? t.join("") : t != null ? t : "") +
                e.join(".")
              );
            })
            .join(",");
        },
        i.id + ".errorObjectSelectorByPaths",
      ),
      v = function (t) {
        return r("adsCreateSelector")(
          [
            r("adsUEditorAdObjectsForSelectedAdgroupsSelector"),
            r("adsUEditorAdgroupErrorMessageSpecsForSelectedAdgroupsSelector"),
          ],
          o("AdsUEditorSelectorUtils").memoizeBulkAggregation(function (e, n) {
            var o = L(e);
            return n.map(function (e) {
              var n = e.adgroupID,
                a = e.errorSpec,
                i = o.get(n);
              i || u(0, 661);
              var l = E(i, t);
              return l && r("getByPath")(a, l);
            });
          }),
          { name: i.id },
        );
      },
      S = c(
        v,
        function (e) {
          return e.name;
        },
        i.id + ".errorMessageSelectorByCreativeField",
      ),
      R = function (t) {
        return r("adsCreateSelector")(
          [
            r("adsUEditorAdObjectsForSelectedAdgroupsSelector"),
            o("AdsUEditorAdgroupErrorSelectors")
              .allErrorsForSelectedAdgroupsSelector,
          ],
          o("AdsUEditorSelectorUtils").memoizeBulkAggregation(function (e, n) {
            var o = L(e),
              a = [];
            return (
              o.forEach(function (e) {
                var o = E(e, t);
                n.forEach(function (e) {
                  e &&
                    e.path &&
                    o &&
                    r("arrayContainsArray")(e.path, o) &&
                    a.push(e);
                });
              }),
              a
            );
          }),
          { name: i.id },
        );
      };
    function L(e) {
      return e.reduce(function (e, t) {
        return e.set(t.adgroup.id, t);
      }, new Map());
    }
    function E(e, t) {
      var n = o(
        "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
      ).getAdgroupSpecPathPlugin(e);
      return t.getPath(e.adgroup, n);
    }
    var k = c(
        R,
        function (e) {
          return e.name;
        },
        i.id + ".errorObjectsSelectorByCreativeField",
      ),
      I = function (t) {
        return r("adsCreateSelector")(
          [
            r("adsUEditorAdObjectsForSelectedAdgroupsSelector"),
            r("adsUEditorAdgroupErrorMessageSpecsForSelectedAdgroupsSelector"),
            o("AdsUEditorAdgroupErrorSelectors")
              .allErrorsForSelectedAdgroupsSelector,
          ],
          o("AdsUEditorSelectorUtils").memoizeBulkAggregation(
            function (e, n, a) {
              var i = L(e);
              return n.map(function (e) {
                var n = e.adgroupID,
                  l = e.errorSpec,
                  s = i.get(n);
                s || u(0, 661);
                var c = E(s, t),
                  d = c && r("getByPath")(l, c),
                  m = {},
                  p = {},
                  _ = {};
                return (
                  a.map(function (e) {
                    if (
                      e.path &&
                      c &&
                      r("arrayContainsArray")(e.path, c) &&
                      d
                    ) {
                      var t = e.path
                        ? o("PathArrayIndex")
                            .unwrapPathArrayIndex(e.path)
                            .find(Number)
                        : 0;
                      ((t = t ? Number(t) : 0),
                        e.level === "warn"
                          ? (m[t] = typeof d == "string" ? d : d[t])
                          : ((p[t] = d[t]),
                            _[t] === void 0 && (_[t] = []),
                            _[t].push({ error: e })));
                    }
                  }),
                  { errors: m, warnings: p, warningObjects: _ }
                );
              });
            },
          ),
          { name: i.id },
        );
      },
      T = c(
        I,
        function (e) {
          return e.name;
        },
        i.id + ".errorWarningMessageSelectorByCreativeField",
      ),
      D = function (t) {
        return r("adsCreateSelector")(
          [
            r("adsUEditorAdObjectsAdgroupErrorsSelector"),
            r("adsUEditorAdgroupSelectedChildAttachmentIndexSelector"),
          ],
          function (n, a) {
            var e = [],
              i = function () {
                var n = u.adObjects,
                  i = u.errors,
                  l = o(
                    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
                  ).getAdgroupSpecPathPlugin(n),
                  c = t.get(n.adgroup, l, a);
                if (!c.supported)
                  return {
                    v: o("Result").withError(
                      s._(
                        2016062,
                        function (e) {
                          return e._(
                            /*BTDS*/ "One or more selected ads have incompatible carousel cards.",
                          );
                        },
                        function (e, t) {
                          return e._(
                            /*BTDS*/ "Field {field} on card index {cardIndex} is not supported by selected ads.",
                            [
                              e._param("field", t.field),
                              e._param("cardIndex", t.cardIndex),
                            ],
                          );
                        },
                        { field: t.name, cardIndex: a },
                      ),
                    ),
                  };
                e.push.apply(
                  e,
                  i.filter(function (e) {
                    return (
                      e.level === "warn" &&
                      e.path &&
                      r("shallowArrayEqual")(e.path, c.path)
                    );
                  }),
                );
              },
              l;
            for (var u of n) if (((l = i()), l)) return l.v;
            var c = e.map(function (e) {
              return e.message;
            });
            return o("Result").withSuccess(o("AdsBulkValueUtils").aggregate(c));
          },
          { name: i.id },
        );
      },
      x = c(
        D,
        function (e) {
          return e.name;
        },
        i.id + ".errorMessageSelectorByChildAttachmentsField",
      ),
      $ = function (t, n) {
        return (
          n === void 0 && (n = [r("AdsError").Level.WARN]),
          r("adsCreateSelector")(
            [
              r("adsUEditorAdObjectsAdgroupErrorsSelector"),
              r("adsUEditorAdgroupSelectedChildAttachmentIndexSelector"),
            ],
            function (a, i) {
              var e = [],
                l = function () {
                  var a = c.adObjects,
                    l = c.errors,
                    u = o(
                      "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
                    ).getAdgroupSpecPathPlugin(a),
                    d = t.get(a.adgroup, u, i);
                  if (!d.supported)
                    return {
                      v: o("Result").withError(
                        s._(
                          2016062,
                          function (e) {
                            return e._(
                              /*BTDS*/ "One or more selected ads have incompatible carousel cards.",
                            );
                          },
                          function (e, t) {
                            return e._(
                              /*BTDS*/ "Field {field} on card index {cardIndex} is not supported by selected ads.",
                              [
                                e._param("field", t.field),
                                e._param("cardIndex", t.cardIndex),
                              ],
                            );
                          },
                          { field: t.name, cardIndex: i },
                        ),
                      ),
                    };
                  e.push.apply(
                    e,
                    l.filter(function (e) {
                      return (
                        e.level != null &&
                        n.includes(e.level) &&
                        e.path &&
                        r("shallowArrayEqual")(e.path, d.path)
                      );
                    }),
                  );
                },
                u;
              for (var c of a) if (((u = l()), u)) return u.v;
              return o("Result").withSuccess(
                o("AdsBulkValueUtils").aggregate(e),
              );
            },
            { name: i.id },
          )
        );
      },
      P = c(
        $,
        function (e) {
          return e.name;
        },
        i.id + ".errorObjectSelectorByChildAttachmentsField",
      ),
      N = function (t) {
        return r("adsCreateSelector")(
          [r("adsUEditorAdObjectsForSelectedAdgroupsSelector")],
          o("AdsUEditorSelectorUtils").memoizeBulkAggregation(function (e) {
            return e.map(function (e) {
              return t(
                e.adgroup,
                o(
                  "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
                ).getAdgroupSpecPathPlugin(e),
              );
            });
          }),
          { name: i.id },
        );
      },
      M = r("memoizeByReference")(N),
      w = function (t) {
        return r("adsCreateSelector")(
          [r("adsUEditorAdObjectsForSelectedAdgroupsSelector")],
          o("AdsUEditorSelectorUtils").memoizeBulkAggregation(function (e) {
            return e.map(function (e) {
              return t(e);
            });
          }),
          { name: i.id },
        );
      },
      A = r("memoizeByReference")(w),
      F = M(function (e) {
        var t;
        return (t = e.creative) == null ||
          (t = t.creative_sourcing_spec) == null
          ? void 0
          : t.associated_product_set_id;
      }),
      O = (d = r("adsCreateSelector"))(
        [(m = r("adsUEditorAdObjectsForSelectedAdgroupsSelector"))],
        (e = o("AdsUEditorSelectorUtils")).memoizeBulkAggregation(function (e) {
          return e.map(function (e) {
            var t = o(
              "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
            ).getAdgroupSpecPathPlugin(e);
            return o("AdsAPIAdgroupRecordUtils").getPageID(e.adgroup, t);
          });
        }),
        { name: i.id + ".pageID" },
      ),
      B = d(
        [m],
        e.memoizeBulkAggregation(function (e) {
          return e.map(function (e) {
            var t = o(
              "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
            ).getAdgroupSpecPathPlugin(e);
            return o("AdsAPIAdgroupRecordUtils").getBrandedContentPrimaryPageID(
              e.adgroup,
              t,
            );
          });
        }),
        { name: i.id + ".partnershipAdPrimaryPageID" },
      ),
      W = d(
        [m],
        e.memoizeBulkAggregation(function (e) {
          return e.map(function (e) {
            return o("AdsAPIAdgroupRecordUtils").getSponsorBoostSponsorPageID(
              e.adgroup,
            );
          });
        }),
        { name: i.id + ".sponsorBoostSponsorPageID" },
      ),
      q = d([m], e.memoizeBulkAggregation(U), {
        name: i.id + ".brandInlineBrandedContentSponsorPageID",
      });
    function U(e) {
      return e.map(function (e) {
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.branded_content_boosting_type.get(e.adgroup) ===
          "SPONSOR_INLINE"
          ? r(
              "AdsAdgroupRecordAccessors",
            ).creative.facebook_branded_content.sponsor_page_id.get(e.adgroup)
          : null;
      });
    }
    var V = d(
        [r("adsUEditorSelectedAdgroupsSelector")],
        e.memoizeBulkAggregation(function (e) {
          return e.map(function (e) {
            return r(
              "AdsAdgroupRecordAccessors",
            ).creative.branded_content_boosting_type.get(e);
          });
        }),
        { name: i.id + ".bulkBrandedContentBoostingTypes" },
      ),
      H = d(
        [
          r("adsUEditorSelectedAdgroupIDsSelector"),
          r("adsUEditorAdgroupPublishStatusSelector"),
        ],
        e.memoizeBulkAggregation(function (e, t) {
          return o("adsUEditorAdgroupBulkSelectorsUtils").isObjectNewLogic(
            e,
            t,
          );
        }),
        { name: i.id + ".isObjectNew" },
      ),
      G = d(
        [m, r("adsUEditorAdgroupSelectedChildAttachmentIndexSelector")],
        function (t, n) {
          var e = [],
            r;
          for (var a of t) {
            if (
              ((r = o("AdsChildAttachmentsUtils").getChildAttachmentMediaFormat(
                a.adgroup,
                o(
                  "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
                ).getAdgroupSpecPathPlugin(a),
                n,
              )),
              r.success === !1)
            )
              return o("Result").withError(r.error);
            e.push(r.value);
          }
          return o("Result").withSuccess(o("AdsBulkValueUtils").aggregate(e));
        },
        { name: "childAttachmentMediaFormatSelector" },
      ),
      z = d(
        [
          r("adsUEditorAdgroupCombinedErrorsForSelectedAdgroupsSelector"),
          r("adsUEditorSelectedAdgroupsIssuesInfoSelector"),
        ],
        function (t, n) {
          return t.concat(n);
        },
        { name: i.id + ".combinedAdDraftAndIssuesInfoErrorsSelector" },
      );
    ((l.selectorByCreativeField_DEPRECATED_USE_BULKBYSEMANTICFIELD = _),
      (l.errorMessageSpecSelectorByPath = g),
      (l.errorObjectSelectorByPath = y),
      (l.errorObjectSelectorByPaths = b),
      (l.errorMessageSelectorByCreativeField = S),
      (l.errorObjectsSelectorByCreativeField = k),
      (l.errorWarningMessageSelectorByCreativeField = T),
      (l.errorMessageSelectorByChildAttachmentsField = x),
      (l.errorObjectSelectorByChildAttachmentsField = P),
      (l.selectorByAdgroupFn = M),
      (l.selectorByAdObjectsFn = A),
      (l.associatedProductSetID = F),
      (l.pageID = O),
      (l.partnershipAdPrimaryPageID = B),
      (l.sponsorBoostSponsorPageID = W),
      (l.brandInlineBrandedContentSponsorPageID = q),
      (l.brandInlineBrandedContentSponsorPageIDLogic = U),
      (l.bulkBrandedContentBoostingTypes = V),
      (l.isObjectNew = H),
      (l.childAttachmentMediaFormatSelector = G));
  },
  226,
);
