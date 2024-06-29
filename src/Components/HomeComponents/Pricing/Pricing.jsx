import JoinLeague from "../../ShaireComponents/JoinLeague";
import SubBanner from "../../ShaireComponents/SubBanner";
import FaqSection from "./FaqSection";

export default function Pricing() {
  return (
    <div className="w-full">
      <SubBanner
        name={`Flexible pricing for everyone`}
        title={`Explore the various subscription options.`}
      />
      <FaqSection></FaqSection>
      <JoinLeague></JoinLeague>
    </div>
  );
}
