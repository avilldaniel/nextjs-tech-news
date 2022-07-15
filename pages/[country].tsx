import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import loadPosts from "../lib/fetch-posts";
import noImage from "../public/noImage.png";

export const countries = ["us", "gb", "au", "ie", "ca"];
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
  const router = useRouter();
  // console.log("page articles:", articles);
  return (
    <ul className="articles">
      {articles.map((article: Article, key: number) => {
        return (
          <li key={key}>
            <div className="content">
              <Image
                src={
                  article.urlToImage
                    ? `https://res.cloudinary.com/demo/image/fetch/${article.urlToImage!}`
                    : noImage
                }
                alt={article.title}
                width={250}
                height={250}
              ></Image>
              <article>
                <a href={article.url} target="_blank" rel="noreferrer">
                  {article.title}
                </a>
              </article>
            </div>

            <summary>{article.description}</summary>
          </li>
        );
      })}
    </ul>
  );
};

export default Country;
