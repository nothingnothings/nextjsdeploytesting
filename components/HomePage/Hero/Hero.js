import Image from 'next/image';

import HeroStyle from './Hero.module.css';

import Head from 'next/head';

const Hero = () => {
  return (
    <section className={HeroStyle.Hero}>
      <div className={HeroStyle.Image}>
        <Image
          src={'/images/site/hero.jpg'}
          alt="Profile picture"
          height={300}
          width={300}
        />
      </div>
      <h1>Hi, I'm Arthur.</h1>
      <p>This is my blog about web development.</p>
    </section>
  );
};

export default Hero;
