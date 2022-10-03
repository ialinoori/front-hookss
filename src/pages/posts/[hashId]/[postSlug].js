import { toPersianDigits } from "@/utils/toPersianDigits";
import { LinkIcon, BookmarkIcon } from "@heroicons/react/outline";
import { BookmarkIcon as SolideBookmarkIcon } from "@heroicons/react/solid";
import axios from "axios";
import React, { useState } from "react";
import PostInteraction from "../PostInteraction";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MdContentCopy } from "react-icons/md";
import PostList from "@/components/posts/PostList";
import PostComments from "@/components/posts/postComments";
import toLocalDate from "@/utils/toLocalDate";
import Layout from "@/containers/Layout";

const PostPage = ({ post }) => {
  const [copied, setCopied] = useState(false);

  const copyHandler = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <Layout>
       <div >
      <div className="md:max-w-screen-lg container mx-auto">
        <header className="flex flex-col md:flex-row gap-y-5 md:justify-between md:items-start mb-12  mx-auto max-w-screen-md">
          {/* author data */}
          <div className="flex items-stretch">
            <img
              src={post.coverImage}
              className="w-14 h-14 md:w-20 md:h-20 rounded-full ring-2 ring-white"
              
            />
            <div className="flex flex-col mr-4 justify-between">
              <div>
                <span className="text-xs px-2 py-1 rounded-xl bg-blue-100 text-blue-600 hover:text-blue-100 hover:bg-blue-600 transition-all duration-300 cursor-pointer">
                  {post.category.title}
                </span>
                <span className="ml-2">علی نوری</span>
              </div>
              <span className="font-normal text-xs hidden md:block">
                web developer
              </span>
              <div className="fomt-normal text-myGray-400 text-sm">
                <span>
                  {toLocalDate(post.createdAt)}
                </span>
                <span className="mx-1"></span>
                <span>
                  <span className="ml-1">خواندن</span>
                  <span className="ml-1">
                    {toPersianDigits(post.readingTime)}
                  </span>
                  <span>دقیقه</span>
                </span>
              </div>
            </div>
          </div>
          {/* interactions buttons */}
          <div className="flex">
            <button>
              <LinkIcon className="h-6 w-6 hover:text-black text-gray-500 cursor-pointer" />
            </button>
            <button className="mr-4 border border-gray-300 text-gray-500 hover:text-gray-600 rounded-full px-3 py-1 flex items-center">
              <span className="ml-1 text-xs">
                {post.isBookmarked ? "ذخیره" : "ذخیره شده"}
              </span>
              {post.isBookmarked ? (
                <SolideBookmarkIcon className="h-6 w-6 fill-current" />
              ) : (
                <BookmarkIcon className="h-6 w-6 stroke-current" />
              )}
            </button>
          </div>
        </header>

        <main className="prose prose-xl prose-slate prose-h1:text-5xl prose-h1:font-extrabold prose-h2:text-2xl prose-h2:font-bold prose-p:leading-8 md:prose-p:text-lg md:prose-p:leading-10 prose-img:rounded-xl  prose-a:text-blue-500 mb-8 max-w-screen-md mx-auto">
          <h1>{post.title}</h1>
          <h2>عنوان اول تستی</h2>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
          <img src={post.coverImage} />
          <h2>عنوان تستی دوم</h2>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
          <h2>نحوه کانفیگ تیلویند</h2>
          <p>
            بدون استفاده از<a href="https://hightlightjs.org">hightlight.js</a>{" "}
            میتوان به سادگی کد ها را داخل محتوای بلاگها قرار داد!
          </p>
          <p>
            برای مثال برای کانفیگ تیلویند باید از فایل
            <code>tailwind.config.js</code> استفاده کرد.
          </p>
          <pre dir="ltr">
            {`module.exports = {
                    content: [
                      "./src/pages/**/*.{js,ts,jsx,tsx}",
                      "./src/components/**/*.{js,ts,jsx,tsx}",
                      "./src/containers/**/*.{js,ts,jsx,tsx}",
                      "./src/common/**/*.{js,ts,jsx,tsx}",
                    ],
                    theme: {
                      extend: {
                        fontFamily: {
                          sans: ["iranyekan"],
                        }
                  
                      },
                    },
                    plugins: [require("@tailwindcss/aspect-ratio"),require("@tailwindcss/typography")],
                    
                  }`}
          </pre>
        </main>

        {/* post tags like-bookmark */}
        <section className="mt-10">
          <ul className="flex items-center flex-wrap gap-x-4 mb-6">
            {["فرانت اند", "جاوااسکریپت", "ریکت", "Next.js"].map(
              (tag, index) => {
                return (
                  <li
                    key={index}
                    className="px-3 py-1 rounded-2xl bg-gray-200 hover:bg-gray-100 transition-all cursor-pointer text-gray-600 text-sm mb-3 block"
                  >
                    {tag}
                  </li>
                );
              }
            )}
          </ul>
          <div className="flex items-center flex-col gap-y-6 md:flex-row md:justify-between">
            {/* like-comments-bookmark */}

            <PostInteraction
              post={post}
              className="justify-evenly w-full md:w-auto"
            />

            {/* share btns */}
            <div className="flex items-center gap-x-6 justify-between w-full md:w-auto ">
              <div className="flex items-center md:gap-x-4 gap-x-3 md:w-auto justify-between">
                <a
                  className="block"
                  rel="noreferrer "
                  target="_blank"
                  href={`https://www.linkedin.com/sharing/sharer-offsite/?url=${process.env.NEXT_PUBLIC_DOMIAN_URL}/posts/${post.hashId}/${post.slug}`}
                >
                  <IoLogoLinkedin
                    size={30}
                    className="fill-gray-400 hover:fill-gray-500 transition-all duration-300 cursor-pointer"
                  />
                </a>

                <a className="block" rel="noreferrer " target="_blank">
                  <IoLogoTwitter
                    size={30}
                    className="fill-gray-400 hover:fill-gray-500 transition-all duration-300 cursor-pointer"
                  />
                </a>

                <a className="block" rel="noreferrer " target="_blank">
                  <FaTelegram
                    size={30}
                    className="fill-gray-400 hover:fill-gray-500 transition-all duration-300 cursor-pointer"
                  />
                </a>
              </div>
              <div className="relative">
                <CopyToClipboard
                  text={`${process.env.NEXT_PUBLIC_DOMIAN_URL}/posts/${post.hashId}/${post.slug}`}
                  onCopy={copyHandler}
                >
                  <div className="bg-gray-100 border px-3 py-1 rounded-2xl text-gray-600 flex items-center gap-x-2 cursor-pointer">
                    <span>کپی لینک</span>
                    <MdContentCopy size={20} />
                  </div>
                </CopyToClipboard>
                {copied && (
                  <span className="absolute bottom-10 left-7 bg-blue-500 px-3 py-1 rounded-2xl text-white">
                    کپی شد
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>
        <hr className="mt-20"/>
        {/* related post */}
        <section className="mt-20">
          <h2 className="font-extrabold text-2xl md:text-3xl mb-8">پست های مشابه</h2>
          <div className="grid grid-cols-6 gap-x-8">
            <PostList blogsData={post.related} />
          </div>
        </section>
        {/* post comments */}
        <PostComments post={post}/>
      </div>
    </div>
    </Layout>
   
  );
};

export default PostPage;

export async function getServerSideProps(ctx) {
  const { query,req } = ctx;
  const {
    data: { data },
  } = await axios.get(`http://localhost:5000/api/posts/${query.postSlug}`,{
    withCredentials:true,
    headers:{
      Cookie:req.headers.cookie || ''
    }
  });
  console.log(query);

  return {
    props: {
      post: data,
    },
  };
}
