import Image from "next/image";
import Link from "next/link";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer>
      <Logo className="footer-logo" />
      <p className="footer__description">
        Dribbble is the world’s leading community for creatives to share, grow,
        and get hired.
      </p>

      <ul className="footer__social">
        <li>
          <Link href="">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
                role="img"
                className="icon fill-current"
              >
                <rect width={32} height={32} fill="black" fillOpacity={0} />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16 0C7.16703 0 0 7.16703 0 16C0 24.833 7.16703 32 16 32C24.8156 32 32 24.833 32 16C32 7.16703 24.8156 0 16 0ZM26.5683 7.37527C28.4772 9.70065 29.6226 12.6681 29.6573 15.8785C29.2061 15.7918 24.6941 14.872 20.1475 15.4447C20.0434 15.2191 19.9566 14.9761 19.8525 14.7332C19.5748 14.0738 19.2625 13.397 18.9501 12.7549C23.9826 10.7072 26.2733 7.75705 26.5683 7.37527ZM16 2.36009C19.4707 2.36009 22.6464 3.66161 25.0586 5.7961C24.8156 6.14317 22.7505 8.90239 17.8915 10.7245C15.6529 6.61171 13.1714 3.24512 12.7896 2.72451C13.8134 2.48156 14.8894 2.36009 16 2.36009ZM10.1866 3.64425C10.551 4.13015 12.9805 7.5141 15.2538 11.5401C8.86768 13.2408 3.22777 13.2061 2.62039 13.2061C3.50542 8.9718 6.36876 5.44902 10.1866 3.64425ZM2.32538 16.0174C2.32538 15.8785 2.32538 15.7397 2.32538 15.6009C2.9154 15.6182 9.54447 15.705 16.3644 13.6573C16.7636 14.4208 17.128 15.2017 17.4751 15.9826C17.3015 16.0347 17.1106 16.0868 16.9371 16.1388C9.89154 18.4121 6.14317 24.6247 5.8308 25.1453C3.6616 22.7332 2.32538 19.5228 2.32538 16.0174ZM16 29.6746C12.8416 29.6746 9.92625 28.5987 7.61822 26.7939C7.86117 26.2907 10.6377 20.9458 18.3427 18.256C18.3774 18.2386 18.3948 18.2386 18.4295 18.2213C20.3557 23.2017 21.1367 27.3839 21.3449 28.5813C19.6963 29.2928 17.8915 29.6746 16 29.6746ZM23.6182 27.3319C23.4794 26.4989 22.7505 22.5076 20.9631 17.5965C25.2495 16.9197 28.9978 18.0304 29.4664 18.1866C28.8764 21.987 26.6898 25.2668 23.6182 27.3319Z"
                />
              </svg>
            </a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-labelledby="aeiuvpo1t5det8xjf8iksv14xwov9qbk"
                role="img"
                viewBox="0 0 24 24"
                className="icon fill-current"
              >
                <title id="aeiuvpo1t5det8xjf8iksv14xwov9qbk">
                  Twitter icon
                </title>
                <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
              </svg>
            </a>
          </Link>
        </li>

        <li>
          <Link href="">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-labelledby="aggndqcpw7c3iv2uwx878jc6l03zd2pr"
                role="img"
                viewBox="0 0 24 24"
                className="icon fill-current"
              >
                <title id="aggndqcpw7c3iv2uwx878jc6l03zd2pr">
                  Facebook icon
                </title>
                <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0" />
              </svg>
            </a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fillRule="evenodd"
                clipRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="1.414"
                role="img"
                className="icon fill-current"
              >
                <path d="M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.048 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.01-3.233-.048c-.78-.036-1.203-.166-1.485-.276-.374-.145-.64-.318-.92-.598-.28-.28-.453-.546-.598-.92-.11-.282-.24-.705-.276-1.485C1.45 10.39 1.44 10.136 1.44 8s.01-2.39.048-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276C5.61 1.45 5.864 1.44 8 1.44zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z" />
              </svg>
            </a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-labelledby="a6u68jds0agol7vajbdj55ececz2u5yl"
                role="img"
                viewBox="0 0 24 24"
                className="icon fill-current"
              >
                <title id="a6u68jds0agol7vajbdj55ececz2u5yl">
                  Pinterest icon
                </title>
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
              </svg>
            </a>
          </Link>
        </li>
      </ul>

      <div className="footer__navigation">
        <ul>
          <p className="list__heading">For designers</p>
          <li>
            <Link href="">
              <a>Go Pro!</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>Explore design work</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>Design blog</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>Overtime podcast</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>Dribbble meetups</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>Playoffs</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>Code of conduct</a>
            </Link>
          </li>
        </ul>

        <div>
          <ul>
            <p className="list__heading">Hire designers</p>
            <li>
              <Link href="">
                <a>Post a job opening</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>Post a freelance project</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>Search for designers</a>
              </Link>
            </li>
          </ul>

          <ul>
            <p className="list__heading">Brands</p>
            <li>
              <Link href="">
                <a>Advertise with us</a>
              </Link>
            </li>
          </ul>
        </div>

        <ul>
          <p className="list__heading">Company</p>
          <li>
            <Link href="">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>Careers</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>Support</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>Media kit</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>Testimonials</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>API</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>Terms of service</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>Privacy policy</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>Cookie policy</a>
            </Link>
          </li>
        </ul>

        <div>
          <ul>
            <p className="list__heading">Directories</p>
            <li>
              <Link href="">
                <a>Design jobs</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>Designers for hire</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>Freelance designers for hire</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>Tags</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>Places</a>
              </Link>
            </li>
          </ul>

          <ul>
            <p className="list__heading">Design assets</p>
            <li>
              <Link href="">
                <a>Creative Market</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>Fontspring</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>Font Squirrel</a>
              </Link>
            </li>
          </ul>
        </div>

        <ul>
          <p className="list__heading">Company</p>
          <li>
            <Link href="">
              <a>Freelancing</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>Design Hiring</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>Design Portfolio</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>Design Education</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>Design Education</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>Creative Process</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>Design Industry Trends</a>
            </Link>
          </li>
        </ul>
      </div>

      <div className="footer__closing">
        <p>&copy; 2022 Dribbble. All rights reserved.</p>
        <Image
          src="https://cdn.dribbble.com/assets/dribbble-ball-icon-4e54c54abecf8efe027abe6f8bc7794553b8abef3bdb49cd15797067cf80ca53.svg"
          width={24}
          height={24}
        />
        <p>
          <span>18,839,355</span> shots dribbbled
        </p>
      </div>
    </footer>
  );
}
