export const showCustomToast = (
  type: string,
  message: string,
  toast: {},
  setToast: Function,
  lapse: number
) => {
  setToast({
    ...toast,
    type: type,
    message: message,
    isShowing: true,
  });
  setTimeout(() => {
    setToast({
      ...toast,
      isShowing: false,
    });
  }, lapse);
};
