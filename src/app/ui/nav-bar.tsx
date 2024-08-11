import Link from "next/link";

type NavBarProps = {
  bgColor: string;
};

export function NavBar({ bgColor }: NavBarProps) {
  return (
    <div className={`navbar bg-${bgColor}`}>
      <div className="navbar-start">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
            style={{ width: "2rem", height: "2rem" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className="navbar-center">
        <Link href="/" className="btn btn-ghost text-xl">
          Blisko
        </Link>
      </div>
      <div className="navbar-end">
        <button className="btn btn-square btn-ghost">
          <svg
            className="svg-icon h-"
            style={{
              width: "2em",
              height: "2em",
              verticalAlign: "middle",
              fill: "currentColor",
              overflow: "hidden",
            }}
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M896 490.666667V810.666667a85.333333 85.333333 0 0 1-85.333333 85.333333H213.333333a85.333333 85.333333 0 0 1-85.333333-85.333333V213.333333a85.333333 85.333333 0 0 1 85.333333-85.333333h320a21.333333 21.333333 0 0 1 21.333334 21.333333v42.666667a21.333333 21.333333 0 0 1-21.333334 21.333333H213.333333v597.333334h597.333334v-320a21.333333 21.333333 0 0 1 21.333333-21.333334h42.666667a21.333333 21.333333 0 0 1 21.333333 21.333334z m-12.373333-332.373334l-17.92-17.92a42.666667 42.666667 0 0 0-29.866667-12.373333h-12.8a42.666667 42.666667 0 0 0-29.866667 12.373333l-76.8 76.8a21.333333 21.333333 0 0 0 0 29.866667l60.586667 60.586667a21.333333 21.333333 0 0 0 29.866667 0l76.8-76.8a42.666667 42.666667 0 0 0 12.373333-29.866667v-12.8a42.666667 42.666667 0 0 0-12.373333-29.866667zM334.08 609.706667l-33.706667 85.333333a21.333333 21.333333 0 0 0 4.693334 23.04 21.333333 21.333333 0 0 0 23.04 4.693333l85.333333-33.706666a85.333333 85.333333 0 0 0 29.013333-18.773334L725.333333 390.4a21.333333 21.333333 0 0 0 0-29.866667L663.466667 298.666667a21.333333 21.333333 0 0 0-29.866667 0l-280.746667 282.026666a85.333333 85.333333 0 0 0-18.773333 29.013334z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
