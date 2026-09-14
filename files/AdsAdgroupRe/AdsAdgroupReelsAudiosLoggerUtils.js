__d(
  "AdsAdgroupReelsAudiosLoggerUtils",
  [
    "$InternalEnum",
    "AdsAdgroupAudiosSoundCollectionTags",
    "AdsInterfacesLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({
      RECOMMENDED_MUSIC_LIST_MAX_LIMIT_REACHED:
        "recommended_music_list_max_limit_reached",
      RECOMMENDED_MUSIC_LIST_ON_SCROLL_END_REACH:
        "recommended_music_on_scroll_end_reach",
    });
    function s(e, t, n) {
      var o,
        a = n ? "reels_music_carousel_opt_in" : "reels_music_carousel_opt_out";
      r("AdsInterfacesLogger").log({
        data: ((o = {}), (o.adgroup_id = e), (o.fragment_id = t), o),
        eventName: a,
      });
    }
    function u(e, t, n, o) {
      var a;
      r("AdsInterfacesLogger").log({
        data:
          ((a = {}),
          (a.adgroup_id = e),
          (a.fragment_id = t),
          (a.is_new_fragment = o),
          (a.object_creation_source = n),
          a),
        eventName: "reels_music_carousel_published",
      });
    }
    function c(e, t, n) {
      var o;
      n ||
        r("AdsInterfacesLogger").log({
          data: ((o = {}), (o.adgroup_id = e), (o.fragment_id = t), o),
          eventName: "reels_music_single_image_opt_out",
        });
    }
    function d(e, t, n) {
      if (n) {
        var o;
        r("AdsInterfacesLogger").logOnce({
          data: ((o = {}), (o.adgroup_id = e), (o.fragment_id = t), o),
          eventName: "reels_music_single_image_checkbox_impression",
        });
      }
    }
    function m(e, t, n, o, a) {
      var i;
      if (!o) {
        var l = a ? n : "L1";
        r("AdsInterfacesLogger").log({
          data:
            ((i = {}),
            (i.adgroup_id = e),
            (i.fragment_id = t),
            (i.source = l),
            i),
          eventName: "reels_music_single_image_opt_out_automatic_track",
        });
      }
    }
    function p(e, t, n) {
      var o;
      n ||
        r("AdsInterfacesLogger").log({
          data: ((o = {}), (o.adgroup_id = e), (o.fragment_id = t), o),
          eventName: "reels_music_single_image_on_click_select_music_in_L1",
        });
    }
    function _(e, t, n, o, a, i) {
      var l = i ? o : "L1";
      if (a) {
        if (n) {
          var s;
          r("AdsInterfacesLogger").log({
            data:
              ((s = {}),
              (s.adgroup_id = e),
              (s.fragment_id = t),
              (s.source = l),
              s),
            eventName: "reels_music_carousel_modal_opt_out",
          });
        }
      } else if (n) {
        var u;
        r("AdsInterfacesLogger").log({
          data:
            ((u = {}),
            (u.adgroup_id = e),
            (u.fragment_id = t),
            (u.source = l),
            u),
          eventName: "reels_music_single_image_modal_opt_out",
        });
      }
    }
    function f(e, t, n, o, a, i) {
      if (t != null) {
        var l,
          s,
          u = i != null ? i : "null",
          c = JSON.stringify({ is_suggested_song_found: a });
        r("AdsInterfacesLogger").log(
          o
            ? {
                data:
                  ((l = {}),
                  (l.adgroup_id = e),
                  (l.source = n),
                  (l.action_type = t),
                  (l.status = u),
                  (l.message = c),
                  l),
                eventName: "reels_music_carousel_modal_change_saved",
              }
            : {
                data:
                  ((s = {}),
                  (s.adgroup_id = e),
                  (s.source = n),
                  (s.action_type = t),
                  (s.status = u),
                  (s.message = c),
                  s),
                eventName: "reels_music_single_image_modal_change_saved",
              },
        );
      }
    }
    function g(e, t, n, o, a) {
      var i,
        l = JSON.stringify(
          t === "selected"
            ? {
                audio_type: t,
                is_audio_editing_eligible: n,
                is_audio_edited: o > 0,
                num_audios_edited: o,
              }
            : { audio_type: t },
        );
      r("AdsInterfacesLogger").log({
        data:
          ((i = {}), (i.adgroup_id = e), (i.source = a), (i.message = l), i),
        eventName: "reels_music_single_image_modal_change_saved",
      });
    }
    function h(e, t) {}
    function y(e, t, n, a) {
      var i = [];
      if (
        (a.forEach(function (e) {
          i.push(
            o("AdsAdgroupAudiosSoundCollectionTags").SoundCollectionNewMoodTags[
              e
            ] == null
              ? o(
                  "AdsAdgroupAudiosSoundCollectionTags",
                ).SoundCollectionNewTempoTags[e].toString()
              : o(
                  "AdsAdgroupAudiosSoundCollectionTags",
                ).SoundCollectionNewMoodTags[e].toString(),
          );
        }),
        n !== "" || a.length !== 0)
      ) {
        var l;
        r("AdsInterfacesLogger").log({
          data:
            ((l = {}),
            (l.adgroup_id = e),
            (l.search_string = n),
            (l.filter_set = i.toString()),
            l),
          eventName: t
            ? "reels_music_carousel_on_search_or_filter_used"
            : "reels_music_single_image_on_search_or_filter_used",
        });
      }
    }
    function C(e, t, n) {
      var a,
        i = [];
      (t.length !== 0 &&
        t.forEach(function (e) {
          var t = e.toString();
          i.push(
            o("AdsAdgroupAudiosSoundCollectionTags").SoundCollectionNewMoodTags[
              t
            ] == null
              ? o(
                  "AdsAdgroupAudiosSoundCollectionTags",
                ).SoundCollectionNewTempoTags[t].toString()
              : o(
                  "AdsAdgroupAudiosSoundCollectionTags",
                ).SoundCollectionNewMoodTags[t].toString(),
          );
        }),
        r("AdsInterfacesLogger").log({
          data:
            ((a = {}),
            (a.search_string = e),
            (a.filter_set = i.toString()),
            (a.message = n),
            a),
          eventName: "reels_music_no_audio_results_returned",
        }));
    }
    function b(e, t, n, a) {
      var i,
        l = [];
      (a.length !== 0 &&
        a.forEach(function (e) {
          var t = e.toString();
          l.push(
            o("AdsAdgroupAudiosSoundCollectionTags").SoundCollectionNewMoodTags[
              t
            ] == null
              ? o(
                  "AdsAdgroupAudiosSoundCollectionTags",
                ).SoundCollectionNewTempoTags[t].toString()
              : o(
                  "AdsAdgroupAudiosSoundCollectionTags",
                ).SoundCollectionNewMoodTags[t].toString(),
          );
        }),
        r("AdsInterfacesLogger").log({
          data:
            ((i = {}),
            (i.error_data = e),
            (i.error_name = t),
            (i.search_string = n),
            (i.filter_set = l.toString()),
            i),
          eventName: "reels_music_search_filter_graphapi_failed",
        }));
    }
    function v(e, t, n) {
      var o;
      r("AdsInterfacesLogger").log({
        data:
          ((o = {}),
          (o.error_cell_details = e),
          (o.error_name = t),
          (o.ad_account_id = n),
          o),
        eventName: "reels_music_v1_recommendation_graph_api_failure",
      });
    }
    function S(e, t, n) {
      var o;
      t ||
        r("AdsInterfacesLogger").log({
          data:
            ((o = {}),
            (o.adgroup_id = e),
            (o.action_type = "selected"),
            (o.message = JSON.stringify(n)),
            o),
          eventName:
            "reels_music_single_image_song_list_on_check_uncheck_audio_items",
        });
    }
    function R(e, t, n, o) {
      var a;
      r("AdsInterfacesLogger").log({
        data:
          ((a = {}),
          (a.sub_event = e),
          (a.adgroup_id = t),
          (a.ad_account_id = n),
          (a.creative_editor_type = o),
          a),
        eventName: "reels_music_v1_model_recommendation_event",
      });
    }
    ((l.MusicRecommendationSubEventType = e),
      (l.logMusicChangeInL1 = s),
      (l.logSessionEnd = u),
      (l.logMusicChangeInL1ForSingleImage = c),
      (l.logEntryPointRenderedForSingleImage = d),
      (l.logAutomaticTrackOptOutInCEForSingleImage = m),
      (l.logOnClickSelectMusicInL1 = p),
      (l.logMusicChangeOnOffInMusicModal = _),
      (l.logStatusChangeSavedInMusicModal = f),
      (l.logOnSavedForCFPSingleImage = g),
      (l.logOnClickSelectMusicInCFP = h),
      (l.logMusicSearchAndFilterInteraction = y),
      (l.logNoAudioResultsReturnedInUI = C),
      (l.logSearchFilterGraphAPIError = b),
      (l.logMusicRecommendationAPIFailureError = v),
      (l.logOnSelectDeselectAudioItems = S),
      (l.logRecommendedMusicListScrollEvents = R));
  },
  98,
);
