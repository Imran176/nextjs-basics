import React from "react";
import Link from "next/link";

import User from "../../components/User";

const authPage = () => (
  <div>
    <h1>Auth Page</h1>

    <div>
      <User name="NextJs Dev" age="2" />
      <button>
        <Link href="/">Go to Home</Link>
      </button>
    </div>
  </div>
);

export default authPage;
