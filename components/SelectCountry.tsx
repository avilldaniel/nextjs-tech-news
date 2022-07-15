import Link from "next/link";
import { useRouter } from "next/router";
import { countries } from "../pages/[country]";

const SelectCountry = () => {
  const router = useRouter();
  const currentRoute = router.asPath;
  // console.log(currentRoute);
  return (
    <>
      <p>Select a country:</p>
      <ul className="countries">
        {countries.map((country, key) => {
          return (
            <li key={key}>
              <Link href={country}>
                <a
                  className={
                    currentRoute == "".concat("/", country) ? "activeLink" : ""
                  }
                >
                  {country == "us"
                    ? "U.S.A."
                    : country == "gb"
                    ? "U.K."
                    : country == "au"
                    ? "Australia"
                    : country == "ie"
                    ? "Ireland"
                    : "Canada"}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SelectCountry;
