import "../styles/home.css";
import heroImage from "../assets/images/SH1.png";

import {
  TbBrandGithub,
  TbMail,
  TbCreativeCommons,
  TbSparkles,
} from "react-icons/tb";

function Home() {
  return (
    <section className="home-hero">
      <div className="home-image-side">
        <div className="home-image-glow"></div>

          <img
            className="home-profile-image"
            src={heroImage}
            alt="شيماء حاج"
          />
        </div>

      <div className="home-content-side">
        <div className="home-title-block">
          <div className="home-my-row">
            <span className="home-edge-line"></span>
            <h1>My</h1>
          </div>

          <h2>Portfolio</h2>
        </div>

        <p className="home-description">
          يسرّني وجودكم هنا، في مساحةٍ توثّق رحلةً آمنتُ خلالها بأن العلم عبادة، وأن الأثر الطيب يبدأ بخطوةٍ صادقة نحو التعلّم. بين هذه الصفحات تجدون محطاتٍ من تجربتي في التطبيقات العملية لتدريس علوم الحاسوب في المدرسة الثانوية الشاملة، حيث تتحوّل الأفكار إلى ممارسات، والتجارب إلى خبرات، والتعلّم إلى أثرٍ يبقى. أسعد بمرافقتكم في هذه الرحلة، وأرجو أن تجدوا فيها ما يُمتع الفكر ويُلهم السعي.
        </p>
        
        <div className="home-author">
            <span>شيماء حاج</span>
            <TbSparkles />
        </div>
        
        <div className="home-socials">
          <a
            href="https://github.com/ShimaaHaj"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <TbBrandGithub />
          </a>

          <a href="mailto:shimaa.haj.2003@gmail.com" aria-label="Email">
            <TbMail />
          </a>

          <a
            href="https://creativecommons.org/licenses/by-nc/4.0/"
            target="_blank"
            rel="noreferrer"
            aria-label="Creative Commons"
          >
            <TbCreativeCommons />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;