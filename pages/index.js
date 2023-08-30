import React from "react";
import Link from "next/link";
import Router from "next/router";

const indexPage = (props) => {
  return (
    <div>
      <h1>Main Page - {props.appName}</h1>

      <p>
        Go to{" "}
        <Link as="/auth-link" href="/auth" id="link">
          Auth
        </Link>
      </p>
      <button onClick={() => Router.push("/auth")}>Auth</button>
    </div>
  );
};

// indexPage.getInitialProps=async(context)=>{
indexPage.getInitialProps = (context) => {
  console.log("getInitialProps", context);

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ appName: "NextJs App" });
    }, 1000);
  });
  return promise;
};

export default indexPage;
