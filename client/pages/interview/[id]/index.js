import React from 'react';
import InterviewDetail from '../../../components/sections/InterviewDetail';
import { data as interviewDetailData } from '../../../datas/InterviewDetailData';
import Section from '../../../components/atoms/Section';

const Index = (props) => {

  return (
    <>
      <Section styleType="SingleMargin">
        <InterviewDetail data={props.pageProps} />
      </Section>
    </>
  );
};

Index.getInitialProps = ({ query }) => {
  return {
    headerData: interviewDetailData.headerData,
    pageData: interviewDetailData.pageData[query.id - 1]
  }
};

export default Index;