import Link from "next/link";

const SelectCountry = () => {
  return (
    <>
      {/* <div className="selectCountry"></div> */}
      <p>Select a country:</p>
      <ul className="countries">
        <li>
          <Link href="/us">
            <a>U.S.A</a>
          </Link>
        </li>
        <li>
          <Link href="/gb">
            <a>U.K.</a>
          </Link>
        </li>
        <li>
          <Link href="/au">
            <a>Australia</a>
          </Link>
        </li>
        <li>
          <Link href="/ie">
            <a>Ireland</a>
          </Link>
        </li>
        <li>
          <Link href="/ca">
            <a>Canada</a>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default SelectCountry;
