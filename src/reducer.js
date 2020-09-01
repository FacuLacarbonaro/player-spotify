export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  /* token:
    "BQDuJttUzE0tVhfkHwJeFmtIAruvOACV-KjVUkW7bLTte_tAy3pHgvJ-SMn8cWwGkFvnOnkB8hbOtSjlgM0s-dkRshw_5QaYKsfGP0N00YD4Q43vOHMtxOJuGtQbbX123WwQKbnQxhe0OYMp6GnFC6kCt18fzkUjG9qiCHo",
 */

  };

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    default:
      return state;
  }
};

export default reducer;
