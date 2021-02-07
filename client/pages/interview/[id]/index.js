import React from 'react';
import InterviewDetail from '../../../components/sections/InterviewDetail';
import { useRouter } from 'next/router';
import { data as interviewDetailData } from '../../../components/sections/InterviewDetail/data';

const Index = () => {
  const router = useRouter();
  const pageNumber = Number(router.query.id);

  return (
    <InterviewDetail data={interviewDetailData} pageNumber={pageNumber - 1} />
  );
};

export default Index;