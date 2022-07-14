import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { Props } from "next/script";
import loadPosts from "../lib/fetch-posts";

const countries = ["us", "gb", "au", "ie", "ca"];
const paths = countries.map((country) => {
  return {
    params: {
      country: country,
    },
  };
});

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { articles } = await loadPosts(`${params!.country}`); // ! is non-null assertion operator, IDK
  console.log("articles:", articles);
  return {
    props: {
      articles,
    },
  };
};

const Country: NextPage = ({ articles }: any) => {
  console.log("page articles:", articles);
  return (
    <ul>
      {/* {posts.map((post: any) => {
        <li key={post.publishedAt}>{post.title}</li>;
      })} */}
      {/* {posts} */}
    </ul>
  );
};

export default Country;
