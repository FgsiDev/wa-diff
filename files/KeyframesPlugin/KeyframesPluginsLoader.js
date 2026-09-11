__d(
  "KeyframesPluginsLoader",
  ["Bootloader", "KeyframesPluginLogger", "Promise", "flatbuffers"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        DynamicProperties: function (t) {
          return r("Bootloader").loadModules(
            [
              "KeyframesPluginDynamicProperties",
              "KeyframesPluginDynamicPropertiesSchema",
            ],
            t,
            "KeyframesPluginsLoader",
          );
        },
        LayerName: function (t) {
          return r("Bootloader").loadModules(
            ["KeyframesPluginLayerName", "KeyframesPluginLayerNameSchema"],
            t,
            "KeyframesPluginsLoader",
          );
        },
        LayerTags: function (t) {
          return r("Bootloader").loadModules(
            ["KeyframesPluginLayerTags", "KeyframesPluginLayerTagsSchema"],
            t,
            "KeyframesPluginsLoader",
          );
        },
        RandomSubdocument: function (t) {
          return r("Bootloader").loadModules(
            [
              "KeyframesPluginRandomSubdocument",
              "KeyframesPluginRandomSubdocumentSchema",
            ],
            t,
            "KeyframesPluginsLoader",
          );
        },
        Sound: function (t) {
          return r("Bootloader").loadModules(
            ["KeyframesPluginSound", "KeyframesPluginSoundSchema"],
            t,
            "KeyframesPluginsLoader",
          );
        },
        SubdocumentSwap: function (t) {
          return r("Bootloader").loadModules(
            [
              "KeyframesPluginSubdocumentSwap",
              "KeyframesPluginSubdocumentSwapSchema",
            ],
            t,
            "KeyframesPluginsLoader",
          );
        },
        TrimPath: function (t) {
          return r("Bootloader").loadModules(
            ["KeyframesPluginTrimPath", "KeyframesPluginTrimPathSchema"],
            t,
            "KeyframesPluginsLoader",
          );
        },
      };
    function u(e, t) {
      return s[e] ? s[e](t) : null;
    }
    function c(t) {
      var r = t.map(function (t) {
        return new (e || (e = n("Promise")))(function (e, n) {
          var r = u(t, function () {
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            e(n);
          });
          r || n("Unknown plugin " + t);
        });
      });
      return (e || (e = n("Promise"))).all(r);
    }
    var d = (function () {
      function e(e, t) {
        ((this.instances = []),
          (this.$1 = {}),
          (this.$2 = {}),
          (this.$4 = e),
          (this.$3 = t));
      }
      ((e.fromPluginTable = function (n) {
        return (
          o("KeyframesPluginLogger").KeyframesPluginLogger.log(n),
          c(n).then(function (t) {
            return new e(n, t);
          })
        );
      }),
        (e.getSupportedPlugins = function () {
          return s;
        }));
      var t = e.prototype;
      return (
        (t.getPluginTable = function () {
          return this.$4;
        }),
        (t.getPluginsForLayer = function (t) {
          return this.$1[t];
        }),
        (t.maybeInstantiatePluginsForLayer = function (t) {
          var e = t.id();
          if (this.$2[e] !== !0) {
            var n = t.pluginsLength();
            if (n)
              for (var r = 0; r < n; r++) {
                var a = t.plugins(r),
                  i = new (o("flatbuffers").ByteBuffer)(a.contentArray()),
                  l = a.index();
                if (this.$3[l]) {
                  var s = this.$3[l],
                    u = s[0],
                    c = s[1],
                    d = "getRootAsPlugin" + this.$4[l],
                    m = c[d](i),
                    p = new u(m, t);
                  (this.$1[e] || (this.$1[e] = []),
                    this.$1[e].push(p),
                    this.instances.push(p),
                    p.animationDidLoad());
                }
              }
            this.$2[e] = !0;
          }
        }),
        e
      );
    })();
    l.default = d;
  },
  98,
);
