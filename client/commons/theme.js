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
    SecondaryDescriptionM: "0.7rem"
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
    `
  },
  palettes: {
    title: "#fff",
    background: "#22272E",
    cardBg: "#2D333B",
    focusColor: "#0050FF",
    sourceColor: "#B4B4B4",
    // github palettes

    // fonts
    // default font color : #ADBAC7
    // placeholder color : #757880
    // focus font color : #539BF5

    // background
    // 배경 색 : #22272E (가장 어두움)
    // input, cardBg 색 : #2D333B (중간 밝음)

    // button
    // input on cardBg, button 색 : #444C56 (input, cardBg 보다 더 밝음)

    // plus : #37CE43
    // minus : #FF0000
  },
  margin: {
    sectionMargin: "250px 0",
    firstSectionMargin: "50px 0 250px 0",
    lastSectionMargin: "250px 0 100px 0",
  }
}

export default theme;