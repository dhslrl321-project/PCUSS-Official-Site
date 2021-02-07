import React from 'react';
import InterviewDetail from '../../../components/sections/InterviewDetail';
import { data as interviewDetailData } from '../../../components/sections/InterviewDetail/data';

const Index = ( props ) => {

  return (
    <main>
      <InterviewDetail data={props.pageProps} />
    </main>
  );
};

Index.getInitialProps = ({ query }) => {
  return {
    headerData: interviewDetailData.headerData,
    pageData: interviewDetailData.pageData[query.id - 1]
  }
};

export default Index;