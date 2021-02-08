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
    background: "#0F1218",
    cardBg: "#1D1D20",
    focusColor: "#0050FF",
    sourceColor: "#B4B4B4",
  },
  margin: {
    sectionMargin: "250px 0",
    firstSectionMargin: "50px 0 250px 0",
    lastSectionMargin: "250px 0 100px 0",
  }
}

export default theme;