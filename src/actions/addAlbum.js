export const ADD_ALBUM = "ADD_ALBUM";

export function addAlbum(id, title) {
  return {
    type: ADD_ALBUM,
    payload: {
      id,
      title
    }
  };
}
