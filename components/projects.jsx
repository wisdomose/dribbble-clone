import Image from "next/image";
import Link from "next/link";

const shots = [
  {
    image:
      "https://cdn.dribbble.com/userupload/3156246/file/original-061cc043229c4d55be0f4cabd2bbee2c.jpg?compress=1&resize=640x480&vertical=top",
    profile: {
      image:
        "https://cdn.dribbble.com/users/31348/avatars/mini/4dcfd44c376976fee80a5e98b68af948.jpg?1522783999",
      username: "DkNG",
      type: "PRO",
    },
    stats: {
      likes: 48,
      seen: "2.7k",
    },
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/3155630/file/original-6d24a6c041f3ceb48bc7e9cab47c8ceb.jpg?compress=1&resize=640x480&vertical=top",
    profile: {
      image:
        "https://cdn.dribbble.com/users/52084/avatars/mini/692992651656234d8bddb5823a090f98.jpg?1510596786",
      username: "Steve Wolf",
      type: "PRO",
    },
    stats: {
      likes: 65,
      seen: "8.5k",
    },
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/3153602/file/original-f4c2b92cdcdbb74b06adcbe35f8103ab.png?compress=1&resize=640x480&vertical=top",
    profile: {
      image:
        "https://cdn.dribbble.com/users/238864/avatars/mini/357767cb3c77fac6eb297eb521b511d1.jpg?1638249633",
      username: "Jordon Cheung",
      type: "",
    },
    stats: {
      likes: 71,
      seen: "9.5k",
    },
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/3155408/file/original-5555c062b34195b039536857c4014290.png?compress=1&resize=640x480&vertical=top",
    profile: {
      image:
        "https://cdn.dribbble.com/users/414979/avatars/mini/1305d804ae3e46b11fd1389fac65cccf.png?1566958767",
      username: "Unfold",
      type: "team",
    },
    stats: {
      likes: 92,
      seen: "13.8k",
    },
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/3154826/file/original-1865b79356d81ef5a056119a84e6f68a.png?compress=1&resize=640x480&vertical=top",
    profile: {
      image:
        "https://cdn.dribbble.com/users/4053754/avatars/mini/9608b1c67caac70b6f1a28dbe9cf3f8a.png?1634661523",
      username: "Phenomenon Studio",
      type: "team",
    },
    stats: {
      likes: 136,
      seen: "20.7k",
    },
  },
  {
    image:
      "https://cdn.dribbble.com/users/5606997/screenshots/18836613/media/d524a8e312290af643451122763ecc9a.png?compress=1&resize=640x480&vertical=top",
    profile: {
      image:
        "https://cdn.dribbble.com/users/485324/avatars/mini/479e0aa76edbad47c51f159fd88e2bfa.png?1551975218",
      username: "Fireart studio",
      type: "team",
    },
    stats: {
      likes: 66,
      seen: "6.1k",
    },
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/3154171/file/original-ad38e39c075154ac5a5bdb9766071619.png?compress=1&resize=640x480&vertical=top",
    profile: {
      image:
        "https://cdn.dribbble.com/userupload/3154171/file/original-ad38e39c075154ac5a5bdb9766071619.png?compress=1&resize=640x480&vertical=top",
      username: "Halo Lab",
      type: "team",
    },
    stats: {
      likes: 255,
      seen: "24k",
    },
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/3155075/file/original-6feaee66aa021089497fe5d31f7f5cde.png?compress=1&resize=640x480&vertical=top",
    profile: {
      image:
        "https://cdn.dribbble.com/users/418188/avatars/mini/427ef1baf4b90c9ccdd2a25fa272fe73.jpg?1635929741",
      username: "tubik",
      type: "team",
    },
    stats: {
      likes: 74,
      seen: "8.8k",
    },
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/3154782/file/original-2423154d18c350d35bb02b2376ae7f35.png?compress=1&resize=640x480&vertical=top",
    profile: {
      image:
        "https://cdn.dribbble.com/users/2186433/avatars/mini/3069789b3e82b9472060f2e381982b3c.jpg?1521123933",
      username: "canopy",
      type: "team",
    },
    stats: {
      likes: 80,
      seen: "7.5k",
    },
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/3155316/file/original-fbed70650f3376b6387368aa38504825.jpg?compress=1&resize=640x480&vertical=top",
    profile: {
      image:
        "https://cdn.dribbble.com/users/60266/avatars/mini/64826d925db1d4178258d17d8826842b.png?1549028805",
      username: "Gustavo Zambelli",
      type: "pro",
    },
    stats: {
      likes: 36,
      seen: "3.5k",
    },
  },
];

export default function Projects() {
  return (
    <section className="projects">
      <div className="header">
        <div className="category">
          <button
            className="category__btn header-btn"
            onClick={(e) => e.target.classList.toggle("active")}
            onMouseDown={(e) => e.target.classList.toggle("mouse-down")}
            onMouseUp={(e) => e.target.classList.toggle("mouse-down")}
          >
            <span>Popular</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              role="img"
              className="icon btn-dropdown-caret"
            >
              <path d="M21.5265 8.77171C22.1578 8.13764 22.1578 7.10962 21.5265 6.47555C20.8951 5.84148 19.8714 5.84148 19.24 6.47555L11.9999 13.7465L4.75996 6.47573C4.12858 5.84166 3.10492 5.84166 2.47354 6.47573C1.84215 7.10979 1.84215 8.13782 2.47354 8.77188L10.8332 17.1671C10.8408 17.1751 10.8486 17.183 10.8565 17.1909C11.0636 17.399 11.313 17.5388 11.577 17.6103C11.5834 17.6121 11.5899 17.6138 11.5964 17.6154C12.132 17.7536 12.7242 17.6122 13.1435 17.1911C13.1539 17.1807 13.1641 17.1702 13.1742 17.1596L21.5265 8.77171Z" />
            </svg>
          </button>

          <div className="category__menu">
            <ul>
              <li>
                <Link href="">
                  <a>Popular</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a>News &amp; Noteworthy</a>
                </Link>
              </li>
              <div className="divider"></div>
              <li>
                <Link href="">
                  <a>Marketplace</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <button
          className="filter__btn header-btn"
          onClick={(e) => e.target.classList.toggle("active")}
          onMouseDown={(e) => e.target.classList.toggle("mouse-down")}
          onMouseUp={(e) => e.target.classList.toggle("mouse-down")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            role="img"
            className="icon filter-icon icon-14"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 6C0 5.17157 0.671573 4.5 1.5 4.5H22.5C23.3284 4.5 24 5.17157 24 6C24 6.82843 23.3284 7.5 22.5 7.5H1.5C0.671573 7.5 0 6.82843 0 6ZM3 12C3 11.1716 3.67157 10.5 4.5 10.5H19.5C20.3284 10.5 21 11.1716 21 12C21 12.8284 20.3284 13.5 19.5 13.5H4.5C3.67157 13.5 3 12.8284 3 12ZM7.5 16.5C6.67157 16.5 6 17.1716 6 18C6 18.8284 6.67157 19.5 7.5 19.5H16.5C17.3284 19.5 18 18.8284 18 18C18 17.1716 17.3284 16.5 16.5 16.5H7.5Z"
            />
          </svg>
          <span>Filters</span>
        </button>
      </div>
      <div className="projects__wrapper">
        {shots.map((shot, index) => (
          <Shot key={index} {...shot} />
        ))}
      </div>
      <button className="scroll__to__top" title="back to top">
        <Image
          src="https://cdn.dribbble.com/assets/icon-backtotop-d9d209c36a169637612a8fe4a1f15ab9e5763a20dbe5b7706df4e23aadf6052e.png"
          width={50}
          height={50}
        />
      </button>
    </section>
  );
}

function Shot(props) {
  return (
    <div className="shot">
      <div className="image-wrapper">
        <Image src={props.image} layout="fill" objectFit="cover" />
        <div className="faker"></div>

        <div className="shot__action">
          <p>{props.profile.username}</p>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 24 24"
              viewBox="0 0 24 24"
              role="img"
              className="icon "
            >
              <path d="m22 5h-11l-2-3h-7c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-13c0-1.104-.896-2-2-2zm-6 10h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h-3c-.55 0-1-.45-1-1s.45-1 1-1h3v-3c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z" />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 24 24"
              viewBox="0 0 24 24"
              role="img"
              className="icon "
            >
              <path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="row__wrapper">
        <div className="profile">
          <Image
            src={props.profile.image}
            width={24}
            height={24}
            objectFit="cover"
            className="profile__image"
          />
          <p className="profile__username">
            {/* <span> */}
            {props.profile.username}
            {/* </span> */}
          </p>
          {!!props.profile.type && (
            <span className="profile__tag">{props.profile.type}</span>
          )}
        </div>
        <div className="stats">
          <div className="stats__likes stats__report">
            <button title="Like this shot">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
                viewBox="0 0 24 24"
                role="img"
                className="icon fill-current shot-tools-icon"
              >
                <path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z" />
              </svg>
            </button>
            <span>{props.stats.likes}</span>
          </div>
          <div className="stats__seen stats__report">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={14}
              height={11}
              viewBox="0 0 14 11"
              fill="none"
              role="img"
              className="icon fill-current shot-tools-icon"
            >
              <path d="M7 3.45833C5.87242 3.45833 4.95833 4.37242 4.95833 5.5C4.95833 6.62758 5.87242 7.54167 7 7.54167C8.12758 7.54167 9.04167 6.62758 9.04167 5.5C9.04167 4.37242 8.12758 3.45833 7 3.45833ZM7 0.25C3.13425 0.25 0 4.625 0 5.5C0 6.375 3.13425 10.75 7 10.75C10.8657 10.75 14 6.375 14 5.5C14 4.625 10.8657 0.25 7 0.25ZM7 8.70833C5.22783 8.70833 3.79167 7.27217 3.79167 5.5C3.79167 3.72783 5.22783 2.29167 7 2.29167C8.77217 2.29167 10.2083 3.72783 10.2083 5.5C10.2083 7.27217 8.77217 8.70833 7 8.70833Z" />
            </svg>

            <span>{props.stats.seen}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
