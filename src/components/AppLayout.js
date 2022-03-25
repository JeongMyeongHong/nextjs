import Link from "next/link";

const AppLayout = () => {
  return (
    <>
      <Link href="/">
        <a>
          <h2>Home</h2>
        </a>
      </Link>
      <Link href="/Calc">
        <a>
          <h2>Calc</h2>
        </a>
      </Link>
      <Link href="/Counter">
        <a>
          <h2>Counter</h2>
        </a>
      </Link>
      <Link href="/Bmi">
        <a>
          <h2>Bmi</h2>
        </a>
      </Link>
    </>
  );
};

export default AppLayout;