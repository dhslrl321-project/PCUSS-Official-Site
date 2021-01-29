import { useState, useEffect } from "react";

function useChatUI(label, id) {
  const [chatIndex, setChatIndex] = useState(0);

  const [labels, setLabels] = useState(chatLabels);

  const handleChatLabelClick = (label) => {
    setChatIndex(label.id - 1);
    changeLabelFocus(label.id);
  }

  const changeLabelFocus = id => {
    setLabels(
      labels.map(label =>
        label.id === id
          ? { ...label, active: true }
          : { ...label, active: false })
    )
  }
}