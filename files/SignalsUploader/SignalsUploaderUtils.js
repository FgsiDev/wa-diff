__d(
  "SignalsUploaderUtils",
  [
    "SignalsUploaderColumnMapperConstants",
    "fastDeepCopy",
    "getSignalsNormalizationErrorSummary",
    "getSignalsSchemaSummary",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 0.95,
      s = { chunkSize: 128 * 1024 };
    function u(e) {
      for (var t = {}, n = 0; n < e.length; n++) t[n] = e[n];
      return t;
    }
    function c(e, t) {
      var n = r("getSignalsSchemaSummary")(t),
        o = n.pathForSimplePropKeys,
        a = n.extraPropsCollectors[0],
        i = {};
      return (
        e.forEach(function (e, t) {
          var r;
          (typeof e == "string" &&
            (o[e]
              ? (r = o[e])
              : a != null
                ? (r = a + "." + e)
                : n.id === "subscriber_list_schema" && (r = e)),
            r && (i[t] = r));
        }),
        i
      );
    }
    function d(e) {
      if (typeof e == "number") return 8;
      if (typeof e == "boolean") return 4;
      if (typeof e == "string") {
        for (var t = 0, n = 0; n < e.length; n++) {
          var r = e.charCodeAt(n);
          r < 128
            ? (t += 1)
            : r < 2048
              ? (t += 2)
              : r < 65536
                ? (t += 3)
                : r < 2097152
                  ? (t += 4)
                  : r < 67108864
                    ? (t += 5)
                    : (t += 6);
        }
        return t;
      }
      return 1;
    }
    function m(e) {
      var t = { mappings: [], values: [] };
      if (e != null) {
        t.mappings = Object.keys(e);
        for (var n = 0; n < t.mappings.length; n++)
          t.values.push(e[t.mappings[n]]);
      }
      return t;
    }
    function p(e, t, n) {
      var o = r("fastDeepCopy")(e);
      return (
        n.forEach(function (e, n) {
          o[n + t] = e;
        }),
        o
      );
    }
    function _(e) {
      var t = e.columnStatuses,
        n = e.customTypes,
        o = e.infoForNormalization,
        a = e.mapping,
        i = e.schemaSummary,
        l = a.map(function (e, a) {
          var l = o.get(String(a)),
            s;
          if (
            t == null ||
            t.get(a) !==
              r("SignalsUploaderColumnMapperConstants").ITEM_STATUSES
                .MAPPED_WITH_ERROR
          ) {
            if (
              e ===
              r("SignalsUploaderColumnMapperConstants").CUSTOM_COLUMN_TYPE_VALUE
            ) {
              var u = n.get(String(a));
              s = u && u.key ? u.key : void 0;
            } else
              l !==
                r("SignalsUploaderColumnMapperConstants")
                  .SKIP_ADDITIONAL_INFO_VALUE &&
                l !==
                  r("SignalsUploaderColumnMapperConstants")
                    .UNDEFINED_ADDITIONAL_INFO_VALUE &&
                ((s = i.keysForSimplePropPaths[e]),
                i.id === "subscriber_list_schema" &&
                  !s &&
                  e != null &&
                  (s = e));
            return s;
          }
        }),
        s = o.reduce(function (e, t, n) {
          var o = i.keysForSimplePropPaths[a.get(Number(n))];
          return o &&
            t !==
              r("SignalsUploaderColumnMapperConstants")
                .SKIP_ADDITIONAL_INFO_VALUE &&
            t !==
              r("SignalsUploaderColumnMapperConstants")
                .UNDEFINED_ADDITIONAL_INFO_VALUE
            ? e.set(o, t)
            : e;
        }, r("immutable").Map()),
        u = r("immutable").Map(
          n.reduce(function (e, t) {
            return ((e[t.key] = t), e);
          }, {}),
        );
      return { customTypeInfos: u, infoForNormalization: s, mapping: l };
    }
    function f(t) {
      for (
        var n = t.customTypeDefintion,
          o = t.infoForNormalization,
          a = t.mapping,
          i = t.normalizationResults,
          l = t.numColumns,
          s = t.preMappedColumnMapping,
          u = t.errorThreshold != null ? t.errorThreshold : e,
          c =
            t.requireOnlyOneRightValueMappedTypes != null
              ? t.requireOnlyOneRightValueMappedTypes
              : [],
          d = a;
        d.size < l;
      )
        d = d.push(void 0);
      var m,
        p = i.size,
        _ = r("getSignalsNormalizationErrorSummary")(i.toArray());
      p > 0
        ? (m = d.map(function (e, t) {
            if (s != null && s.includes(t))
              return r("SignalsUploaderColumnMapperConstants").ITEM_STATUSES
                .PRE_MAPPED;
            if (
              e ===
              r("SignalsUploaderColumnMapperConstants").CUSTOM_COLUMN_TYPE_VALUE
            ) {
              var a = n.get(String(t));
              if (a == null || a.key == null || a.key === "")
                return r("SignalsUploaderColumnMapperConstants").ITEM_STATUSES
                  .NON_MAPPED;
            }
            var i = o.get(String(t));
            if (
              e == null ||
              i ===
                r("SignalsUploaderColumnMapperConstants")
                  .UNDEFINED_ADDITIONAL_INFO_VALUE ||
              i ===
                r("SignalsUploaderColumnMapperConstants")
                  .SKIP_ADDITIONAL_INFO_VALUE
            )
              return r("SignalsUploaderColumnMapperConstants").ITEM_STATUSES
                .NON_MAPPED;
            var l = (_.invalidColumns.get(String(t)) || { count: 0 }).count,
              d = Math.max(1, Math.round(u * p));
            return l < d || (c.indexOf(e) > -1 && l < p)
              ? r("SignalsUploaderColumnMapperConstants").ITEM_STATUSES
                  .MAPPED_RIGHT
              : r("SignalsUploaderColumnMapperConstants").ITEM_STATUSES
                  .MAPPED_WITH_ERROR;
          }))
        : (m = r("immutable").List());
      var f = 0,
        g = 0,
        h = 0;
      return (
        m.forEach(function (e) {
          ((f += +(
            e ===
            r("SignalsUploaderColumnMapperConstants").ITEM_STATUSES.MAPPED_RIGHT
          )),
            (g += +(
              e ===
              r("SignalsUploaderColumnMapperConstants").ITEM_STATUSES
                .MAPPED_WITH_ERROR
            )),
            (h += +(
              e ===
              r("SignalsUploaderColumnMapperConstants").ITEM_STATUSES.NON_MAPPED
            )));
        }),
        {
          columnStatuses: m,
          errorSummary: _,
          mappedRightColumns: f,
          mappedWithErrorColumns: g,
          mapping: d,
          nonMappedColumns: h,
          sampleNormalizationResults: i,
        }
      );
    }
    function g(e) {
      return e
        ? typeof e == "string"
          ? e
          : e.error_user_msg
            ? e.error_user_msg
            : e.message
        : null;
    }
    ((l.COLUMN_MAPPING_ERROR_THRESHOLD = e),
      (l.uploadForNumberOfLinesEstimationConfig = s),
      (l.arrayToObject = u),
      (l.getPropKeysForTypes = c),
      (l.getByteLength = d),
      (l.getPresetValueConfigFromObject = m),
      (l.getMappingWithPreset = p),
      (l.getArgumentsForNormalizationFromColumnMapping = _),
      (l.getColumnStatuses = f),
      (l.getHumanFriendlyAPIErrorMessage = g));
  },
  98,
);
