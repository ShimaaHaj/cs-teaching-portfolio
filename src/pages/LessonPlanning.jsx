import "../styles/lessonPlanning.css";

import { useState } from "react";

import {
  TbCalendar,
  TbCode,
  TbExternalLink,
  TbFileDescription,
  TbFileText,
  TbPhoto,
  TbX,
} from "react-icons/tb";

const lessonImages = import.meta.glob("../assets/images/d{1,2,3}C*.jpg", {
  eager: true,
  import: "default",
});

function getImages(prefix, count) {
  return Array.from({ length: count }, (_, index) => {
    const imageName = `${prefix}${index + 1}.jpg`;
    const imagePath = `../assets/images/${imageName}`;

    return {
      name: imageName,
      src: lessonImages[imagePath],
    };
  }).filter((image) => image.src);
}

const lessons = [
  {
    number: "01",
    day: "الثلاثاء",
    date: "16/09/2025",
    title: "عالم المتغيرات",
    subject: "C#",
    description:
      "تناول الدرس مفهوم المتغيرات في لغة C# بوصفها أساسًا مهمًا في بناء البرامج. تعرّف الطلاب إلى معنى المتغير، طريقة تعريفه، أنواعه الأساسية، وكيفية استخدامه في تخزين القيم والتعامل معها داخل البرنامج من خلال أمثلة تطبيقية واضحة.",
    planLink:
      "https://www.canva.com/design/DAG6VNFHPoA/W1jl8d_3CtkpGzqpeSEzLg/edit",
    presentationLink:
      "https://www.canva.com/design/DAG6VNFHPoA/W1jl8d_3CtkpGzqpeSEzLg/edit",
    images: getImages("d1C", 15),
  },
  {
    number: "02",
    day: "الثلاثاء",
    date: "23/09/2025",
    title: "الدوال",
    subject: "C#",
    description:
      "ركز الدرس على مفهوم الدوال في لغة C# ودورها في تنظيم الشيفرة البرمجية وتقسيمها إلى أجزاء قابلة لإعادة الاستخدام. تدرّب الطلاب على بناء الدالة واستدعائها وربطها بأمثلة عملية تعزز التفكير المنطقي.",
    planLink:
      "https://www.canva.com/design/DAG3lb_DXlk/--8yjJ8H3XJrTQhX2OJRHQ/edit",
    presentationLink:
      "https://www.canva.com/design/DAG3lb_DXlk/--8yjJ8H3XJrTQhX2OJRHQ/edit",
    images: getImages("d2C", 7),
  },
  {
    number: "03",
    day: "الثلاثاء",
    date: "30/09/2025",
    title: "الشروط",
    subject: "C#",
    description:
      "قدّم الدرس مفهوم الجمل الشرطية في لغة C# وكيفية استخدامها لاتخاذ قرارات داخل البرنامج بناءً على تحقق شرط معين. ساعدت الأمثلة التطبيقية الطلاب على فهم منطق القرار البرمجي وتوظيفه في حل المسائل.",
    planLink:
      "https://www.canva.com/design/DAG6VNFHPoA/W1jl8d_3CtkpGzqpeSEzLg/edit",
    presentationLink:
      "https://www.canva.com/design/DAG3lb_DXlk/--8yjJ8H3XJrTQhX2OJRHQ/edit",
    images: getImages("d3C", 4),
  },
];

function LessonPlanning() {
  const [activeLessonIndex, setActiveLessonIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const activeLesson = lessons[activeLessonIndex];
  const coverImage = activeLesson.images[0];

  return (
    <section className="planning-page">
      <div className="planning-board">
        <nav className="planning-tabs" aria-label="اختيار الدرس">
          {lessons.map((lesson, index) => (
            <button
              type="button"
              key={lesson.number}
              className={activeLessonIndex === index ? "active" : ""}
              onClick={() => setActiveLessonIndex(index)}
            >
              <span>{lesson.number}</span>
              <strong>{lesson.title}</strong>
            </button>
          ))}
        </nav>

        <section className="planning-stage">
          <div className="planning-visual">
            {coverImage && <img src={coverImage.src} alt={activeLesson.title} />}

            <div className="planning-visual-badge">
              <span>{activeLesson.number}</span>
              <strong>{activeLesson.subject}</strong>
            </div>
          </div>

          <div className="planning-content">
            <div className="planning-meta">
              <span>
                <TbCalendar />
                {activeLesson.day} - {activeLesson.date}
              </span>

              <span>
                <TbCode />
                {activeLesson.subject}
              </span>
            </div>

            <h1>{activeLesson.title}</h1>

            <p>{activeLesson.description}</p>

            <div className="planning-actions">
              <a
                href={activeLesson.planLink}
                target="_blank"
                rel="noreferrer"
              >
                <TbFileDescription />
                خطة الدرس
                <TbExternalLink />
              </a>

              <a
                href={activeLesson.presentationLink}
                target="_blank"
                rel="noreferrer"
              >
                <TbFileText />
                المعروضة
                <TbExternalLink />
              </a>
            </div>
          </div>
        </section>

        <section className="planning-gallery-section">
          <div className="planning-gallery-head">
            <TbPhoto />
            <span>توثيق بصري للدرس</span>
            <strong>{activeLesson.images.length} صور</strong>
          </div>

          <div className="planning-gallery-row">
            {activeLesson.images.map((image) => (
              <button
                type="button"
                key={image.name}
                onClick={() => setSelectedImage(image)}
              >
                <img src={image.src} alt={image.name} loading="lazy" />
              </button>
            ))}
          </div>
        </section>
      </div>

      {selectedImage && (
        <div
          className="planning-lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="planning-close"
            onClick={() => setSelectedImage(null)}
            aria-label="إغلاق الصورة"
          >
            <TbX />
          </button>

          <img
            src={selectedImage.src}
            alt={selectedImage.name}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

export default LessonPlanning;