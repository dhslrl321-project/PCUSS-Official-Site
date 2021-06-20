import * as S from './styles';
import SectionHeader from '../../organisms/SectionHeader';
import CircleGroup from '../../organisms/CircleGroup';

const Activities = ({ data, isDescVisible }) => {
  const { headerData, cardData } = data;
  const { title, titleDescription } = headerData;
  const { cards } = cardData;

  return (
    <S.Container data-aos="zoom-in-up" id="seminar">
      <SectionHeader title={title} description={titleDescription} />
      <CircleGroup data={cards} isDescVisible={isDescVisible} />
    </S.Container>
  );
};

export default Activities;

Activities.defaultProps = {
  isDescVisible: true,
};