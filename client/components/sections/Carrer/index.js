import React from 'react'
import SectionHeader from "../../modules/SectionHeader";
import CarrerGroup from '../../modules/CarrerGroup';
import LargeDescription from "../../modules/LargeDescription";

const Carrer = ({ data }) => {
  const { headerData, carrerData, largeDescriptionData } = data
  const { title, description } = headerData;

  return (
    <section>
      <SectionHeader title={title} description={description} />
      <CarrerGroup data={carrerData} />
      <LargeDescription data={largeDescriptionData} />
    </section>
  )
}

export default Carrer