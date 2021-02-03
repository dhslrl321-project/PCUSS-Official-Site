import React, { useEffect } from 'react'
import * as S from "./styles";
import TimelogCard from "../TimelogCard";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Timeline from "@material-ui/lab/Timeline";
import AOS from "aos";
import "aos/dist/aos.css";

const TimelogGroup = ({ data }) => {

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  })
  return (
    <S.Container>
      <Timeline align="alternate">
        {data.map(item =>
          <TimelogCard
            key={item.id}
            year={item.year}
            content={item.content}
            isLeft={item.isLeft} />)}

        <TimelineItem>
          <TimelineSeparator data-aos="fade-left">
            <TimelineDot variant="outlined" color="gray" data-aos="fade-up" />
          </TimelineSeparator>
          <TimelineContent data-aos="fade-in-left">진행중</TimelineContent>
        </TimelineItem>
      </Timeline>
    </S.Container>
  )
}

export default TimelogGroup
