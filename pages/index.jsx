import Footer from "components/footer";
import Logo from "components/logo";
import Projects from "components/projects";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleIsOpen = () => setIsOpen((s) => !s);
  return (
    <div className="container">
      {/* header */}
      <header className={!isOpen ? "close" : undefined}>
        <p>
          📚 Curious about learning UI Design? Check out our new 4 week Intro to
          UI Design course. Flexible Learning. Live Mentorship. Figma
          Fundamentals.
          <span> Enroll now for 25% off.</span>
        </p>
        <button onClick={toggleIsOpen}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            viewBox="0 0 24 24"
            role="img"
            className="icon icon-16 text-white fill-current"
          >
            <path d="m14.828 12 4.586-4.586c.781-.781.781-2.047 0-2.828-.78-.781-2.048-.781-2.828 0l-4.586 4.586-4.586-4.586c-.78-.781-2.048-.781-2.828 0-.781.781-.781 2.047 0 2.828l4.586 4.586-4.586 4.586c-.781.781-.781 2.047 0 2.828.39.391.902.586 1.414.586s1.024-.195 1.414-.586l4.586-4.586 4.586 4.586c.39.391.902.586 1.414.586s1.024-.195 1.414-.586c.781-.781.781-2.047 0-2.828z" />
          </svg>
        </button>
      </header>

      {/* navigation */}
      <nav>
        <div className="nav__group__1">
          <Link href="/">
            <a className="hide-sm">
              <Logo />
            </a>
          </Link>

          <button className="mobile-menu__btn hide-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 16"
              fill="none"
              role="img"
              className="icon js-site-nav-mobile-menu-open site-nav-mobile-menu-open icon-18 fill-current"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 2C0 1.37868 0.50368 0.875 1.125 0.875H16.875C17.4963 0.875 18 1.37868 18 2C18 2.62132 17.4963 3.125 16.875 3.125H1.125C0.50368 3.125 0 2.62132 0 2ZM0 8C0 7.37868 0.50368 6.875 1.125 6.875H16.875C17.4963 6.875 18 7.37868 18 8C18 8.62132 17.4963 9.125 16.875 9.125H1.125C0.50368 9.125 0 8.62132 0 8ZM1.125 12.875C0.50368 12.875 0 13.3787 0 14C0 14.6213 0.50368 15.125 1.125 15.125H16.875C17.4963 15.125 18 14.6213 18 14C18 13.3787 17.4963 12.875 16.875 12.875H1.125Z"
              />
            </svg>
          </button>

          <ul className="nav__links hide-sm">
            <li>
              <Link href="">
                <a>Inspiration</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>Find Work</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>Learn Design</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>Go Pro</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>Marketplace</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>Hire Designers</a>
              </Link>
            </li>
          </ul>
        </div>
        <Link href="/">
          <a className="hide-md">
            <Logo />
          </a>
        </Link>
        <div className="nav__group__2">
          {/* search icon */}
          <button className="nav__search__btn hide-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              role="img"
              className="icon icon-18 fill-current"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.6002 12.0498C9.49758 12.8568 8.13777 13.3333 6.66667 13.3333C2.98477 13.3333 0 10.3486 0 6.66667C0 2.98477 2.98477 0 6.66667 0C10.3486 0 13.3333 2.98477 13.3333 6.66667C13.3333 8.15637 12.8447 9.53194 12.019 10.6419C12.0265 10.6489 12.0338 10.656 12.0411 10.6633L15.2935 13.9157C15.6841 14.3063 15.6841 14.9394 15.2935 15.33C14.903 15.7205 14.2699 15.7205 13.8793 15.33L10.6269 12.0775C10.6178 12.0684 10.6089 12.0592 10.6002 12.0498ZM11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z"
              />
            </svg>
          </button>

          {/* <ul className="nav__links--secondary"> */}
          {/* <li> */}
          <Link href="">
            <a>Sign in</a>
          </Link>
          {/* </li> */}
          {/* <li> */}
          <Link href="">
            <a className="nav__link__btn hide-sm">Share my work</a>
          </Link>
          {/* </li> */}
          {/* </ul> */}
        </div>
      </nav>

      <section className="header">
        <div className="content">
          <div className="quick__links">
            {[
              "Discover",
              "Animation",
              "Branding",
              "Illustration",
              "Mobile",
              "Print",
              "Product Design",
              "Typography",
              "Web Design",
            ].map((item, index) => (
              <Link key={index} href="">
                <a>{item}</a>
              </Link>
            ))}
          </div>

          <h1>Explore the world’s leading design portfolios</h1>
          <p>
            Millions of designers and agencies around the world showcase their
            portfolio work on Dribbble - the home to the world’s best design and
            creative professionals.
          </p>
          <form className="input__container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              role="img"
              className="icon fill-current search-icon"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.6002 12.0498C9.49758 12.8568 8.13777 13.3333 6.66667 13.3333C2.98477 13.3333 0 10.3486 0 6.66667C0 2.98477 2.98477 0 6.66667 0C10.3486 0 13.3333 2.98477 13.3333 6.66667C13.3333 8.15637 12.8447 9.53194 12.019 10.6419C12.0265 10.6489 12.0338 10.656 12.0411 10.6633L15.2935 13.9157C15.6841 14.3063 15.6841 14.9394 15.2935 15.33C14.903 15.7205 14.2699 15.7205 13.8793 15.33L10.6269 12.0775C10.6178 12.0684 10.6089 12.0592 10.6002 12.0498ZM11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z"
              />
            </svg>

            <input type="text" placeholder="Search..." />
          </form>

          <section className="trending-searches">
            <ul>
              <li>Trending searches</li>
              {[
                "landing page",
                "ios",
                "food",
                "landingpage",
                "uxdesign",
                "add design",
              ].map((item, index) => (
                <li key={index}>
                  <Link href="">
                    <a className="search">{item}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="overlay"></div>
        <video
          src="https://cdn.dribbble.com/uploads/39419/original/4bdaa82bc81bb683e489f8502a338c47.mp4?1657824937"
          type="video/mp4"
          loop
          autoPlay
          muted
        ></video>

        <p className="author">@slickstudio</p>
      </section>
      <Projects />

      <Footer />
    </div>
  );
}
