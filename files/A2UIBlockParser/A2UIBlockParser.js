__d(
  "A2UIBlockParser",
  ["A2UIBlockParserGating", "A2UITreeParser"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "a2ui_pending";
    function s(e) {
      return e == null ? !1 : e.includes("```a2ui") || e.includes("```json");
    }
    function u(e) {
      try {
        var t = JSON.parse(e);
        if (t != null && typeof t == "object" && !Array.isArray(t)) {
          var n = t;
          if (
            (typeof n.component == "string" &&
              typeof n.type != "string" &&
              (n.type = n.component),
            typeof n.type == "string")
          )
            return t;
        }
      } catch (e) {}
      return null;
    }
    function c(e) {
      for (
        var t = [],
          n = e
            .replace(/([^\n])(```(?:a2ui|json))/g, "$1\n$2")
            .replace(/([^\n`])(```)\s*$/gm, "$1\n$2"),
          r = n.split("\n"),
          a = 0,
          i = [],
          l = function () {
            if (i.length > 0) {
              var e = i.join("\n").trim();
              (e !== "" && t.push({ content: e, kind: "text" }), (i = []));
            }
          };
        a < r.length;
      ) {
        var s = r[a];
        if (s.startsWith("```a2ui") || s.startsWith("```json") || s === "```") {
          var c,
            d = s.slice(3).trim(),
            m = [];
          for (a++; a < r.length && !r[a].startsWith("```"); )
            (m.push(r[a]), a++);
          a++;
          var p = m.join("\n");
          if (d === "a2ui" || d === "json" || d === "") {
            var _ = o("A2UITreeParser").parseA2UITree(p);
            if (_ != null) {
              (l(), t.push({ kind: "tree", state: _ }));
              continue;
            }
            var f = u(p);
            if (f != null) {
              (l(), t.push({ data: f, kind: "a2ui" }));
              continue;
            }
            if (
              d === "a2ui" &&
              o("A2UIBlockParserGating").shouldDropUnparseableA2UIFence()
            )
              continue;
          }
          (i.push("```" + d), (c = i).push.apply(c, m), i.push("```"));
          continue;
        }
        var g = s.trim();
        if (g.startsWith("{") && g.endsWith("}") && g.length > 10) {
          var h = u(g);
          if (h != null) {
            (l(), t.push({ data: h, kind: "a2ui" }), a++);
            continue;
          }
        }
        (i.push(s), a++);
      }
      return (l(), t);
    }
    function d(e) {
      return e == null || !s(e)
        ? !1
        : c(e).some(function (e) {
            return e.kind === "tree";
          });
    }
    ((l.A2UI_PENDING_TYPE = e),
      (l.hasA2UIBlocks = s),
      (l.parseA2UI = u),
      (l.parseA2UIBlocks = c),
      (l.hasA2UITreeBlock = d));
  },
  98,
);
