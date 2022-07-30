import React from 'react';
import Link from "next/link";

const HomePage = () => {
    return (
        <div>
            this is home page
            <br/>
            <Link href="/blogs">
            <a>go to blogs</a>
            </Link>
        </div>
    );
};

export default HomePage;