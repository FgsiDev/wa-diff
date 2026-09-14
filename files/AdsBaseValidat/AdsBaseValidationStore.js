__d(
  "AdsBaseValidationStore",
  [
    "errorCode",
    "AdDraftFragmentValidationStatus",
    "AdFLEXDraftFragmentConfig",
    "AdsAMAdvertiserFriendlyErrorsUtils",
    "AdsAbstractValidator",
    "AdsAsyncValidator",
    "AdsDataAtom",
    "AdsDraftFragmentValidationProvider",
    "AdsErrorUtils",
    "AdsInterfacesLogger",
    "AdsInterfacesLoggerUtils",
    "AdsPreemptiveErrorUtils",
    "AdsValidationConfig.experimental",
    "AdsValidationUtils",
    "BatchingQueue",
    "FBLogger",
    "FluxStore",
    "LFUCache",
    "Promise",
    "Random",
    "ReverseInteropUtil",
    "abstractMethod",
    "adsCacheFnUtils",
    "adsCreateStoreThunkSelector",
    "adsDraftGetAdsErrorFromDraftError",
    "adsReplaceDuplicatedErrors",
    "areEqual",
    "getByPath",
    "getErrorSafe",
    "immutable",
    "memoizeWithArgsByKey",
    "memoizeWithExposedCache",
    "nullthrows",
    "performanceNow",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m = r("AdsDraftFragmentValidationProvider").toFluxStore(),
      p = 250,
      _ = [],
      f = [3858274, 1885178];
    function g(e, t, n, a, i, l) {
      var s,
        u,
        c = t.filter(function (e) {
          return !f.includes(e.key);
        }),
        d = n.getValueEnforcing(),
        p = m.getState().get(d.fragmentID),
        g = (s = p == null ? void 0 : p.active_errors) != null ? s : [],
        y =
          (u = p == null ? void 0 : p.branded_content_errors) != null ? u : [],
        C = r("immutable").Set(
          y.map(function (e) {
            return e.error_code;
          }),
        ),
        b = g.filter(function (e) {
          return !C.has(e.error_code);
        }),
        v = b.concat(y),
        S = c;
      if (l !== r("AdDraftFragmentValidationStatus").NEEDS_VALIDATION) {
        var R,
          L,
          E = d.publishError;
        E == null ||
        (v != null &&
          v.some(function (e) {
            return (
              e.error_code == E.error_code &&
              e.error_description !== E.error_message
            );
          }))
          ? (L = v)
          : (L = [E]);
        var k =
            ((R = L) == null
              ? void 0
              : R.map(function (t) {
                  return r("adsDraftGetAdsErrorFromDraftError")(t, {
                    objectID: e,
                  });
                })) || [],
          I = t.filter(function (e) {
            return f.includes(e.key);
          });
        k = k.concat(I);
        var T = o("AdsValidationUtils").reconcileClientAndServerErrors(t, k, a),
          D = r("adsReplaceDuplicatedErrors")(T).visibleErrors;
        (h(D, d.fragmentID), (S = D));
      }
      var x = o("AdsAMAdvertiserFriendlyErrorsUtils").getFriendlyErrors(S, i);
      return { combinedErrors: x.length !== 0 ? x : _, validationStatus: l };
    }
    function h(e, t) {
      e.forEach(function (e) {
        return (e.fragmentID = t);
      });
    }
    var y = (function (t) {
      function a(e) {
        var n;
        return (
          (n = t.call(this, u || (u = r("AdsDataAtom"))) || this),
          (n.getCombinedErrorsFor = function (e) {
            var t = n.__getDraftFragmentStore(),
              r = t.getFragmentsInDraftFor(e);
            return r
              .map(function (e, t) {
                return n.getCombinedErrors(t);
              })
              .filter(function (e) {
                return e && e.length;
              });
          }),
          (n.getCombinedErrors = function (e) {
            return n.$AdsBaseValidationStore$p_26(e).combinedErrors;
          }),
          (n.getCombinedErrorsForSelector = r("adsCreateStoreThunkSelector")(
            n,
            n.getCombinedErrorsFor.bind(n),
          )),
          (n.getCombinedErrorsSelector = r("adsCreateStoreThunkSelector")(
            n,
            n.getCombinedErrors.bind(n),
          )),
          (n.$AdsBaseValidationStore$p_27 = function (e, t) {
            return (
              e.validationStatus ===
              r("AdDraftFragmentValidationStatus").NEEDS_VALIDATION
            );
          }),
          (n.$AdsBaseValidationStore$p_11 = function (e) {
            return r("immutable").Map(
              e.map(function (e) {
                return [e, n.$AdsBaseValidationStore$p_26(e).combinedErrors];
              }),
            );
          }),
          (n.$AdsBaseValidationStore$p_28 = function (e) {
            return r("immutable").Map(
              e.map(function (e) {
                return [e, n.$AdsBaseValidationStore$p_26(e)];
              }),
            );
          }),
          (n.$AdsBaseValidationStore$p_2 = e),
          (n.$AdsBaseValidationStore$p_3 = new Map()),
          (n.$AdsBaseValidationStore$p_4 = new Map()),
          (n.$AdsBaseValidationStore$p_5 = r("memoizeWithArgsByKey")(g)),
          (n.$AdsBaseValidationStore$p_6 = r("memoizeWithExposedCache")(
            n.$AdsBaseValidationStore$p_11,
            function () {
              return new (r("LFUCache"))();
            },
            function (e) {
              return e.join(",");
            },
          )),
          (n.$AdsBaseValidationStore$p_7 = r("immutable").Map()),
          (n.$AdsBaseValidationStore$p_8 = n.__getValidators()),
          (n.$AdsBaseValidationStore$p_9 = new Map()),
          (n.$AdsBaseValidationStore$p_10 = new Map()),
          n.$AdsBaseValidationStore$p_8.forEach(function (e) {
            var t = o("AdsValidationUtils").getValidatorPaths(e),
              r = t.fieldPaths,
              a = t.rootFields;
            n.$AdsBaseValidationStore$p_9.set(e, r);
          }),
          (n.$AdsBaseValidationStore$p_1 = new (r("BatchingQueue"))(
            n.$AdsBaseValidationStore$p_12.bind(n),
            { timeout: p },
          )),
          (n.getCombinedErrorsFor = o("adsCacheFnUtils").adsCreateMultiCachedFn(
            n.getCombinedErrorsFor.bind(n),
            [n],
          )),
          (n.getErrors = o("adsCacheFnUtils").adsCreateMultiCachedFn(
            n.getErrors.bind(n),
            [n],
          )),
          n
        );
      }
      babelHelpers.inheritsLoose(a, t);
      var i = a.prototype;
      return (
        (i.__onDispatch = function (t) {
          if (this.$AdsBaseValidationStore$p_2 != null) {
            var e = t.action;
            switch (e.type) {
              case this.$AdsBaseValidationStore$p_2:
                var n = e.asyncErrors;
                (this.$AdsBaseValidationStore$p_13(n), this.__emitChange());
                break;
            }
          }
        }),
        (i.$AdsBaseValidationStore$p_13 = function (t) {
          var e = this;
          t.forEach(function (t) {
            var n = t.id,
              o = t.validator,
              a = t.validatorErrors,
              i = r("immutable").List.of(o, n),
              l = e.$AdsBaseValidationStore$p_3.get(n);
            if (l != null && e.$AdsBaseValidationStore$p_14(n, o, l)) {
              e.$AdsBaseValidationStore$p_7 = e.$AdsBaseValidationStore$p_7.set(
                i,
                a,
              );
              var s = e.$AdsBaseValidationStore$p_15(
                e.$AdsBaseValidationStore$p_8.map(function (t) {
                  return (
                    e.$AdsBaseValidationStore$p_7.get(
                      r("immutable").List.of(t, n),
                    ) || _
                  );
                }),
              );
              e.$AdsBaseValidationStore$p_4.set(
                n,
                e.$AdsBaseValidationStore$p_16(s, {
                  fragmentID: e.$AdsBaseValidationStore$p_17(n),
                  shouldHidePreemptiveErrors: e.__shouldHidePreemptiveErrors(l),
                  objectID: n,
                }),
              );
            }
          });
        }),
        (i.$AdsBaseValidationStore$p_12 = function (t) {
          (u || (u = r("AdsDataAtom"))).handleUpdateFromViewAction({
            type: this.$AdsBaseValidationStore$p_2,
            asyncErrors: t,
          });
        }),
        (i.getErrorSpec = function (t) {
          var e = this.getAllErrors(t);
          return o("AdsErrorUtils").getErrorSpec(e);
        }),
        (i.indexErrorsByPath = function (t) {
          var e = this.getAllErrors(t);
          return o("AdsErrorUtils").indexErrorsByPath(e);
        }),
        (i.getErrors = function (t) {
          var e = this;
          if (!this.$AdsBaseValidationStore$p_18(t)) return _;
          var n = o("ReverseInteropUtil").ignore(function () {
              return e.getErrorsUnconditionally(t);
            }, "building error paths needs to be typed"),
            r = this.__getAsyncValidationProvider();
          if (r != null) {
            var a = r().get(t);
            a.forEach(function (e) {
              e.match({
                loaded: function (t) {
                  return (n = n.concat(t));
                },
                error: function () {},
                loading: function () {},
              });
            });
          }
          return n.length !== 0 ? n : _;
        }),
        (i.$AdsBaseValidationStore$p_19 = function (t) {
          this.$AdsBaseValidationStore$p_7 =
            this.$AdsBaseValidationStore$p_7.set(t, _);
        }),
        (i.$AdsBaseValidationStore$p_20 = function (t, n, r) {
          (this.$AdsBaseValidationStore$p_3.set(t, n),
            this.$AdsBaseValidationStore$p_4.set(t, r));
        }),
        (i.getErrorsUnconditionally = function (t) {
          var e = this,
            n = this.__getData(t);
          if (n == null) return _;
          var a = this.$AdsBaseValidationStore$p_3.get(t),
            i = this.$AdsBaseValidationStore$p_4.get(t);
          if (i && a && this.__areEqual(n, a)) return i;
          var l =
              o("Random").random() >=
              1 - r("AdsValidationConfig.experimental").getErrorsSamplingRate,
            s = (c || (c = r("performanceNow")))(),
            u = this.$AdsBaseValidationStore$p_8,
            d = function (i) {
              var a = r("immutable").List.of(i, t),
                l = e.$AdsBaseValidationStore$p_7.get(a),
                s = e.$AdsBaseValidationStore$p_21(n, i, t);
              if (l && s) return l;
              var u = o("AdsValidationUtils").prepareData(
                n,
                e.$AdsBaseValidationStore$p_10.get(i),
                r("nullthrows")(e.$AdsBaseValidationStore$p_9.get(i)),
              );
              return e.$AdsBaseValidationStore$p_14(t, i, u)
                ? e.$AdsBaseValidationStore$p_22(n, i, t, u, a, l)
                : (e.$AdsBaseValidationStore$p_19(a), _);
            },
            m = u.map(function (e) {
              return d(e);
            }),
            p = c();
          if (l) {
            var f;
            r("AdsInterfacesLogger").log(
              {
                eventName: "client_error_validation_complete",
                data: ((f = {}), (f.scenario_duration = p - s), f),
              },
              r("AdsInterfacesLogger").LOG_TYPE_PRIMARY_APP,
            );
          }
          var g = this.$AdsBaseValidationStore$p_16(
            this.$AdsBaseValidationStore$p_15(m),
            {
              fragmentID: this.$AdsBaseValidationStore$p_17(t),
              shouldHidePreemptiveErrors: this.__shouldHidePreemptiveErrors(n),
              objectID: t,
            },
          );
          return (this.$AdsBaseValidationStore$p_20(t, n, g), g);
        }),
        (i.$AdsBaseValidationStore$p_17 = function (t) {
          try {
            var e,
              n = this.__getDraftFragmentStore();
            return (e = n.get(t)) == null || (e = e.getValue()) == null
              ? void 0
              : e.fragmentID;
          } catch (e) {
            var o = r("getErrorSafe")(e);
            r("FBLogger")("ads").catching(o).warn(o.message);
          }
        }),
        (i.$AdsBaseValidationStore$p_16 = function (t, n) {
          var e = n.fragmentID,
            r = n.objectID,
            a = n.shouldHidePreemptiveErrors;
          h(t, e);
          var i = o("AdsAMAdvertiserFriendlyErrorsUtils").getFriendlyErrors(
            t,
            a,
          );
          return (
            i.forEach(function (e) {
              return (e.objectID = r);
            }),
            i
          );
        }),
        (i.getAllErrors = function (t) {
          var e = this;
          return this.$AdsBaseValidationStore$p_15(
            t.map(function (t) {
              return e.getErrors(t);
            }),
          );
        }),
        (i.$AdsBaseValidationStore$p_15 = function (t) {
          var e = Array.prototype.concat.apply([], t);
          return e.length === 0 ? _ : e;
        }),
        (i.$AdsBaseValidationStore$p_23 = function (t, n, r, o) {
          this.$AdsBaseValidationStore$p_21(t, r, n) &&
            this.$AdsBaseValidationStore$p_1.add({
              id: n,
              validator: r,
              validatorErrors: o,
            });
        }),
        (i.$AdsBaseValidationStore$p_21 = function (t, n, a) {
          var e = this.$AdsBaseValidationStore$p_3.get(a),
            i = r("nullthrows")(this.$AdsBaseValidationStore$p_9.get(n));
          return (
            !!e &&
            o("ReverseInteropUtil").ignore(function () {
              return i.every(function (n) {
                var o = r("getByPath")(e, n, null),
                  a = r("getByPath")(t, n, null);
                return (d || (d = r("areEqual")))(o, a);
              });
            }, "validation cache freshness needs to be typed")
          );
        }),
        (i.$AdsBaseValidationStore$p_22 = function (t, n, o, a, i, l) {
          var e = this,
            s = this.__getAsyncValidationProvider() != null;
          if (!s && n instanceof r("AdsAsyncValidator")) {
            var u = this.$AdsBaseValidationStore$p_24(n, a);
            return (
              r("promiseDone")(u, function (r) {
                e.$AdsBaseValidationStore$p_23(t, o, n, r);
              }),
              l || _
            );
          } else if (n instanceof r("AdsAbstractValidator")) {
            var c = this.$AdsBaseValidationStore$p_25(n, a);
            return (
              (this.$AdsBaseValidationStore$p_7 =
                this.$AdsBaseValidationStore$p_7.set(i, c)),
              c
            );
          }
          return _;
        }),
        (i.$AdsBaseValidationStore$p_26 = function (t) {
          var e = this.getErrors(t);
          if (!this.__shouldUseCombinedValidation())
            return { combinedErrors: e };
          var n = this.__getDraftFragmentStore(),
            a = n.get(t),
            i = n.getState().dirtyIDs.has(t),
            l = null,
            s = !1;
          if (a != null && a.hasValue()) {
            var u,
              c,
              d,
              p =
                r("AdFLEXDraftFragmentConfig") == null ||
                (u = r("AdFLEXDraftFragmentConfig").get()) == null ||
                u.isFragmentAvailableInTool == null
                  ? void 0
                  : u.isFragmentAvailableInTool(a);
            if (p === !1) return { combinedErrors: _ };
            var f = a.getValueEnforcing();
            s = o("AdsPreemptiveErrorUtils").shouldAdObjectHidePreemptiveErrors(
              f,
            );
            var g = m.getState().get(f.fragmentID);
            l = g == null ? void 0 : g.validation_status;
            var h = (c = g == null ? void 0 : g.active_errors) != null ? c : [],
              y =
                (d = g == null ? void 0 : g.branded_content_errors) != null
                  ? d
                  : [],
              C = r("immutable").Set(
                y.map(function (e) {
                  return e.error_code;
                }),
              ),
              b = h.filter(function (e) {
                return !C.has(e.error_code);
              }),
              v = b.concat(y);
            if (e.length === v.length) {
              var S = new Set();
              if (
                (v.forEach(function (e) {
                  return S.add(String(e.error_code));
                }),
                e.every(function (e) {
                  return S.has(String(e.key));
                }))
              )
                return { combinedErrors: e, validationStatus: l };
            }
          }
          return this.$AdsBaseValidationStore$p_5(t, t, e, a, i, s, l);
        }),
        (i.getAllCombinedErrors = function (t) {
          var e = this.$AdsBaseValidationStore$p_6.cache;
          if (!e.has(t.join(","))) {
            var n = this.$AdsBaseValidationStore$p_6(t);
            if (n != null) return n;
          }
          var o = this.$AdsBaseValidationStore$p_6(t),
            a = this.$AdsBaseValidationStore$p_28(t),
            i = a.filter(this.$AdsBaseValidationStore$p_27),
            l = a
              .filterNot(this.$AdsBaseValidationStore$p_27)
              .map(function (e) {
                return e.combinedErrors;
              }),
            s =
              o == null
                ? void 0
                : o.filter(function (e, t) {
                    return !i.has(t);
                  });
          if (o == null || !(d || (d = r("areEqual")))(s, l)) {
            var u = a.map(function (e) {
              return e.combinedErrors;
            });
            return (e.set(t.join(","), u), u);
          } else return o;
        }),
        (i.getAllClientErrors = function (t) {
          var e = this;
          return r("immutable").Map(
            t.map(function (t) {
              return [t, e.getErrors(t)];
            }),
          );
        }),
        (i.__getDraftFragmentStore = function () {
          return r("abstractMethod")(
            "AdsBaseValidationStore",
            "__getDraftFragmentStore",
          );
        }),
        (i.__getAsyncValidationProvider = function () {
          return null;
        }),
        (i.__getValidators = function () {
          return r("abstractMethod")(
            "AdsBaseValidationStore",
            "__getValidators",
          );
        }),
        (i.__shouldValidate = function (t) {
          return !0;
        }),
        (i.$AdsBaseValidationStore$p_18 = function (t) {
          try {
            return this.__shouldValidate(t);
          } catch (e) {
            return (
              o("AdsInterfacesLoggerUtils").logCriticalException(e, {
                error_type: "VALIDATOR",
                object_ids: [t],
                source: "_shouldValidateSafe",
              }),
              !1
            );
          }
        }),
        (i.__shouldUseCombinedValidation = function () {
          return !1;
        }),
        (i.__logShouldValidateData = function (t, n, r, o) {}),
        (i.__shouldValidateData = function (t, n, r) {
          var e = n.shouldValidate(r);
          return (this.__logShouldValidateData(t, n, r, e), e);
        }),
        (i.$AdsBaseValidationStore$p_14 = function (t, n, r) {
          try {
            return this.__shouldValidateData(t, n, r);
          } catch (e) {
            return (
              o("AdsInterfacesLoggerUtils").logCriticalException(e, {
                error_type: "VALIDATOR",
                object_ids: [t],
                payload_on_error: r,
                source: "_shouldValidateDataSafe",
              }),
              !1
            );
          }
        }),
        (i.$AdsBaseValidationStore$p_24 = function (r, a) {
          try {
            return r.validate(a);
          } catch (t) {
            return (
              o("AdsInterfacesLoggerUtils").logCriticalException(t, {
                error_type: "VALIDATOR",
                payload_on_error: a,
                source: "_validateSafeAsync",
              }),
              (e || (e = n("Promise"))).reject([])
            );
          }
        }),
        (i.$AdsBaseValidationStore$p_25 = function (t, n) {
          try {
            return t.validate(n);
          } catch (e) {
            return (
              o("AdsInterfacesLoggerUtils").logCriticalException(e, {
                error_type: "VALIDATOR",
                payload_on_error: n,
                source: "_validateSafeSync",
              }),
              _
            );
          }
        }),
        (i.__getData = function (t) {
          return r("abstractMethod")("AdsBaseValidationStore", "__getData");
        }),
        (i.__areEqual = function (t, n) {
          return !1;
        }),
        (i.__getAdsObjectType = function () {
          return r("abstractMethod")(
            "AdsBaseValidationStore",
            "__getAdsObjectType",
          );
        }),
        (i.__shouldHidePreemptiveErrors = function (t) {
          return !1;
        }),
        a
      );
    })(r("FluxStore"));
    ((y.__moduleID = i.id), (l.default = y));
  },
  98,
);
