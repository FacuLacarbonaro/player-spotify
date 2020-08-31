export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQDuJttUzE0tVhfkHwJeFmtIAruvOACV-KjVUkW7bLTte_tAy3pHgvJ-SMn8cWwGkFvnOnkB8hbOtSjlgM0s-dkRshw_5QaYKsfGP0N00YD4Q43vOHMtxOJuGtQbbX123WwQKbnQxhe0OYMp6GnFC6kCt18fzkUjG9qiCHo",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    default:
      return state;
  }
};

export default reducer;
