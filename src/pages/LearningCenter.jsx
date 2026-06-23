import "../styles/learningCenter.css";

import {
  TbBrain,
  TbCube,
  TbDeviceDesktop,
  TbEye,
  TbRoute,
  TbSparkles,
  TbView360,
  TbWand,
} from "react-icons/tb";

import img1 from "../assets/images/mrkzCo1.jpg";
import img2 from "../assets/images/mrkzCo2.jpg";
import img3 from "../assets/images/mrkzCo3.jpg";
import img4 from "../assets/images/mrkzCo4.jpg";
import img5 from "../assets/images/mrkzCo5.jpg";
import img6 from "../assets/images/mrkzCo6.jpg";
import img7 from "../assets/images/mrkzCo7.jpg";
import img8 from "../assets/images/mrkzCo8.jpg";

const gallery = [img1, img2, img3, img4, img5, img6, img7, img8];

const features = [
  {
    icon: <TbDeviceDesktop />,
    title: "CoSpaces Edu",
    text: "بيئة رقمية لبناء عوالم تفاعلية ثلاثية الأبعاد بطريقة سهلة ومحفزة.",
  },
  {
    icon: <TbBrain />,
    title: "ذكاء اصطناعي",
    text: "توظيف الأفكار الذكية لتوسيع خيال الطلاب وتحويلها إلى مشاهد قابلة للتنفيذ.",
  },
  {
    icon: <TbCube />,
    title: "مجسمات 3D",
    text: "بناء عناصر ومشاهد ثلاثية الأبعاد وربطها بالحركة والتفاعل.",
  },
  {
    icon: <TbView360 />,
    title: "واقع افتراضي",
    text: "مشاهدة المنتج النهائي عبر نظارات VR ليصبح التعلم تجربة محسوسة.",
  },
];

const steps = [
  "التعرّف إلى فكرة المحطة وأهدافها.",
  "بناء عالم رقمي داخل CoSpaces Edu.",
  "إضافة مجسمات ثلاثية الأبعاد وتنسيق المشهد.",
  "استكشاف البيئة النهائية عبر نظارات الواقع الافتراضي.",
];

function LearningCenter() {
  return (
    <section className="learning-page">
      <section className="lc-hero">
        <div className="lc-hero-content">
          <span className="lc-kicker">
            <TbSparkles />
            مركز التعلم
          </span>

          <h1>
            من فكرة صغيرة
            <span> إلى عالم افتراضي</span>
          </h1>

          <p>
            ضمن يوم علوم الحاسوب في المدرسة، قدّمت محطة تعليمية تفاعلية دمجت
            بين الذكاء الاصطناعي، الواقع الافتراضي، والمجسمات ثلاثية الأبعاد
            داخل بيئة CoSpaces Edu، حيث انتقل الطلاب من التلقي إلى التصميم
            والاستكشاف والتجربة.
          </p>

          <div className="lc-hero-tags">
            <span>AI</span>
            <span>VR</span>
            <span>3D</span>
            <span>CoSpaces</span>
          </div>
        </div>

        <div className="lc-hero-visual">
          <div className="lc-image-stack">
            <img src={img1} alt="محطة مركز التعلم" />
          </div>

          <div className="lc-glass-card card-one">
            <TbEye />
            <span>تجربة غامرة</span>
          </div>

          <div className="lc-glass-card card-two">
            <TbWand />
            <span>تعلم بالإبداع</span>
          </div>
        </div>
      </section>

      <section className="lc-features">
        {features.map((item, index) => (
          <article className="lc-feature-card" key={index}>
            <div className="lc-feature-icon">{item.icon}</div>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="lc-experience">
        <div className="lc-experience-title">
          <span>مسار المحطة</span>
          <h2>كيف عاش الطلاب التجربة؟</h2>
        </div>

        <div className="lc-timeline">
          {steps.map((step, index) => (
            <div className="lc-timeline-item" key={index}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="lc-story">
        <div className="lc-story-icon">
          <TbRoute />
        </div>

        <div>
          <h2>تعلم قائم على الاستكشاف</h2>
          <p>
            جاءت المحطة ضمن يوم مدرسي مليء بالفعاليات العلمية والتقنية، حيث
            تنقّل الطلاب بين محطات مختلفة. في هذه المحطة كان التركيز على جعل
            الطالب شريكًا في بناء المعرفة، لا مجرد متلقٍ لها؛ فهو يصمم، يجرّب،
            يلاحظ، ثم يرى نتيجة عمله داخل بيئة افتراضية وكأنها مساحة حقيقية.
          </p>
        </div>
      </section>

      <section className="lc-gallery">
        {gallery.map((image, index) => (
          <figure className={`lc-photo lc-photo-${index + 1}`} key={index}>
            <img src={image} alt={`توثيق مركز التعلم ${index + 1}`} />
          </figure>
        ))}
      </section>
    </section>
  );
}

export default LearningCenter;