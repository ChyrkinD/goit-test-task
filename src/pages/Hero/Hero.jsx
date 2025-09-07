import css from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={css.hero}>
      <div className={css.hero_content}>
        <h1>Campers of your dreams</h1>
        <p>You can find everything you want in our catalog</p>
        <button>View Now</button>
      </div>
    </section>
  );
}
