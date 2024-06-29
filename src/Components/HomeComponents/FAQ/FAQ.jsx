import JoinLeague from "../../ShaireComponents/JoinLeague";
import SubBanner from "../../ShaireComponents/SubBanner";
import FaqSection from "../Pricing/FaqSection";

export default function FAQ() {
  return (
    <div className="w-full">
      <SubBanner
        name={`Frequently asked questions`}
        title={`Your go-to resource for answers to common questions`}
      />
      <FaqSection></FaqSection>
      <JoinLeague></JoinLeague>
    </div>
  );
}
