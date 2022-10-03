import {
  AdjustmentsIcon,
  ChevronDownIcon,
  BookmarkIcon,
  HeartIcon,
  ChatIcon,
  AnnotationIcon,
  ClockIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";
import PostList from "@/components/posts/PostList";
import MobileCategory from "@/components/posts/MobileCategory";
import SorBar from "@/components/posts/SorBar";
import DesktopCategory from "@/components/posts/DesktopCategory";
import Layout from "@/containers/Layout";
import http from "@/services/httpsService";
import queryString from "query-string";
import Pagination from '@mui/material/Pagination';
import { useRouter } from "next/router";
import PaginationComponent from "@/common/Pagination";

export default function Home({ blogsData, postCategories }) {
  const router = useRouter();

  return (
    <Layout>
      <div>
        <div className="container mx-auto lg:max-w-screen-xl px-4 md:px-0">
          <div className="grid gap-8 md:grid-cols-12 md:grid-rows-[60px_minmax(300px,_1fr)] min-h-screen">
            {/* categoty desktop */}
            <div className=" hidden md:block md:row-span-2 md:col-span-3">
              <DesktopCategory postCategories={postCategories} />
            </div>

            {/* category mobile */}
            <MobileCategory postCategories={postCategories} />

            {/* sortbar desktop */}
            <div className=" hidden md:block md:col-span-9">
              <SorBar />
            </div>
            {/* blogs section */}
            <div className=" md:col-span-9 grid grid-cols-6 gap-8">
              <PostList blogsData={blogsData.docs} />
              <PaginationComponent page={blogsData.page} totalPages={blogsData.totalPages} />
             
           
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ req,query }) {
  // req از کانتکست دی استرکچر شده...
  console.log(query);
  const { data: result } = await http.get(`/posts?${queryString.stringify(query)}`, {
    headers: {
      Cookie: req.headers.cookie || "",
    },
  });
  const { data: postCategories } = await http.get("/post-category");
  const { data } = result;

  return {
    props: {
      blogsData: data,
      postCategories: postCategories.data,
    },
  };
}
