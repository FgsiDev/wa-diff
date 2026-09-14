__d(
  "AdsPEImportStore",
  [
    "errorCode",
    "fbt",
    "AdsBulkUploadImages",
    "AdsDataAtom",
    "AdsDraftSelectionStore",
    "AdsManagerErrorUtils",
    "AdsPEImportCriticalError",
    "AdsPEImportDataManager",
    "AdsPEImportExportFormatParser",
    "AdsPEImportStoreProgressState",
    "AdsPEImportVideoStore",
    "AdsPEServerImportActions",
    "FluxReduceStore",
    "Promise",
    "QuickPerformanceLogger",
    "clearTimeout",
    "getErrorSafe",
    "guid",
    "immutable",
    "qpl",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c,
      d,
      m,
      p = [],
      _ = 12e4,
      f = "pasted.csv",
      g = {
        adImportSessionID: "",
        progress: o(
          "AdsPEImportStoreProgressState",
        ).createAdsPEImportStoreProgressState(),
        dialogOpen: !1,
        everstoreHandle: null,
        filename: "",
        fileMimeType: "",
        pastedText: "",
        showPasteText: !1,
        selectSheetDialogOpen: !1,
        token: r("guid")(),
        accountID: "",
        draftID: null,
        selectedSheet: null,
        headers: [],
        failedImportType: null,
        campaignGroupErrors: (m = r("immutable")).List(),
        campaignErrors: m.List(),
        adgroupErrors: m.List(),
        imageErrors: m.List(),
        videoErrors: m.List(),
        otherErrors: m.List(),
      },
      h = m.Record(g),
      y = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getInitialState = function () {
            return h();
          }),
          (n.reduce = function (t, n) {
            var e = n.action;
            if (e instanceof o("AdsPEServerImportActions").ImportAction) {
              if (
                e instanceof
                o("AdsPEServerImportActions").OpenDialogWithPastedText
              )
                return v(t, e);
              if (e instanceof o("AdsPEServerImportActions").OpenDialog)
                return b(e);
              if (e instanceof o("AdsPEServerImportActions").CloseDialog)
                return L(t, e);
              if (e instanceof o("AdsPEServerImportActions").PastedText)
                return S(t, e);
              if (
                e instanceof o("AdsPEServerImportActions").ToggleShowPasteText
              )
                return R(t, e);
              if (e instanceof o("AdsPEServerImportActions").SheetSelect)
                return W(t, e);
              var r = E(t, e);
              if (r != null) return r;
              var a = k(t, e);
              if (a != null) return a;
              var i = I(t, e);
              if (i != null) return i;
              var l = T(t, e);
              if (l != null) return l;
              var s = D(t, e);
              if (s != null) return s;
              var u = x(t, e);
              if (u != null) return u;
            }
            return t;
          }),
          (n.getSheets = function () {
            var e = this.getState();
            return e.progress.excelUploadSpec.loadObject.hasValue()
              ? e.progress.excelUploadSpec.loadObject.getValueEnforcing().sheets
              : p;
          }),
          t
        );
      })(r("FluxReduceStore"));
    y.__moduleID = i.id;
    function C(t, a, i, l) {
      return new (d || (d = n("Promise")))(function (n, s) {
        var u = r("immutable").Map(
            t.map(function (e) {
              return [e, !1];
            }),
          ),
          c = l !== void 0 && l > 0 ? l : _,
          d = r("setTimeout")(function () {
            ((e || (e = r("AdsDataAtom"))).unregister(m), s(null));
          }, c),
          m = (e || (e = r("AdsDataAtom"))).register(function (l) {
            var c = l.action;
            ((e || (e = r("AdsDataAtom"))).waitFor([de.getDispatchToken()]),
              c instanceof
                o("AdsPEServerImportActions").ImportCompletedAction &&
                c.token === i &&
                t.has(c.constructor) &&
                ((u = u.set(c.constructor, !0)),
                u.every(function (e) {
                  return e;
                }) &&
                  ((e || (e = r("AdsDataAtom"))).unregister(m),
                  r("clearTimeout")(d),
                  n(de.getState()))),
              c instanceof o("AdsPEServerImportActions").ImportErroredAction &&
                c.token === i &&
                a.has(c.constructor) &&
                ((e || (e = r("AdsDataAtom"))).unregister(m),
                r("clearTimeout")(d),
                s(c.error)));
          });
      });
    }
    function b(e) {
      return h({ dialogOpen: !0, accountID: e.accountID, token: r("guid")() });
    }
    function v(e, t) {
      return h({
        dialogOpen: !0,
        accountID: t.accountID,
        token: r("guid")(),
        pastedText: t.pastedText,
        showPasteText: !0,
      });
    }
    function S(e, t) {
      return e.set("pastedText", t.pastedText);
    }
    function R(e, t) {
      return e.update("showPasteText", function (e) {
        return !e;
      });
    }
    function L(e, t) {
      (o("AdsPEImportStoreProgressState")
        .toTypedSeq(e.progress)
        .forEach(function (e, t) {
          e.request && e.request.abandon();
        }),
        r("AdsPEImportVideoStore").clearVideoProgressInterval(),
        r("AdsPEImportVideoStore").cancelBulkVideoUpload());
      var n = function (n) {
        return t.shouldResetProgressState
          ? n.update("progress", function (e) {
              return o(
                "AdsPEImportStoreProgressState",
              ).createAdsPEImportStoreProgressState();
            })
          : n;
      };
      return n(e.set("dialogOpen", !1));
    }
    function E(e, t) {
      return t instanceof o("AdsPEServerImportActions").ImageUploadProgressed
        ? A(e, t)
        : t instanceof o("AdsPEServerImportActions").ImageUploadErrored
          ? F(e, t)
          : t instanceof o("AdsPEServerImportActions").ImageUploaded
            ? O(e, t)
            : t instanceof o("AdsPEServerImportActions").ImageUploadCompleted
              ? B(e)
              : null;
    }
    function k(e, t) {
      return t instanceof o("AdsPEServerImportActions").VideoUploadProgressed
        ? H(e, t)
        : t instanceof o("AdsPEServerImportActions").VideoUploadErrored
          ? G(e, t)
          : t instanceof o("AdsPEServerImportActions").VideoUploaded
            ? z(e, t)
            : t instanceof o("AdsPEServerImportActions").VideoUploadCompleted
              ? j(e)
              : null;
    }
    function I(e, t) {
      return t instanceof o("AdsPEServerImportActions").TextFileReadProgressed
        ? K(e, t)
        : t instanceof o("AdsPEServerImportActions").TextFileReadErrored
          ? Q(e, t)
          : t instanceof o("AdsPEServerImportActions").TextFileReadCompleted
            ? X(e, t)
            : null;
    }
    function T(e, t) {
      return t instanceof o("AdsPEServerImportActions").ExcelUploadProgressed
        ? Y(e, t)
        : t instanceof o("AdsPEServerImportActions").ExcelUploadErrored
          ? J(e, t)
          : t instanceof o("AdsPEServerImportActions").ExcelUploadCompleted
            ? Z(e, t)
            : null;
    }
    function D(e, t) {
      return t instanceof o("AdsPEServerImportActions").ParseProgressed
        ? ee(e, t)
        : t instanceof o("AdsPEServerImportActions").ParseErrored
          ? te(e, t)
          : t instanceof
              o("AdsPEServerImportActions").ParseCompletedWithoutError
            ? re(e, t)
            : t instanceof o("AdsPEServerImportActions").ParseCompletedWithError
              ? ne(e, t)
              : null;
    }
    function x(e, t) {
      return t instanceof
        o("AdsPEServerImportActions").StartImportFromPastedText
        ? $(e, t)
        : t instanceof o("AdsPEServerImportActions").StartImportFromFile
          ? P(e, t)
          : t instanceof o("AdsPEServerImportActions").StartTSVParse
            ? se(e, t)
            : t instanceof o("AdsPEServerImportActions").StartExcelParse
              ? le(e, t)
              : t instanceof o("AdsPEServerImportActions").OpenSelectSheetDialog
                ? ue(e)
                : t instanceof o("AdsPEServerImportActions").AsyncParseJobStart
                  ? ie(e, t)
                  : t instanceof
                      o("AdsPEServerImportActions").FragmentCreationProgressed
                    ? oe(e, t)
                    : t instanceof
                        o("AdsPEServerImportActions").FragmentCreationCompleted
                      ? ae(e, t)
                      : null;
    }
    function $(e, t) {
      ((c || (c = r("QuickPerformanceLogger"))).markerStart(
        r("qpl")._(41484298, "3579"),
      ),
        c.markerAnnotate(r("qpl")._(41484298, "3579"), {
          string: { import_source: "pasted_text" },
        }));
      var n = [],
        a = [],
        i = e;
      return (
        (i = i
          .merge({ filename: f, everstoreHandle: null })
          .updateIn(["progress", "tsvText"], function (e) {
            return e.withMutations(function (e) {
              (e.set("progress", 1),
                e.update("loadObject", function (e) {
                  return e.done().setValue(t.pastedText);
                }));
            });
          })),
        (i = i.update("progress", function (e) {
          return e.update("parseSpec", function (e) {
            return e.update("loadObject", function (e) {
              return e.loading();
            });
          });
        })),
        (i = i.update("progress", function (e) {
          return e.update("draftImport", function (e) {
            return e.update("loadObject", function (e) {
              return e.loading();
            });
          });
        })),
        (i = w(i, t)),
        M(i, t),
        (i = V(i, t)),
        t.images.length > 0
          ? (n.push(o("AdsPEServerImportActions").ImageUploadCompleted),
            C(r("immutable").Set(n), r("immutable").Set(a), i.token).then(
              function () {
                q(i, t, function () {
                  o("AdsPEServerImportActions").dispatch(
                    new (o("AdsPEServerImportActions").StartTSVParse)(),
                  );
                });
              },
              function () {},
            ))
          : t.videos.length === 0
            ? o("AdsPEServerImportActions").dispatchAfterCurrentCycle(
                new (o("AdsPEServerImportActions").StartTSVParse)(),
              )
            : q(i, t, function () {
                o("AdsPEServerImportActions").dispatch(
                  new (o("AdsPEServerImportActions").StartTSVParse)(),
                );
              }),
        i
      );
    }
    function P(e, t) {
      ((c || (c = r("QuickPerformanceLogger"))).markerStart(
        r("qpl")._(41484298, "3579"),
      ),
        c.markerAnnotate(r("qpl")._(41484298, "3579"), {
          string: { import_source: "file" },
        }));
      var n = [],
        a = [],
        i = e;
      ((i = i.updateIn(["progress", "parseSpec", "loadObject"], function (e) {
        return e.loading();
      })),
        (i = i.merge({
          filename: t.file.name,
          fileMimeType: t.file.type,
          everstoreHandle: null,
        })),
        (i = i.update("progress", function (e) {
          return e.update("draftImport", function (e) {
            return e.update("loadObject", function (e) {
              return e.loading();
            });
          });
        })),
        (i = w(i, t)));
      var l = o("AdsPEImportExportFormatParser").isPossibleExcel(t.file);
      return (
        l ||
          (M(i, t),
          t.images.length > 0 &&
            n.push(o("AdsPEServerImportActions").ImageUploadCompleted)),
        (i = V(i, t)),
        l
          ? (o("AdsPEImportDataManager").uploadExcel(i.token, t.file),
            (i = i.update("progress", function (e) {
              return e.update("excelUploadSpec", function (e) {
                return e.update("loadObject", function (e) {
                  return e.loading();
                });
              });
            })),
            n.push(o("AdsPEServerImportActions").ExcelUploadCompleted),
            a.push(o("AdsPEServerImportActions").ExcelUploadErrored),
            C(r("immutable").Set(n), r("immutable").Set(a), i.token).then(
              function (e) {
                var n =
                  e.progress.excelUploadSpec.loadObject.getValueEnforcing();
                n.sheets.length > 1
                  ? o("AdsPEServerImportActions").dispatch(
                      new (o(
                        "AdsPEServerImportActions",
                      ).OpenSelectSheetDialog)(),
                    )
                  : o("AdsPEServerImportActions").dispatch(
                      new (o("AdsPEServerImportActions").SheetSelect)(
                        n.sheets[0],
                        t.images,
                        t.videos,
                      ),
                    );
              },
              function () {},
            ))
          : ((i = N(i, t.file, "UTF-8")),
            n.push(o("AdsPEServerImportActions").TextFileReadCompleted),
            a.push(o("AdsPEServerImportActions").TextFileReadErrored),
            C(r("immutable").Set(n), r("immutable").Set(a), i.token).then(
              function (e) {
                q(e, t, function () {
                  o("AdsPEServerImportActions").dispatch(
                    new (o("AdsPEServerImportActions").StartTSVParse)(),
                  );
                });
              },
              function () {},
            )),
        i
      );
    }
    function N(e, t, n) {
      var a = e;
      a = a.update("progress", function (e) {
        return e.update("tsvText", function (e) {
          return e.update("loadObject", function (e) {
            return e.loading();
          });
        });
      });
      var i = new FileReader();
      return (
        (i.onprogress = function (e) {
          e.lengthComputable &&
            o("AdsPEServerImportActions").dispatch(
              new (o("AdsPEServerImportActions").TextFileReadProgressed)(
                e.loaded / e.total,
              ),
            );
        }),
        (i.onload = function () {
          if (typeof i.result == "string") {
            var e = i.result;
            if (n === "UTF-8" && e.charCodeAt(0) === 65533) {
              N(a, t, "CP-1252");
              return;
            }
            var l = e;
            if (o("AdsPEImportExportFormatParser").isPossibleCSV(t)) {
              o("AdsPEServerImportActions").dispatch(
                new (o(
                  "AdsPEServerImportActions",
                ).TextFileConvertToTSVStarted)(),
              );
              try {
                ((l = o("AdsPEImportExportFormatParser").fromCSVToTSV(l)),
                  o("AdsPEServerImportActions").dispatch(
                    new (o(
                      "AdsPEServerImportActions",
                    ).TextFileConvertToTSVCompleted)(a.token),
                  ));
              } catch (e) {
                o("AdsPEServerImportActions").dispatch(
                  new (o("AdsPEServerImportActions").TextFileConvertToTSVError)(
                    r("getErrorSafe")(e).message + " - fileType: " + t.type,
                  ),
                );
              }
            }
            o("AdsPEServerImportActions").dispatch(
              new (o("AdsPEServerImportActions").TextFileReadCompleted)(
                a.token,
                l,
              ),
            );
          }
        }),
        (i.onerror = function (e) {
          o("AdsPEServerImportActions").dispatch(
            new (o("AdsPEServerImportActions").TextFileReadErrored)(
              a.token,
              new (r("AdsPEImportCriticalError"))(
                1792008,
                u._(/*BTDS*/ "Error reading text file '{filename}'", [
                  u._param("filename", t.name),
                ]),
                r("getErrorSafe")(i.error).message,
                !1,
                "",
                ["fake_mid_error_reading_file"],
              ),
            ),
          );
        }),
        i.readAsText(t, n),
        a
      );
    }
    function M(e, t) {
      if (t.images.length !== 0) {
        var n = new (r("AdsBulkUploadImages"))(e.accountID);
        (n.addListener("progress", function (e) {
          var t = e.completed,
            n = e.total;
          o("AdsPEServerImportActions").dispatch(
            new (o("AdsPEServerImportActions").ImageUploadProgressed)(t / n),
          );
        }),
          n.addListener("imageUploaded", function (e) {
            return o("AdsPEServerImportActions").dispatch(
              new (o("AdsPEServerImportActions").ImageUploaded)(
                e.filename,
                e.hash,
              ),
            );
          }),
          n.addListener("fileError", function (t) {
            o("AdsPEServerImportActions").dispatch(
              new (o("AdsPEServerImportActions").ImageUploadErrored)(
                e.token,
                new (r("AdsPEImportCriticalError"))(
                  1792038,
                  u._(/*BTDS*/ "'{filename}' failed to upload", [
                    u._param("filename", t.filename),
                  ]),
                  t.errorMessage,
                  !1,
                  "",
                  o("AdsManagerErrorUtils").getOpesMIDs(t.error),
                ),
              ),
            );
          }),
          n.addListener("complete", function (t) {
            return o("AdsPEServerImportActions").dispatch(
              new (o("AdsPEServerImportActions").ImageUploadCompleted)(e.token),
            );
          }),
          n.addFiles(t.images),
          n.run());
      }
    }
    function w(e, t) {
      return t.images.length === 0
        ? e
        : e.update("progress", function (e) {
            return e.update("imageMapping", function (e) {
              return e.update("loadObject", function (e) {
                return e.loading().setValue(r("immutable").Map());
              });
            });
          });
    }
    function A(e, t) {
      return e.setIn(["progress", "imageMapping", "progress"], t.progress);
    }
    function F(e, t) {
      return e.update("imageErrors", function (e) {
        return e.push(t.error);
      });
    }
    function O(e, t) {
      return e.update("progress", function (e) {
        return e.update("imageMapping", function (e) {
          return e.update("loadObject", function (e) {
            var n = e.getValue() || r("immutable").Map();
            return e.loading().setValue(n.set(t.filename, t.hash));
          });
        });
      });
    }
    function B(e) {
      return e.updateIn(["progress", "imageMapping"], function (e) {
        return e.withMutations(function (e) {
          return e.set("progress", 1).update("loadObject", function (e) {
            return e.done();
          });
        });
      });
    }
    function W(e, t) {
      var n = e;
      return (
        (n = n.set("selectSheetDialogOpen", !1)),
        t.images.length === 0
          ? t.videos.length === 0
            ? q(n, t, function () {
                o("AdsPEServerImportActions").dispatchAfterCurrentCycle(
                  new (o("AdsPEServerImportActions").StartExcelParse)(t.sheet),
                );
              })
            : q(n, t, function () {
                o("AdsPEServerImportActions").dispatch(
                  new (o("AdsPEServerImportActions").StartExcelParse)(t.sheet),
                );
              })
          : (M(n, t),
            C(
              r("immutable").Set.of(
                o("AdsPEServerImportActions").ImageUploadCompleted,
              ),
              r("immutable").Set(),
              n.token,
            ).then(
              function (e) {
                q(e, t, function () {
                  o("AdsPEServerImportActions").dispatch(
                    new (o("AdsPEServerImportActions").StartExcelParse)(
                      t.sheet,
                    ),
                  );
                });
              },
              function () {},
            )),
        n
      );
    }
    function q(e, t, n) {
      t.videos.length === 0
        ? n()
        : (r("AdsPEImportVideoStore").startBulkVideoUpload(
            e.accountID,
            t.videos,
            e.token,
          ),
          C(
            r("immutable").Set.of(
              o("AdsPEServerImportActions").VideoUploadCompleted,
            ),
            r("immutable").Set(),
            e.token,
            U(t.videos),
          ).then(
            function (e) {
              n();
            },
            function () {},
          ));
    }
    function U(e) {
      var t = 6e5,
        n = e.length * 2 * 60 * 1e3,
        r = 1200 * 1e3;
      return (t < n && n < r ? (t = n) : n > r && (t = r), t);
    }
    function V(e, t) {
      return t.videos.length === 0
        ? e
        : e.update("progress", function (e) {
            return e.update("videoMapping", function (e) {
              return e.update("loadObject", function (e) {
                return e.loading().setValue(r("immutable").Map());
              });
            });
          });
    }
    function H(e, t) {
      return (
        t.progress === 0.5 &&
          r("AdsPEImportVideoStore").updateVideoProgressBar(),
        e.setIn(["progress", "videoMapping", "progress"], t.progress)
      );
    }
    function G(e, t) {
      return (
        t.isComplete &&
          o("AdsPEServerImportActions").dispatchAfterCurrentCycle(
            new (o("AdsPEServerImportActions").VideoUploadCompleted)(e.token),
          ),
        e.update("videoErrors", function (e) {
          return e.push(t.error);
        })
      );
    }
    function z(e, t) {
      return (
        t.isComplete &&
          o("AdsPEServerImportActions").dispatchAfterCurrentCycle(
            new (o("AdsPEServerImportActions").VideoUploadCompleted)(e.token),
          ),
        e.update("progress", function (e) {
          return e.update("videoMapping", function (e) {
            return e.update("loadObject", function (e) {
              var n = e.getValue() || r("immutable").Map();
              return e.loading().setValue(n.set(t.filename, t.id));
            });
          });
        })
      );
    }
    function j(e) {
      return (
        r("AdsPEImportVideoStore").clearVideoProgressInterval(),
        e.updateIn(["progress", "videoMapping"], function (e) {
          return e.withMutations(function (e) {
            return e.set("progress", 1).update("loadObject", function (e) {
              return e.done();
            });
          });
        })
      );
    }
    function K(e, t) {
      return e.update("progress", function (e) {
        return e.update("tsvText", function (e) {
          return e.update("progress", function (e) {
            return t.progress;
          });
        });
      });
    }
    function Q(e, t) {
      return e.update("progress", function (e) {
        return e.update("tsvText", function (e) {
          return e.update("loadObject", function (e) {
            return e.setError(t.error);
          });
        });
      });
    }
    function X(e, t) {
      return e.updateIn(["progress", "tsvText"], function (e) {
        return e.withMutations(function (e) {
          return e.set("progress", 1).update("loadObject", function (e) {
            return e.done().setValue(t.result);
          });
        });
      });
    }
    function Y(e, t) {
      return e.update("progress", function (e) {
        return e.update("excelUploadSpec", function (e) {
          return e.update("progress", function (e) {
            return t.progress;
          });
        });
      });
    }
    function J(e, t) {
      return e.update("progress", function (e) {
        return e.update("excelUploadSpec", function (e) {
          return e.update("loadObject", function (e) {
            return e.setError(t.error);
          });
        });
      });
    }
    function Z(e, t) {
      var n = e;
      return (
        (n = n
          .set("everstoreHandle", t.spec.file_handle)
          .updateIn(["progress", "excelUploadSpec"], function (e) {
            return e.withMutations(function (e) {
              (e.set("progress", 1),
                e.update("loadObject", function (e) {
                  return e.done().setValue(t.spec);
                }));
            });
          })),
        t.spec.sheets.length === 1 &&
          (n = n.set("selectedSheet", t.spec.sheets[0])),
        n
      );
    }
    function ee(e, t) {
      return e.update("progress", function (e) {
        return e.update("parseSpec", function (e) {
          return e.update("progress", function (e) {
            return t.progress;
          });
        });
      });
    }
    function te(e, t) {
      return e.update("progress", function (e) {
        return e.update("parseSpec", function (e) {
          return e.update("loadObject", function (e) {
            return e.setError(t.error);
          });
        });
      });
    }
    function ne(e, t) {
      return e.progress.parseSpec.loadObject.isDone()
        ? e
        : e
            .update("campaignGroupErrors", function (e) {
              return e.concat(t.spec.CampaignGroups.errors);
            })
            .update("campaignErrors", function (e) {
              return e.concat(t.spec.Campaigns.errors);
            })
            .update("adgroupErrors", function (e) {
              return e.concat(t.spec.Adgroups.errors);
            })
            .update("otherErrors", function (e) {
              return e.concat(t.spec.Errors);
            })
            .updateIn(["progress", "parseSpec"], function (e) {
              return e.withMutations(function (e) {
                return e.set("progress", 1).update("loadObject", function (e) {
                  return e.done().setValue(t.spec);
                });
              });
            });
    }
    function re(e, t) {
      return e.progress.parseSpec.loadObject.isDone()
        ? e
        : e.updateIn(["progress", "parseSpec"], function (e) {
            return e.withMutations(function (e) {
              return e.set("progress", 1).update("loadObject", function (e) {
                return e.done();
              });
            });
          });
    }
    function oe(e, t) {
      return e.update("progress", function (e) {
        return e.update("draftImport", function (e) {
          return e.update("progress", function (e) {
            return t.progress;
          });
        });
      });
    }
    function ae(e, t) {
      o("AdsPEImportDataManager").downloadFragments(
        e.accountID,
        e.token,
        t.draftFragmentCount,
        t.targetingSignalUpdate,
        {
          adImportSessionID: e.adImportSessionID,
          fragmentIDs: t.draftFragmentIDs,
          hasSpecErrors:
            ce(e) || (t.numCrepeErrors != null && t.numCrepeErrors > 0),
        },
      );
      var n = e
          .set("draftID", t.draftID)
          .updateIn(["progress", "draftImport"], function (e) {
            return e.withMutations(function (e) {
              return e.set("progress", 1).update("loadObject", function (e) {
                return e.done().setValue(!0);
              });
            });
          }),
        a = t.spec;
      return a != null
        ? n
            .update("campaignGroupErrors", function (e) {
              return r("immutable").List(a.CampaignGroups.errors);
            })
            .update("campaignErrors", function (e) {
              return r("immutable").List(a.Campaigns.errors);
            })
            .update("adgroupErrors", function (e) {
              return r("immutable").List(a.Adgroups.errors);
            })
            .update("otherErrors", function (e) {
              return r("immutable").List(a.Errors);
            })
        : n;
    }
    function ie(e, t) {
      return e.set("adImportSessionID", t.adImportSessionID);
    }
    function le(e, t) {
      var n = e,
        a = n.progress.excelUploadSpec.loadObject.getValueEnforcing();
      return (
        o("AdsPEImportDataManager").parseSheetReference(
          n.token,
          n.accountID,
          a.file_handle,
          t.sheet,
          n.progress.imageMapping.loadObject.getValue(),
          n.progress.videoMapping.loadObject.getValue(),
          r("AdsDraftSelectionStore").getCached(n.accountID).value,
        ),
        n
      );
    }
    function se(e, t) {
      var n = e.progress.tsvText.loadObject.getValueEnforcing();
      return (
        o("AdsPEImportDataManager").parseTSV(
          e.token,
          e.accountID,
          n,
          e.progress.imageMapping.loadObject.getValue(),
          e.progress.videoMapping.loadObject.getValue(),
          r("AdsDraftSelectionStore").getCached(e.accountID).value,
        ),
        e
      );
    }
    function ue(e) {
      return e.set("selectSheetDialogOpen", !0);
    }
    function ce(e) {
      return (
        e.campaignGroupErrors.size > 0 ||
        e.campaignErrors.size > 0 ||
        e.adgroupErrors.size > 0 ||
        e.imageErrors.size > 0 ||
        e.videoErrors.size > 0 ||
        e.otherErrors.size > 0
      );
    }
    var de = new y(e || (e = r("AdsDataAtom"))),
      me = de;
    l.default = me;
  },
  226,
);
