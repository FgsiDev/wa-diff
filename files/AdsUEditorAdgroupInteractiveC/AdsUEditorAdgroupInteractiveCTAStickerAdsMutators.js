__d(
  "AdsUEditorAdgroupInteractiveCTAStickerAdsMutators",
  [
    "AdsAdgroupRecordAccessors",
    "AdsInteractiveComponentConstants",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var a;
      if (t == null && n == null) return e;
      var i = e,
        l =
          ((a = {}),
          (a.type = o(
            "AdsInteractiveComponentConstants",
          ).INTERACTIVE_CTA_STICKER),
          a);
      if (t != null) {
        var s, u;
        l = babelHelpers.extends(
          {},
          l,
          ((u = {}),
          (u.position_spec = r("immutable").Map(
            ((s = {}), (s.x = t.x), (s.y = t.y), s),
          )),
          u),
        );
      }
      if (n != null) {
        var c, d;
        l = babelHelpers.extends(
          {},
          l,
          ((d = {}),
          (d.cta_sticker_spec = r("immutable").Map(
            ((c = {}),
            (c.background_opacity = n.background_opacity),
            (c.text_color = n.text_color),
            (c.text_size = n.text_size),
            (c.icon_color = n.icon_color),
            c),
          )),
          d),
        );
      }
      var m = r("immutable").List([r("immutable").Map(l)]);
      return (
        (i = r(
          "AdsAdgroupRecordAccessors",
        ).creative.interactive_components_spec.components.set(m, i)),
        i
      );
    }
    l.maybeUpdateInteractiveCTASticker = e;
  },
  98,
);
