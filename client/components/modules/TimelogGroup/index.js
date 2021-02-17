import Timeline from "@material-ui/lab/Timeline";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelogCard from "../TimelogCard";
import * as S from "./styles";

const TimelogGroup = ({ data }) => {
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
            <TimelineDot variant="outlined" color="grey" data-aos="fade-up" />
          </TimelineSeparator>
          <TimelineContent data-aos="fade-in-left">진행중</TimelineContent>
        </TimelineItem>
      </Timeline>
    </S.Container>
  )
}

export default TimelogGroup
