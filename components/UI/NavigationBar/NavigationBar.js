import Logo from '../Logo/Logo';

import Link from 'next/link';

import NavigationBarStyle from './NavigationBar.module.css';

const NavigationBar = (props) => {
  //   return (
  //     <nav>
  //       <ul>
  //         <li></li>
  //       </ul>
  //     </nav>
  //   );

  return (
    <header className={NavigationBarStyle.Header}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <Link href="/posts">
            <li>
              <a>Posts</a>
            </li>
          </Link>
          <Link href="/contact">
            <li>
              <a>Contact</a>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default NavigationBar;
