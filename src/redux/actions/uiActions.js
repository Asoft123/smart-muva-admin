export function setSnackbar(snackBarMessage, snackBarType) {
  return (dispatch) =>
    dispatch({
      type: "SET_SNACKBAR",
      payload: {
        snackBarMessage,
        snackBarType,
      },
    });
}

export function hideSnackBar() {
  return (dispatch) =>
    dispatch({
      type: "HIDE_SNACKBAR",
    });
}

export function toggleDarkMode() {
  return (dispatch) =>
    dispatch({
      type: "TOGGLE_DARK_MODE",
    });
}