import { NextPage, GetStaticPaths, GetStaticProps } from "next";
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
  const res = await loadPosts(`${params!.country}`); // ! is non-null assertion operator, IDK
  const { articles } = await res.json();
  return {
    props: {
      articles: articles,
    },
  };
};

interface Article {
  source?: any;
  author?: string;
  title?: string;
  description?: string;
  url?: string;
  urlToImage?: string;
  publishedAt?: string;
  content?: string;
}

const Country: NextPage = ({ articles }: Article[] | any) => {
  console.log("page articles:", articles);
  return (
    <ul>
      {articles.map((article: Article, key: number) => {
        return (
          <li key={key}>
            {article.source.name}
            {article.title}
            {article.description}
          </li>
        );
      })}
    </ul>
  );
};

export default Country;
