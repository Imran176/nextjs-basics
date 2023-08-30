import React from "react";
import Link from "next/link";

const errorPage = () => (
  <div>
    <h1>404 - Sorry! Page not found</h1>

    <button>
      <Link as="/error-home" href="/">
        Go to Home
      </Link>
    </button>
  </div>
);

export default errorPage;
