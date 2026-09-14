__d(
  "AdsUEditorAdgroupMultiMediaVariantSpecUtils",
  [
    "AdImageSpecCropKeys",
    "AdsCreativeMediaSourcingSpecTypes.flow",
    "AdsWizardMediaPickerVariantMapUtils",
    "AdsWizardMediaPickerVariantUtils",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Map([
        ["SQUARE", (e = r("AdImageSpecCropKeys"))["100x100"]],
        ["VERTICAL", e["400x500"]],
        ["FULLSCREEN_VERTICAL", e["90x160"]],
        ["HORIZONTAL", e["191x100"]],
      ]);
    function u(e, t) {
      if (e == null || t == null || t === "") return null;
      var n = e.get(t);
      if (n == null) return null;
      var r = new Map(),
        a = new Set(),
        i = new Set();
      for (var l of n) {
        var u = l.crop,
          c = s.get(l.aspectRatioType);
        if (c != null) {
          if (l.type !== "smart_crop") {
            o("AdsWizardMediaPickerVariantMapUtils").isVariantOptedIn(
              l.optInStatus,
            ) && i.add(c);
            continue;
          }
          if (
            !o("AdsWizardMediaPickerVariantMapUtils").isUnactedVariantOffer(l)
          ) {
            if (
              l.optInStatus ===
              o("AdsCreativeMediaSourcingSpecTypes.flow")
                .RelatedMediaOptInStatusSpecType.OPT_OUT
            ) {
              i.add(c);
              continue;
            }
            if (u != null) {
              var d = u.source === "manual";
              (r.has(c) && (!d || a.has(c))) ||
                (r.set(c, u.box), d && a.add(c));
            }
          }
        }
      }
      return r.size === 0 && i.size === 0
        ? null
        : {
            boxesByCropKey: r,
            hasManualCrop: a.size > 0,
            manualCropKeys: a,
            removedCropKeys: i,
          };
    }
    function c(e, t) {
      var n = {};
      if (e != null) for (var r of Object.keys(e)) n[r] = e[r];
      for (var o of t.removedCropKeys) delete n[o];
      for (var a of t.boxesByCropKey) {
        var i = a[0],
          l = a[1];
        n[i] = l;
      }
      return Object.keys(n).length === 0 ? null : n;
    }
    function d(e, t) {
      return e.hasManualCrop || t ? "manual" : "smart_crop";
    }
    var m = [
      "text_customizations",
      "destination_customizations",
      "placement_customizations",
    ];
    function p(e, t) {
      return t == null
        ? e
        : e.withMutations(function (e) {
            for (var n of m) {
              var r = t.get(n);
              r != null && e.get(n) == null && e.set(n, r);
            }
          });
    }
    function _(e, t) {
      if (e == null || e.size === 0) return r("immutable").List();
      var n = [],
        a = new Set(),
        i = new Map();
      return (
        e.forEach(function (e, l) {
          if (t.has(l))
            for (var s of e) {
              var u = o(
                "AdsWizardMediaPickerVariantMapUtils",
              ).MSS_SOURCE_BY_VARIANT_TYPE.get(s.type);
              if (u != null) {
                var c = s.imageUrl;
                if (!(c == null || c === "")) {
                  var d = s.imageHash,
                    m = o(
                      "AdsWizardMediaPickerVariantUtils",
                    ).isAdvertiserVariantSource(s.type);
                  if (m) {
                    var _ =
                        l +
                        ":" +
                        u +
                        ":" +
                        (d != null ? d : c) +
                        ":" +
                        s.optInStatus +
                        ":" +
                        s.actionMetadata,
                      f = i.get(_);
                    if (f != null) {
                      var g = n[f],
                        h = g.get("variant_types");
                      Array.isArray(h) &&
                        !h.includes(s.aspectRatioType) &&
                        (n[f] = g.set(
                          "variant_types",
                          [].concat(h, [s.aspectRatioType]),
                        ));
                      continue;
                    }
                    i.set(_, n.length);
                  } else {
                    var y = l + ":" + u + ":" + s.aspectRatioType;
                    if (a.has(y)) continue;
                    a.add(y);
                  }
                  n.push(
                    p(
                      r("immutable").Map(
                        babelHelpers.extends(
                          {
                            action_metadata: s.actionMetadata,
                            opt_in_status: s.optInStatus,
                            original_image_hash: l,
                            source: u,
                            url: c,
                            variant_types: [s.aspectRatioType],
                          },
                          d == null || d === "" ? null : { hash: d },
                        ),
                      ),
                      t.get(l),
                    ),
                  );
                }
              }
            }
        }),
        r("immutable").List(n)
      );
    }
    ((l.getVariantCropsForSeed = u),
      (l.overlayVariantCropSpec = c),
      (l.resolveVariantCropType = d),
      (l.inheritSeedCustomizations = p),
      (l.buildVariantImageSpecs = _));
  },
  98,
);
