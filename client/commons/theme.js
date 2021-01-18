const theme = {
  breakpoints: {
    sm: '480px', // 모바일
    md: '768px', // I Pad (태블릿)
    lg: '1024px', // I Pad Pro (13inch 노트북)
    xl: '1200px',
  },
  fontSize: {
    MainTitle: "2.5rem;",
    SubTitle: "1.5rem;",

    PrimaryLabel: "1.3rem;",
    SecondaryLabel: "1.2rem;",
    PrimaryDescription: "0.9rem;",
    SecondaryDescription: "0.8rem;"
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
    cardBg: "#1D1D20",
  }
}

export default theme;