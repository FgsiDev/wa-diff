__d(
  "AdsInterfacesBaseBulkStore",
  [
    "AdsBaseBulkStore",
    "AdsBulkValueUtils",
    "AdsEditorSelectedIDsSelector",
    "abstractMethod",
    "adsCreateStoreSelector",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, o = new Array(n), a = 0; a < n; a++)
          o[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(o)) || this),
          (t.getBulkSpec = r("adsCreateStoreSelector")(
            [babelHelpers.assertThisInitialized(t)],
            function () {
              return t.get("currentAPISpec").bulkSpec;
            },
            { name: i.id },
          )),
          (t.getDerivedBulkSpec = r("adsCreateStoreSelector")(
            [babelHelpers.assertThisInitialized(t)],
            function () {
              return t.get("derivedSpec").bulkSpec;
            },
            { name: i.id },
          )),
          (t.getDerivedRawSpecs = r("adsCreateStoreSelector")(
            [babelHelpers.assertThisInitialized(t)],
            function () {
              return t.get("derivedSpec").filteredValues;
            },
            { name: i.id },
          )),
          (t.getOriginalBulkSpec = r("adsCreateStoreSelector")(
            [babelHelpers.assertThisInitialized(t)],
            function () {
              return t.get("originalAPISpec").bulkSpec;
            },
            { name: i.id },
          )),
          (t.getRawSpecs = r("adsCreateStoreSelector")(
            [babelHelpers.assertThisInitialized(t)],
            function () {
              return t.get("currentAPISpec").filteredValues;
            },
            { name: i.id },
          )),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.anyLoading = function () {
          return o("AdsBulkValueUtils").getUniformValueOrDefault(
            this.get("isLoading").bulkSpec,
            !0,
          );
        }),
        (n.getAnyDirty = function () {
          return o("AdsBulkValueUtils").getUniformValueOrDefault(
            this.get("isDirty").bulkSpec,
            !0,
          );
        }),
        (n.getChangedIDs = function () {
          return this.get("changedIDs").bulkSpec;
        }),
        (n.getCount = function () {
          return this.getRawSpecs().length;
        }),
        (n.getLoadErrors = function () {
          return this.get("loadError").filteredValues;
        }),
        (n.getMap = function () {
          return this.get("currentAPISpecMap").bulkSpec;
        }),
        (n.$AdsInterfacesBaseBulkStore$p_1 = function () {
          var e = this,
            t;
          return {
            changedIDs: {
              getOne: function (n) {
                return e.__getEditStatusStore().hasDraft(n) ? n : null;
              },
              filter: function (t) {
                return t;
              },
              aggregate: function (t) {
                return r("immutable").OrderedSet(t);
              },
            },
            changedAPISpec: {
              getOne: function (n) {
                return e.__getEditStatusStore().hasDraft(n)
                  ? e.__getBasicDataStore().getObject(n).getValue()
                  : null;
              },
              filter: function (t) {
                return !!t;
              },
              aggregate: (t = o("AdsBulkValueUtils")).createDeepAggregator(
                this.__getBasicSchema(),
              ),
            },
            currentAPISpec: {
              getOne: function (n) {
                return e.__getBasicDataStore().getObject(n).getValue();
              },
              filter: function (t) {
                return !!t;
              },
              aggregate: t.createDeepAggregator(this.__getBasicSchema()),
            },
            currentAPISpecMap: {
              getOne: function (n) {
                return e.__getBasicDataStore().getObject(n).getValue();
              },
              filter: function (t) {
                return !!t;
              },
              aggregate: function (t) {
                return r("immutable").Map(
                  t.map(function (e) {
                    return [e.id, e];
                  }),
                );
              },
            },
            derivedSpec: {
              getOne: function (n) {
                return e.__getDerivedSelector()(n).getValue();
              },
              filter: function (t) {
                return !!t;
              },
              aggregate: t.createDeepAggregator(this.__getDerivedSchema()),
            },
            isDirty: {
              getOne: function (n) {
                return e.__getEditStatusStore().getState().dirtyIDs.has(n);
              },
              aggregate: t.createAggregator(),
            },
            isLoading: {
              getOne: function (n) {
                var t = e.__getBasicDataStore().getObject(n);
                return !t.isDone() || !t.hasValue();
              },
              aggregate: t.createAggregator(),
            },
            isNew: {
              getOne: function (n) {
                return e.__getEditStatusStore().isNew(n);
              },
              aggregate: t.createAggregator(),
            },
            loadError: {
              getOne: function (n) {
                return e.__getBasicDataStore().getObject(n).getError();
              },
              filter: function (t) {
                return !!t;
              },
              aggregate: t.createAggregator(),
            },
            originalAPISpec: {
              getOne: function (n) {
                return e.__getOriginalSelector()(n).getValue();
              },
              filter: function (t) {
                return t != null;
              },
              aggregate: t.createDeepAggregator(this.__getBasicSchema()),
            },
            selectedIDs: {
              getOne: function (t) {
                return t;
              },
              aggregate: function (t) {
                return r("immutable").OrderedSet(t);
              },
            },
          };
        }),
        (n.$AdsInterfacesBaseBulkStore$p_2 = function () {
          return []
            .concat(
              o(
                "AdsEditorSelectedIDsSelector",
              ).AdsEditorSelectedIDsSelector.getStores(),
              [this.__getBasicDataStore()],
              this.__getDerivedSelector().getStores(),
              [this.__getEditStatusStore()],
              this.__getOriginalSelector().getStores(),
            )
            .filter(Boolean);
        }),
        (n.__getConfigs = function () {
          return babelHelpers.extends(
            {},
            this.$AdsInterfacesBaseBulkStore$p_1(),
            this.__getCustomConfigs(),
          );
        }),
        (n.__getStores = function () {
          return [].concat(
            this.$AdsInterfacesBaseBulkStore$p_2(),
            this.__getCustomStores(),
          );
        }),
        (n.__getBasicDataStore = function () {
          return r("abstractMethod")(
            this.constructor.name,
            "__getBasicDataStore",
          );
        }),
        (n.__getBasicSchema = function () {
          return r("abstractMethod")(this.constructor.name, "__getBasicSchema");
        }),
        (n.__getCustomConfigs = function () {
          return {};
        }),
        (n.__getCustomStores = function () {
          return [];
        }),
        (n.__getDerivedSchema = function () {
          return r("abstractMethod")(
            this.constructor.name,
            "__getDerivedSchema",
          );
        }),
        (n.__getDerivedSelector = function () {
          return r("abstractMethod")(
            this.constructor.name,
            "__getDerivedSelector",
          );
        }),
        (n.__getEditStatusStore = function () {
          return r("abstractMethod")(
            this.constructor.name,
            "__getEditStatusStore",
          );
        }),
        (n.__getOriginalSelector = function () {
          return r("abstractMethod")(
            this.constructor.name,
            "__getOriginalSelector",
          );
        }),
        t
      );
    })(r("AdsBaseBulkStore"));
    l.default = e;
  },
  98,
);
