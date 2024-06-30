import JoinLeague from "../../ShaireComponents/JoinLeague";
import SubBanner from "../../ShaireComponents/SubBanner";
import FaqSection from "./FaqSection";
import ProPlan from "./ProPlan";
import StarterPlan from "./StarterPlan";
import TeamPlan from "./TeamPlan";

export default function Pricing() {
  return (
    <div className="w-full">
      <SubBanner
        name={`Flexible pricing for everyone`}
        title={`Explore the various subscription options.`}
      />
      <div className="max-w-[1600px] mx-auto flex justify-center items-start flex-col gap-5 px-2 2xl:gap-10 2xl:flex-row">
        <StarterPlan></StarterPlan>
        <ProPlan></ProPlan>
        <TeamPlan></TeamPlan>
      </div>

      <FaqSection></FaqSection>
      <JoinLeague></JoinLeague>
    </div>
  );
}
