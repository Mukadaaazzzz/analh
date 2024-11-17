/* eslint-disable prettier/prettier */
import React from "react";

import Link from "next/link";

const ShopNow = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4">
          Shop Now
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          We’re working hard to bring you the best collection. Check back soon!
        </p>
        <Link href="/">
          <a
            className="text-lg font-medium text-primary hover:text-secondary transition duration-300"
          >
            Return to Home
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ShopNow;
