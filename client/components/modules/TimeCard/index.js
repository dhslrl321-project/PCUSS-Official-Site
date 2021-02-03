import React, { useEffect } from 'react'
import * as S from "./styles";
import AOS from "aos";
import "aos/dist/aos.css";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";

import Label from "../../atoms/Label";

const TimeCard = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  })
  return (
    <S.Container>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot data-aos="fade-left" variant="outlined" color="primary" />
          <TimelineConnector data-aos="fade-in" />
        </TimelineSeparator>
        <TimelineContent data-aos="fade-up">
          <S.TextWrapper>
            <Label styleType="Label" size="1">2019</Label>
            <Label styleType="Label" size="1.2">Hello</Label>
          </S.TextWrapper>
        </TimelineContent>
      </TimelineItem>
    </S.Container>
  )
}

export default TimeCard
