import { useMemo, useState } from "react";
import "../styles/lessonPlanning.css";

import {
  TbArrowLeft,
  TbArrowRight,
  TbCalendar,
  TbCode,
  TbExternalLink,
  TbFileDescription,
  TbFileText,
  TbPhoto,
  TbSparkles,
  TbTargetArrow,
} from "react-icons/tb";

const lessonImages = import.meta.glob("../assets/images/{d1C,d2C,d3C,dTCo}*.jpg", {
  eager: true,
  import: "default",
});

function getImages(prefix, count) {
  return Array.from({ length: count }, (_, index) => {
    const path = `../assets/images/${prefix}${index + 1}.jpg`;
    return lessonImages[path];
  }).filter(Boolean);
}

const lessons = [
  {
    no: "01",
    title: "عالم المتغيرات",
    subtitle: "حين يبدأ البرنامج بتخزين المعنى",
    field: "C#",
    date: "درس تمهيدي",
    type: "برمجة نصية",
    mood: "regular",
    text: "قدّم هذا الدرس مدخلًا إلى مفهوم المتغيرات في لغة C#، حيث تعرّف الطلاب إلى آلية تخزين البيانات واستخدامها داخل البرامج، وفهموا العلاقة بين اسم المتغير ونوعه وقيمته من خلال تطبيقات عملية واقعية.",
    goal: "أن يدرك الطالب أن المتغير هو حجر الأساس في بناء البرامج.",
    tags: ["Variables", "Data Types", "Input", "C#"],
    plan: "#",
    slides: "#",
    images: getImages("d1C", 15),
  },
  {
    no: "02",
    title: "الدوال",
    subtitle: "تنظيم الفكرة قبل كتابة الحل",
    field: "C#",
    date: "درس تطبيقي",
    type: "تنظيم الشيفرة",
    mood: "regular",
    text: "ركّز هذا الدرس على مفهوم الدوال كأحد أسس البرمجة المنظمة، حيث تعلّم الطلاب كيفية تقسيم المشكلات إلى مهام أصغر وأكثر وضوحًا، بما يعزز قابلية إعادة الاستخدام ويحسن بنية الشيفرة.",
    goal: "أن يوظف الطالب الدوال لتنظيم الشيفرة وتقليل التكرار.",
    tags: ["Functions", "Methods", "Reuse", "Clean Code"],
    plan: "#",
    slides: "#",
    images: getImages("d2C", 7),
  },
  {
    no: "03",
    title: "الشروط",
    subtitle: "حين يتعلّم البرنامج اتخاذ القرار",
    field: "C#",
    date: "درس تطبيقي",
    type: "تفكير منطقي",
    mood: "regular",
    text: "استكشف الطلاب في هذا الدرس الجمل الشرطية بوصفها أداة اتخاذ القرار داخل البرنامج، وتعرّفوا إلى كيفية توجيه مسار التنفيذ باستخدام if و else وفقًا للمعطيات المختلفة.",
    goal: "أن يبني الطالب شروطًا منطقية توجه مسار البرنامج بصورة صحيحة.",
    tags: ["If", "Else", "Logic", "Decision"],
    plan: "#",
    slides: "#",
    images: getImages("d3C", 4),
  },
  {
    no: "04",
    title: "درس التقييم",
    subtitle: "مساحة يلتقي فيها الخيال بالبرمجة",
    field: "CoSpaces Edu",
    date: "بحضور المعلم المدرب",
    type: "محطة تقييم رسمية",
    mood: "featured",
    text: "مثّل هذا الدرس محطة تقييمية مهمة، تعرّف خلالها الطلاب إلى بيئة CoSpaces Edu وما توفره من دمج بين البرمجة والتصميم ثلاثي الأبعاد، مع التركيز على برمجة البلوكات وتوظيفها في بناء تجارب تعليمية تفاعلية.",
    goal: "أن يربط الطالب بين البرمجة والتجارب التفاعلية البصرية.",
    tags: ["CoSpaces", "AI", "3D", "Blocks", "Evaluation"],
    plan: "#",
    slides: "#",
    images: getImages("dTCo", 3),
  },
];

function LessonPlanning() {
  const [activeIndex, setActiveIndex] = useState(3);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const lesson = lessons[activeIndex];

  const gallery = useMemo(() => lesson.images, [lesson]);
  const activeImage = gallery[activeImageIndex] || gallery[0];

  const changeLesson = (index) => {
    setActiveIndex(index);
    setActiveImageIndex(0);
  };

  const goNext = () => {
    setActiveIndex((current) => {
      const next = (current + 1) % lessons.length;
      setActiveImageIndex(0);
      return next;
    });
  };

  const goPrev = () => {
    setActiveIndex((current) => {
      const prev = current === 0 ? lessons.length - 1 : current - 1;
      setActiveImageIndex(0);
      return prev;
    });
  };

  return (
    <section className={`lesson-studio-page ${lesson.mood}`}>
      <div className="lesson-studio">
        <aside className="studio-rail">
          {lessons.map((item, index) => (
            <button
              type="button"
              key={item.no}
              className={`rail-item ${activeIndex === index ? "active" : ""} ${item.mood}`}
              onClick={() => changeLesson(index)}
            >
              <span>{item.no}</span>
              <strong>{item.title}</strong>
            </button>
          ))}
        </aside>

        <main className="studio-scene" key={lesson.no}>
          <section className="scene-copy">
            <div className="scene-meta">
              <span><TbCalendar /> {lesson.date}</span>
              <span><TbCode /> {lesson.type}</span>
              {lesson.mood === "featured" && <span><TbSparkles /> درس التقييم</span>}
            </div>

            <h1>{lesson.title}</h1>
            <h2>{lesson.subtitle}</h2>

            <p className="scene-text">{lesson.text}</p>

            <div className="scene-goal">
              <TbTargetArrow />
              <p>{lesson.goal}</p>
            </div>

            <div className="scene-tags">
              {lesson.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <div className="scene-actions">
              <a href={lesson.plan} target="_blank" rel="noreferrer">
                <TbFileDescription />
                خطة الدرس
                <TbExternalLink />
              </a>

              <a href={lesson.slides} target="_blank" rel="noreferrer">
                <TbFileText />
                المعروضة
                <TbExternalLink />
              </a>
            </div>
          </section>

          <section className="scene-visual">
            <div className="art-frame">
              {activeImage && <img src={activeImage} alt={lesson.title} />}

              <div className="art-label">
                <span>{lesson.no}</span>
                <strong>{lesson.field}</strong>
              </div>
            </div>

            <div className="thumbs-head">
              <span><TbPhoto /> صور الدرس</span>
              <small>{gallery.length} صور</small>
            </div>

            <div className="thumbs-strip">
              {gallery.map((image, index) => (
                <button
                  type="button"
                  key={index}
                  className={activeImageIndex === index ? "active" : ""}
                  onClick={() => setActiveImageIndex(index)}
                >
                  <img src={image} alt={`${lesson.title} ${index + 1}`} />
                </button>
              ))}
            </div>
          </section>
        </main>

        <div className="studio-controls">
          <button type="button" onClick={goPrev}>
            <TbArrowRight />
          </button>

          <span>
            {String(activeIndex + 1).padStart(2, "0")} / {String(lessons.length).padStart(2, "0")}
          </span>

          <button type="button" onClick={goNext}>
            <TbArrowLeft />
          </button>
        </div>
      </div>
    </section>
  );
}

export default LessonPlanning;