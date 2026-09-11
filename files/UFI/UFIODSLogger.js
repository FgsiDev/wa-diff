__d(
  "UFIODSLogger",
  ["CurrentUser", "ODS", "Random"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n) {
      if (r("CurrentUser").isLoggedIn()) {
        var a = t + "." + n,
          i = u(a);
        o("Random").coinflip(i) &&
          (e || (e = o("ODS"))).bumpEntityKey(2507, "www.ufi", a, i);
      }
    }
    function u(e) {
      if (r("CurrentUser").isEmployee()) return 1;
      switch (e) {
        case "componentDidMount.feedstory.relay":
          return 8763;
        case "comment.newsfeed.toplevel.componentDidMount.relay":
          return 7092;
        case "composer.newsfeed.toplevel.componentDidMount.relay":
          return 4353;
        case "attachment_render.any.relay":
          return 1677;
        case "comment.newsfeed.replies.componentDidMount.relay":
          return 1119;
        case "actor_selector.component_did_mount.relay":
          return 864;
        case "componentDidMount.snowlift.relay":
          return 585;
        case "comment.newsfeed.toplevel.componentDidMount.comet":
          return 337;
        case "composer.newsfeed.toplevel.componentDidMount.comet":
          return 316;
        case "composer.newsfeed.replies.componentDidMount.relay":
          return 285;
        case "reaction.mutation.attempt.1.relay":
          return 230;
        case "reaction.newsfeed.mutation.attempt.1.relay":
          return 180;
        case "comment.newsfeed.replies.componentDidMount.comet":
          return 69;
        case "componentDidMount.legacy":
          return 40;
        case "comment.newsfeed.toplevel.componentDidMount.legacy":
          return 31;
        case "componentDidMount.tahoe2.relay":
          return 29;
        case "composer.newsfeed.toplevel.componentDidMount.legacy":
          return 20;
        case "composer.newsfeed.replies.componentDidMount.comet":
          return 15;
        case "actor_selector.component_did_mount.legacy":
          return 8;
        case "componentDidMount.tahoe1.legacy":
          return 7;
        case "componentDidMount.vhfeedstory.relay":
          return 6;
        case "componentDidMount.workplace.relay":
          return 6;
        case "prefill_mention_plugin.prefill_requested.with_implementation.relay":
          return 4;
        case "componentDidMount.tahoe2.legacy":
          return 3;
        case "comment.newsfeed.replies.componentDidMount.legacy":
          return 2;
        default:
          return 1;
      }
    }
    l.bump = s;
  },
  98,
);
