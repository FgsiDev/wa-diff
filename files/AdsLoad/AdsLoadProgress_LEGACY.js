__d(
  "AdsLoadProgress_LEGACY",
  [
    "invariant",
    "AdsLoadStateUtils_LEGACY",
    "AdsLoadState_LEGACY",
    "AdsLoadStatuses_LEGACY",
    "LoadObject",
    "err",
    "isEmpty",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e;
    function u(e) {
      return e;
    }
    var c = (function () {
      function t(e, t) {
        ((this.status = e.status),
          (this.value = e.value),
          (this.errorSpec = e.errorSpec));
      }
      var n = t.prototype;
      return (
        (n.getStatus = function () {
          return this.status;
        }),
        (n.getValue = function () {
          return this.value;
        }),
        (n.getError = function () {
          return this.errorSpec;
        }),
        (n.defined = function () {
          return this.getValue();
        }),
        (n.equals = function (t) {
          return (
            this.getStatus() === t.getStatus() &&
            Object.is(this.getValue(), t.getValue())
          );
        }),
        (n.flatMap = function (t) {
          return this.getStatus() === r("AdsLoadState_LEGACY").LOADED
            ? t(this.defined())
            : this;
        }),
        (n.isError = function () {
          return this.getStatus() === r("AdsLoadState_LEGACY").ERROR;
        }),
        (n.isLoaded = function () {
          return this.getStatus() === r("AdsLoadState_LEGACY").LOADED;
        }),
        (n.isLoading = function () {
          return this.getStatus() === r("AdsLoadState_LEGACY").LOADING;
        }),
        (n.isNotLoaded = function () {
          return this.getStatus() === r("AdsLoadState_LEGACY").NOT_LOADED;
        }),
        (n.orElse = function (t) {
          return this.getStatus() === r("AdsLoadState_LEGACY").LOADED
            ? this.defined()
            : t();
        }),
        (n.orNull = function () {
          return this.getStatus() === r("AdsLoadState_LEGACY").LOADED
            ? this.defined()
            : null;
        }),
        (n.orUndefined = function () {
          return this.getStatus() === r("AdsLoadState_LEGACY").LOADED
            ? this.defined()
            : void 0;
        }),
        (n.isLoadedAnd = function (t) {
          return (
            this.getStatus() === r("AdsLoadState_LEGACY").LOADED &&
            t(this.defined())
          );
        }),
        (n.map = function (n) {
          var e = this.value;
          return this.status === r("AdsLoadState_LEGACY").LOADED
            ? t.loaded(n(e))
            : this;
        }),
        (t.apply = function (n) {
          var e = n.status,
            r = n.value;
          return t.create(e, r);
        }),
        (t.create = function (n, o, a) {
          switch (n) {
            case r("AdsLoadState_LEGACY").NOT_LOADED:
              return t.notLoaded;
            case r("AdsLoadState_LEGACY").LOADING:
              return t.loading;
            case r("AdsLoadState_LEGACY").ERROR:
              return a
                ? new t({ status: n, errorSpec: a }, "secretKey")
                : t.error;
            case r("AdsLoadState_LEGACY").LOADED:
              return new t({ status: n, value: o }, "secretKey");
            default:
              s(0, 2284, n);
          }
        }),
        (t.loaded = function (n) {
          return new t(
            { status: r("AdsLoadState_LEGACY").LOADED, value: n },
            "secretKey",
          );
        }),
        (t.isLike = function (t) {
          return (
            typeof t == "object" &&
            t !== null &&
            typeof t.getStatus == "function" &&
            typeof t.getValue == "function"
          );
        }),
        (t.map = function (t, n) {
          return t.map(n);
        }),
        (t.map2 = function (n, a, i) {
          var e = o("AdsLoadStatuses_LEGACY").min(
            [n, a].map(function (e) {
              return e.getStatus();
            }),
          );
          return t.create(
            e,
            e === r("AdsLoadState_LEGACY").LOADED
              ? i(n.defined(), a.defined())
              : null,
          );
        }),
        (t.mapa = function (n, a) {
          r("vulture")("jYalJrm9DXuMDYqnGDLpcMONn5I=");
          var e = o("AdsLoadStatuses_LEGACY").min(
            n.map(function (e) {
              return e.getStatus();
            }),
          );
          return e === r("AdsLoadState_LEGACY").LOADED
            ? t.loaded(
                a.apply(
                  null,
                  n.map(function (e) {
                    return e.defined();
                  }),
                ),
              )
            : t.create(e);
        }),
        (t.mapva = function (n) {
          for (
            var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), o = 1;
            o < e;
            o++
          )
            r[o - 1] = arguments[o];
          return t.mapa(r, n);
        }),
        (t.all = function (n) {
          var e = r("AdsLoadState_LEGACY").LOADED,
            a;
          for (a of n)
            if (
              ((e = o("AdsLoadStatuses_LEGACY").min([e, a.getStatus()])),
              e === r("AdsLoadState_LEGACY").NOT_LOADED)
            )
              break;
          if (e === r("AdsLoadState_LEGACY").LOADED) {
            var i = [];
            for (a of n) i.push(a.value);
            return t.loaded(i);
          } else return t.create(e);
        }),
        (t.allObject = function (n) {
          var e,
            a = r("AdsLoadState_LEGACY").LOADED;
          for (e in n)
            if (
              ((a = o("AdsLoadStatuses_LEGACY").min([a, n[e].getStatus()])),
              a === r("AdsLoadState_LEGACY").NOT_LOADED)
            )
              break;
          if (a === r("AdsLoadState_LEGACY").LOADED) {
            var i = {};
            for (e in n) i[e] = n[e].value;
            return t.loaded(i);
          } else return t.create(a);
        }),
        (t.sequenceObject = function (n) {
          return t.allObject(n);
        }),
        (t.toLoadObject = function (n) {
          var t = !(e || (e = r("isEmpty")))(n.getValue());
          switch (n.getStatus()) {
            case r("AdsLoadState_LEGACY").ERROR:
              return r("LoadObject")
                .empty({ creatorModuleID: i.id })
                .setError(n.errorSpec || r("err")());
            case r("AdsLoadState_LEGACY").LOADED:
              return r("LoadObject").withValue(n.getValue(), {
                creatorModuleID: i.id,
              });
            case r("AdsLoadState_LEGACY").LOADING:
              return t
                ? r("LoadObject")
                    .loading({ creatorModuleID: i.id })
                    .setValue(n.getValue())
                : r("LoadObject").loading({ creatorModuleID: i.id });
            case r("AdsLoadState_LEGACY").NOT_LOADED:
              return r("LoadObject").empty({ creatorModuleID: i.id });
            case r("AdsLoadState_LEGACY").PENDING_WRITE:
              return t
                ? r("LoadObject")
                    .updating({ creatorModuleID: i.id })
                    .setValue(n.getValue())
                : r("LoadObject").updating({ creatorModuleID: i.id });
            default:
              return s(!1, "Invalid load state");
          }
        }),
        (t.fromLoadObject = function (n) {
          return t.create(
            o("AdsLoadStateUtils_LEGACY").getLoadStateForLoadObject(n),
            n.getValue(),
            n.getError(),
          );
        }),
        t
      );
    })();
    ((c.error = new c({ status: r("AdsLoadState_LEGACY").ERROR }, "secretKey")),
      (c.loading = new c(
        { status: r("AdsLoadState_LEGACY").LOADING },
        "secretKey",
      )),
      (c.notLoaded = new c(
        { status: r("AdsLoadState_LEGACY").NOT_LOADED },
        "secretKey",
      )),
      (l.default = c));
  },
  98,
);
