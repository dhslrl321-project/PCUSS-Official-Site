import Interview from "../../components/sections/Interview";
import { data as interviewData } from "../../datas/InterviewData";

export default function interview() {
  return (
    <Interview data={interviewData} />
  );
}