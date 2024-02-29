const candlesProperties = [
    {
      id: "candle1",
      open: false,
    },
    {
      id: "candle2",
      open: false,
    },
    {
      id: "candle3",
      open: false
    }
  ]
  
  const openPopup = (ID) => {
    // Show the popup overlay
    closeCurrentPopups(ID);
    const candle = candlesProperties.find(candle => candle.id === ID);
    candle.open = true;
    document.getElementById(ID).style.display = "block";
  }
  
  const closePopup = (ID) => {
    // Hide the popup overlay
    const candle = candlesProperties.find(candle => candle.id === ID);
    candle.open = false;
    document.getElementById(ID).style.display = "none";
  }
  
  const onPress = (ID, Toggle) => {
    if (Toggle) {
      openPopup(ID)
    } else if (!Toggle) {
      closePopup(ID)
    }
  }
  
  const closeCurrentPopups = (ID) => {
    const exclude = ID;
    candlesProperties.forEach(candle => {
      if (candle.id !== exclude) {
        const isOpen = candle.open;
        if (isOpen) {
          candle.open = false
          closePopup(candle.id);
        }
      }
    });
  }
  