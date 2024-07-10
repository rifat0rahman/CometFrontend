import { createBrowserRouter } from "react-router-dom";
import HomeRoot from "../../HomeComponents/HomeRoot";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../../HomeComponents/Home/Home";
import DeshboardRoot from "../../DeshboardComponents/DeshboardRoot";
import MyContent from "../../DeshboardComponents/userDeshboard/MyContent/MyContent";
import TopicCreation from "../../DeshboardComponents/userDeshboard/TopicCreation/TopicCreation";
import PostCreation from "../../DeshboardComponents/userDeshboard/PostCreation/PostCreation";
import AiCarousel from "../../DeshboardComponents/userDeshboard/AiCarousel/AiCarousel";
import PostInspiration from "../../DeshboardComponents/userDeshboard/PostInspiration/PostInspiration";
import SaveContent from "../../DeshboardComponents/userDeshboard/SaveContent/SaveContent";
import AutoPilot from "../../DeshboardComponents/userDeshboard/AutoPilot/AutoPilot";
import WorkSpace from "../../DeshboardComponents/userDeshboard/WorkSpace/WorkSpace";
import Account from "../../DeshboardComponents/userDeshboard/Account/Account";
import Billing from "../../DeshboardComponents/userDeshboard/Billing/Billing";
import Support from "../../DeshboardComponents/userDeshboard/Support/Support";
import ProductRoadmap from "../../DeshboardComponents/userDeshboard/ProductRoadmap/ProductRoadmap";
import Pricing from "../../HomeComponents/Pricing/Pricing";
import Testimonials from "../../HomeComponents/Testimonials/Testimonials";
import Blog from "../../HomeComponents/Blog/Blog";
import FAQ from "../../HomeComponents/FAQ/FAQ";
import Affiliate from "../../HomeComponents/Affiliate/Affiliate";
import AuthRoot from "../../HomeComponents/Authcatin/AuthRoot";
import Login from "../../HomeComponents/Authcatin/Login";
import SignUp from "../../HomeComponents/Authcatin/SignUp";
import DeshboardHome from "../../DeshboardComponents/userDeshboard/DeshboardHome/DeshboardHome";
import Setting from "../../DeshboardComponents/userDeshboard/Setting/Setting";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoot></HomeRoot>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/pricing",
        element: <Pricing></Pricing>,
      },
      {
        path: "/testimonilas",
        element: <Testimonials></Testimonials>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/affiliate",
        element: <Affiliate></Affiliate>,
      },
    ],
  },
  {
    path: "/",
    element: <DeshboardRoot></DeshboardRoot>,
    children: [
      {
        path: "/deshboard_home",
        element: <DeshboardHome></DeshboardHome>,
      },
      {
        path: "/my_content",
        element: <MyContent></MyContent>,
      },
      {
        path: "/topic_creation",
        element: <TopicCreation></TopicCreation>,
      },
      {
        path: "/post_creation",
        element: <PostCreation></PostCreation>,
      },
      {
        path: "/ai_carousel",
        element: <AiCarousel></AiCarousel>,
      },
      {
        path: "/post_inspiration",
        element: <PostInspiration></PostInspiration>,
      },
      {
        path: "/save_content",
        element: <SaveContent></SaveContent>,
      },
      {
        path: "/auto_pilot",
        element: <AutoPilot></AutoPilot>,
      },
      {
        path: "/workspace",
        element: <WorkSpace></WorkSpace>,
      },
      {
        path: "/account",
        element: <Account></Account>,
      },
      {
        path: "/billing",
        element: <Billing></Billing>,
      },
      {
        path: "/support",
        element: <Support></Support>,
      },
      {
        path: "/product_roadmap",
        element: <ProductRoadmap></ProductRoadmap>,
      },
      {
        path: "/setting",
        element: <Setting></Setting>,
      },
    ],
  },
  {
    path: "/",
    element: <AuthRoot></AuthRoot>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
