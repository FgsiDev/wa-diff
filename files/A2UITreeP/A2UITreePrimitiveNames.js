__d(
  "A2UITreePrimitiveNames",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Set([
      "Accordion",
      "Avatar",
      "Button",
      "Card",
      "Carousel",
      "CheckBox",
      "ChoicePicker",
      "Column",
      "ComparisonList",
      "DataViz",
      "DateTimeInput",
      "Divider",
      "EmployeeTypeahead",
      "Grid",
      "Icon",
      "Image",
      "InternTypeahead",
      "Link",
      "List",
      "ListItem",
      "MarkdownText",
      "Metric",
      "NumberInput",
      "Pill",
      "ProgressBar",
      "Row",
      "Slider",
      "StatusIndicator",
      "Switch",
      "TabbedView",
      "Table",
      "Tabs",
      "Text",
      "TextField",
      "WorkflowTimeline",
    ]);
    function l(e) {
      return e.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    }
    function s() {
      var t = new Map();
      for (var n of e) t.set(l(n), n);
      return t;
    }
    var u = s();
    function c(e) {
      var t;
      return (t = u.get(l(e))) != null ? t : null;
    }
    ((i.A2UI_TREE_PRIMITIVE_NAMES = e),
      (i.foldA2UIComponentName = l),
      (i.resolveA2UIPrimitiveName = c));
  },
  66,
);
