import { data as clubData } from "../datas/ClubData";
import withHead from "../commons/withHead";
import Lab from "../components/sections/Lab";
const club = () => {
  return (
    <>
      <Lab datas={clubData} />
    </>
  )
}

export default withHead(club, "동아리 및 소모임", "정보보안학과에 존재하는 사교 모임에 대해서 알아봅시다.");