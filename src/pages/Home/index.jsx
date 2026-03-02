import React from "react";
import { showToast } from "../../configs/notification";
import { TYPE_SHOW_NOTI } from "../../utils/consts/notification";

export default function Home() {
  const showMessage = () => {
    showToast(TYPE_SHOW_NOTI.err, "show message");
  };
  return (
    <div>
      Home Page <button onClick={showMessage}>Show Message</button>
    </div>
  );
}
