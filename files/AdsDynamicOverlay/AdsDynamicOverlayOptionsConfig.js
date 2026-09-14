__d(
  "AdsDynamicOverlayOptionsConfig",
  ["fbt", "CatalogVertical", "immutable"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = {
        optionName: s._(/*BTDS*/ "Base price"),
        templateTag: "{{hotel.base_price strip_zeros round}}",
        tooltip: s._(
          /*BTDS*/ "The base price for a hotel room as listed in the catalog. If you use dynamic (date-specific) pricing, the base price for the room type will appear.",
        ),
      },
      d = {
        optionName: s._(/*BTDS*/ "Sale price"),
        templateTag: "{{hotel.sale_price strip_zeros round}}",
        tooltip: s._(
          /*BTDS*/ "The sale price for a hotel room as listed in the catalog. If you use dynamic (date-specific) pricing, the average dynamic sale price per night will appear.",
        ),
      },
      m = {
        optionName: s._(/*BTDS*/ "Total price"),
        templateTag: "{{hotel.total_price strip_zeros round}}",
        tooltip: s._(
          /*BTDS*/ "Total price for an entire stay including taxes and fees. Only applicable for dynamic (date-specific) pricing.",
        ),
      },
      p = {
        optionName: s._(/*BTDS*/ "Price"),
        templateTag: "{{hotel.price strip_zeros round}}",
        tooltip: s._(
          /*BTDS*/ "The average dynamic price per night with taxes and fees. Only applicable for dynamic (date-specific) pricing.",
        ),
      },
      _ = r("immutable").Map(
        ((u = {}),
        (u[r("CatalogVertical").HOTELS] =
          ((e = {}),
          (e.price = [{ supportedOptions: [c, d, m, p], defaultOption: c }]),
          (e.from_price = [
            { supportedOptions: [c, d, m, p], defaultOption: c },
          ]),
          (e.strikethrough_price = [
            { supportedOptions: [c, m, p], defaultOption: c },
            { supportedOptions: [c, d], defaultOption: d },
          ]),
          (e.percentage_off = [
            { supportedOptions: [c, m, p], defaultOption: c },
            { supportedOptions: [c, d], defaultOption: d },
          ]),
          e)),
        u),
      ),
      f = _;
    l.default = f;
  },
  226,
);
