import React from 'react';
import InterviewDetail from '../../../components/sections/InterviewDetail';
import { data as interviewDetailData } from '../../../datas/InterviewDetailData';

const Index = ( props ) => {

  return (
    <InterviewDetail data={props.pageProps} />
  );
};

Index.getInitialProps = ({ query }) => {
  return {
    headerData: interviewDetailData.headerData,
    pageData: interviewDetailData.pageData[query.id - 1]
  }
};

export default Index;