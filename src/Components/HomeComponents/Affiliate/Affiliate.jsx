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
      <h1 className="text-center text-4xl font-bold mt-10 mb-4">
        Refer customers and start earning cash today!
      </h1>
      <div className="w-full flex justify-center items-center">
        <button className="p-3 px-8 bg-blue-600 text-white rounded-full">
          Become an affiliate
        </button>
      </div>
      <FaqSection></FaqSection>
      <JoinLeague></JoinLeague>
    </div>
  );
}
