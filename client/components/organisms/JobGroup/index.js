import React from 'react'
import JobTag from "../../molecules/JobTag";
import * as S from "./styles";
const JobGroup = ({ data, handleJobCardOnClick }) => {

  return (
    <S.Container>
      {data.map(tag =>
        <div key={tag.id} onClick={() => handleJobCardOnClick(tag.category)}>
          <JobTag tagName={tag.tagName} />
        </div>
      )}
    </S.Container>
  )
}

export default JobGroup
