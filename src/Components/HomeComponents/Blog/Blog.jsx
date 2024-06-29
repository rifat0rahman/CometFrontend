import JoinLeague from "../../ShaireComponents/JoinLeague";
import SubBanner from "../../ShaireComponents/SubBanner";
import BlogComponent from "../Home/BlogComponent";

export default function Blog() {
  return (
    <div className="w-full">
      <SubBanner
        name={`Learn how to grow your audience on LinkedIn`}
        title={`Our Blogs`}
      />
      <BlogComponent></BlogComponent>
      <JoinLeague></JoinLeague>
    </div>
  );
}
