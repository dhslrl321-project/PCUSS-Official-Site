import Interview from "../../components/sections/Interview";
import { data as interviewData } from "../../components/sections/Interview/data";

export default function interview() {
  return (
    <main>
      <Interview data={interviewData} />
    </main>
  );
}