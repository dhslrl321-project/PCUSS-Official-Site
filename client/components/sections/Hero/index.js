import React from "react";
import * as S from "./styles";

const Hero = () => {
  return (
    <S.Container>
      <S.VideoBg
        autoPlay
        loop
        muted
        src="/binary.mp4"
        type="video/mp4"
        playsInline
        webkit-playsinline
      />
      <S.HeroContent>
        <S.TitleWrapper>배재대학교</S.TitleWrapper>
        <br></br>
        <br></br>
        <S.SubtitleWrapper>지능 SW 공학부 정보보안학과</S.SubtitleWrapper>
      </S.HeroContent>
    </S.Container>
  );
};

export default Hero;
