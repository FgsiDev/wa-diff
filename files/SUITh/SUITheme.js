__d(
  "SUITheme",
  ["invariant", "err", "react", "requireWeak"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = [
        "SUIActionMenu",
        "SUIBreadcrumbNav",
        "SUIButton",
        "SUIButtonIcon",
        "SUICalendarPager",
        "SUICard",
        "SUICloseButton",
        "SUICustomPopover_DEPRECATED",
        "SUIDateInput",
        "SUIDateTimeRangePicker",
        "SUIDropdownMenu",
        "SUIError",
        "SUIFileSelector",
        "SUIFormRow",
        "SUITableHeaderCell",
        "SUIHelpMessage",
        "SUIHighlightedText",
        "SUIHorizontalLayout",
        "SUIInlineNux",
        "SUIInlineTypeahead",
        "SUILayerFooter",
        "SUILayerHeader",
        "SUILink",
        "SUILoadingBar",
        "SUIMessageBox",
        "SUIModalDEPRECATED",
        "SUIModalBackgroundDEPRECATED",
        "SUIModalCardDEPRECATED",
        "SUIModalCard",
        "SUIMultistepModal",
        "SUIMultiTabDrawer",
        "SUINameCell",
        "SUINestedTable",
        "SUINotice",
        "SUINoticeGroup",
        "SUIPopover",
        "SUIRadioList",
        "SUIRemovableSearchableSelector",
        "SUISearchableSelector",
        "SUISearchInput",
        "SUISectionHeading",
        "SUISelector",
        "SUISelectorButton",
        "SUISelectorOption",
        "SUISelectorOptionGroup",
        "SUISelectorSeparator",
        "SUISimpleTable",
        "SUISpinner",
        "SUISplitButton",
        "SUIStatusIndicator",
        "SUITabGroup",
        "SUITabItem",
        "SUITableDEPRECATED",
        "SUITableCell",
        "SUITable",
        "SUIText",
        "SUITextArea",
        "SUITextInput",
        "SUIThreeStateCheckboxInput",
        "SUIToast",
        "SUIToggleButtonGroup",
        "SUIToken",
        "SUITokenizer",
        "SUITokenizerItem",
        "SUITokenizerItemList",
        "SUITooltip",
        "SUITypeahead",
      ],
      d = (function () {
        function e(e) {
          var t = this;
          ((this.$1 = e.components),
            (this.id = e.id),
            (this.logger = e.logger),
            c.forEach(function (e) {
              var n = t.$1[e];
              if (n) t[e] = n;
              else {
                var o = function () {
                  var t = this;
                  return (
                    n ||
                      r("requireWeak")(
                        "AdsInterfacesComponentsLogger",
                        function (n) {
                          return n.logSUIThemeError(
                            r("err")(
                              "Silvertail theme " +
                                t.id +
                                " does not define a uniform for component " +
                                e,
                            ),
                            t.id,
                          );
                        },
                      ),
                    n || s(0, 11803, this.id, e),
                    n
                  );
                };
                Object.defineProperty(t, e, { get: o });
              }
            }));
        }
        var t = e.prototype;
        return (
          (t.hasUniform = function (t) {
            return !!this.$1[t];
          }),
          (e.get = function (t) {
            if (t.props.preserveThemeFromContext && t.props.theme)
              return t.props.theme;
            var e = t.props.theme,
              n = t.context,
              o = e != null ? e : n,
              a = t.constructor.displayName || t.constructor.name;
            return (
              o ||
                r("requireWeak")("AdsInterfacesComponentsLogger", function (e) {
                  return e.logSUIThemeError(
                    r("err")(
                      "Silvertail component " +
                        a +
                        " was not passed a theme in props or context. See https://fburl.com/silvertail-theme for more details.",
                    ),
                    a,
                  );
                }),
              o || s(0, 11804, a),
              o
            );
          }),
          e
        );
      })();
    l.default = d;
  },
  98,
);
