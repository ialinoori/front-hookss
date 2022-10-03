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
  import queryString from "query-string";
import Layout from "@/containers/Layout";
import PaginationComponent from "@/common/Pagination";
  
  export default function CategoryPage({ blogsData, postCategories }) {
   
    return (
      <Layout>
         <div className="bg-gray-50">
        <div className="container mx-auto lg:max-w-screen-xl px-4 md:px-0">
        <MobileCategory postCategories={postCategories}/>
          <div className="grid gap-8 md:grid-cols-12 md:grid-rows-[60px_minmax(300px,_1fr)] min-h-screen">
            {/* categoty desktop */}
            <div className=" hidden md:block md:row-span-2 md:col-span-3">
              <DesktopCategory postCategories={postCategories}/>
             
            </div>
  
            {/* category mobile */}
            
  
            {/* sortbar desktop */}
            <div className=" hidden md:block md:col-span-9">
               <SorBar/>
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
  
  export async function getServerSideProps(context) {
    const {query,req} = context;
    console.log(query);
    console.log(queryString.stringify(query));
    const { data: result } = await axios.get(
      `http://localhost:5000/api/posts?${queryString.stringify(query)}`,{
        withCredentials:true,
        headers:{
          Cookie: req.headers.cookie || "",
        }
      }
    );
    const { data: postCategories } = await axios.get(
      "http://localhost:5000/api/post-category"
    );
    const { data } = result;
  
    return {
      props: {
        blogsData: data,
        postCategories: postCategories.data,
      },
    };
  }
  