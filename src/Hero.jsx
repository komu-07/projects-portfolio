import HeroImg from './assets/portfolio.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Project portfolio</h1>

          <p>
            This site contains all my react and javascript projects. You can
            take a look at all my work here. Just click on any of these cards
            and you will quickly navigate to that particular project
          </p>
        </div>
        <div className="img-container">
          <img src={HeroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
