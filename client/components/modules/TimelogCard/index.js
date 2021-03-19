import React, { useEffect } from 'react'
import * as S from "./styles";

import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Label from "../../atoms/Label";

const TimelogCard = ({ year, content, isLeft }) => {

  const timelineProp = isLeft ? "primary" : "grey";

  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot data-aos="fade-up" variant="outlined" color={timelineProp} />
        <TimelineConnector data-aos="fade-up" />
      </TimelineSeparator>
      <TimelineContent data-aos="zoom-in-up">
        <S.TextWrapper>
          <Label styleType="Label" size="1">{year}</Label>
          <Label styleType="Label" size="1">{content}</Label>
        </S.TextWrapper>
      </TimelineContent>
    </TimelineItem>
  )
}

export default TimelogCard
