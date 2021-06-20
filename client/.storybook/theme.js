const theme = {
  fontSize: {
    MainTitle: "2rem",
    SubTitle: "1.4rem",

    PrimaryLabel: "1.3rem",
    SecondaryLabel: "1.2rem",
    PrimaryDescription: "0.9rem",
    SecondaryDescription: "0.7rem",

    /* Mobile */
    MainTitleM: "1.5rem",
    SubTitleM: "1.2rem",

    PrimaryLabelM: "1.0rem",
    SecondaryLabelM: "0.9rem",
    PrimaryDescriptionM: "0.8rem",
    SecondaryDescriptionM: "0.7rem",
  },
  shortcuts: {
    flexCenter: `
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    flexCenterColumn: `
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `,
  },
  palettes: {
    title: "#fff",
    background: "#22272E",

    focusColor: "#0050FF",
    sourceColor: "#B4B4B4",
    // github palettes

    // fonts
    defaultFontColor: "#ADBAC7",
    placeholderColor: "#757880",
    focusFontColor: "#539BF5",

    // background
    cardBg: "#2D333B",
    buttonBg: "#444C66",
    inputBg: "#2D333B",

    // button
    // input on cardBg, button 색 : #444C56 (input, cardBg 보다 더 밝음)

    plus: "#37CE43",
    // todo 이름이 애매함: 수정 요망
    minus: "#FF0000",
  },
  margin: {
    sectionMargin: "300px 0",
    firstSectionMargin: "120px 0 250px 0",
    lastSectionMargin: "250px 0 130px 0",
    singleMargin: "120px 0 130px 0",
  },
};

export default theme;
