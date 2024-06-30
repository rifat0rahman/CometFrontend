import JoinLeague from "../../ShaireComponents/JoinLeague";
import SubBanner from "../../ShaireComponents/SubBanner";
import BlogComponent from "../Home/BlogComponent";
import BlogCard from "./BlogCard";

export default function Blog() {
  return (
    <div className="w-full">
      <SubBanner
        name={`Learn how to grow your audience on LinkedIn`}
        title={`Our Blogs`}
      />
      <BlogComponent></BlogComponent>
      <div className="container mx-auto px-3">
        <h1 className="text-3xl font-bold my-5">All Blogs</h1>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
      </div>
      <JoinLeague></JoinLeague>
    </div>
  );
}
