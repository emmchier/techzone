import { useState } from "react";

import { ToastContext } from "../context";
import { Toast } from "../interfaces";

interface ToastProviderI {
  children: JSX.Element | JSX.Element[];
}

const ToastProvider = ({ children }: ToastProviderI) => {
  const [toast, setToast] = useState<Toast>({
    type: "success",
    message: "",
    isShowing: false,
  });

  return (
    <ToastContext.Provider value={{ toast, setToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
