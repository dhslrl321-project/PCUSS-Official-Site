import * as S from './styles';
import SectionHeader from '../../modules/SectionHeader';
import CircleGroup from '../../modules/CircleGroup';

const Activities = ({ data, isVisible }) => {
  const { headerData, cardData } = data;
  const { title, titleDescription } = headerData;
  const { cards } = cardData;

  return (
    <S.Container>
      <SectionHeader title={title} description={titleDescription} />
      <CircleGroup data={cards} isVisible={isVisible} />
    </S.Container>
  );
};

export default Activities;

Activities.defaultProps = {
  isVisible: true,
};