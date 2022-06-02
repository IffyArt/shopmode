const HeroHeader = () => {
  return (
    <header className='hero-header'>
      <main className='hero-header__container'>
        <article className='hero-header__info'>
          <sub className='margin-bottom-small'>
            <b>COVID-19</b> Be Aware Of Coronavirus
          </sub>
          <h1>
            <b>為你</b>自己購買
            <br />
            最想要的商品
          </h1>
          <p className='margin-top-small'>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer tookng.
          </p>
          <a href='#' className='button margin-top'>
            查看商品列表
          </a>
        </article>
        <aside className='hero-header__cover'>
          <img src='images/cover.png' alt='人像' />
        </aside>
      </main>
    </header>
  );
};

export default HeroHeader;
