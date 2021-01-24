import React from 'react'
import SectionHeader from "../../modules/SectionHeader";
import CarrerGroup from '../../modules/CarrerGroup';
import LargeDescription from "../../modules/LargeDescription";

const Carrer = ({ headerData, carrerData, largeDescriptionData }) => {
  const { title, description } = headerData;

  return (
    <div>
      <SectionHeader title={title} description={description} />
      <CarrerGroup data={carrerData} />
      <LargeDescription data={largeDescriptionData} />
    </div>
  )
}

export default Carrer