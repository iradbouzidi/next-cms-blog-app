import React from "react";

import "tailwindcss/tailwind.css";
import "../styles/globals.scss";
import { Layout } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;

// https://www.youtube.com/watch?v=HYv55DhgTuA
// https://github1s.com/adrianhajdin/project_graphql_blog
