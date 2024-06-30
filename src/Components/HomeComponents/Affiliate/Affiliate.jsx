import JoinLeague from "../../ShaireComponents/JoinLeague";
import SubBanner from "../../ShaireComponents/SubBanner";
import FaqSection from "../Pricing/FaqSection";

export default function Affiliate() {
  return (
    <div className="w-full">
      <SubBanner
        name={`Earn up to $297.50 on each sale!`}
        title={`Find out why you should become a Dottypost affiliate today!`}
      />
      <FaqSection></FaqSection>
      <JoinLeague></JoinLeague>
    </div>
  );
}
