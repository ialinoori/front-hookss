import React from "react";
import Link from "next/link";
import Layout from "@/containers/Layout";
import { useAuth } from "@/context/AuthContext";

const HomePage = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <Layout>
      <div className="container mx-auto lg:max-w-screen-xl">
        <h1 className="text-2xl font-bold">
            {user && <span className="ml-2">سلام{user.name}</span>}
            <span>خوش اومدی به next-app</span>
        </h1>
      </div>
    </Layout>
  );
};

export default HomePage;
