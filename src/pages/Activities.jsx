import "../styles/activities.css";

import {
  TbBooks,
  TbHeartHandshake,
  TbDeviceDesktopCode,
  TbGift,
  TbSparkles,
  TbPhoto,
} from "react-icons/tb";

const getImageUrl = (name) =>
  new URL(`../assets/images/${name}`, import.meta.url).href;

const libraryImages = Array.from({ length: 6 }, (_, i) =>
  getImageUrl(`mak${i + 1}.jpg`)
);

const centerImages = [
  ...Array.from({ length: 14 }, (_, i) => getImageUrl(`imgMrkez${i + 1}.jpg`)),
  getImageUrl("imgMrkez15.png"),
  ...Array.from({ length: 8 }, (_, i) => getImageUrl(`mrkzCo${i + 1}.jpg`)),
];

const honorImages = Array.from({ length: 16 }, (_, i) =>
  getImageUrl(`imgT${i + 1}.jpg`)
);

const activities = [
  {
    title: "يوم المكتبة والتطوع",
    label: "قيم ومبادرة",
    icon: <TbBooks />,
    mainIcon: <TbHeartHandshake />,
    images: libraryImages,
    text: "شاركنا في يوم تربوي داخل مكتبة المدرسة تناول أهمية التطوع والعطاء، من خلال محطات متنوعة وأنشطة لامنهجية عرّفت الطلاب على مجالات مختلفة للمبادرة وخدمة المجتمع. وقد شكّل اليوم مساحة تعليمية دافئة ربطت بين القيم النظرية والممارسة الواقعية.",
  },
  {
    title: "مركز تعلم علوم الحاسوب",
    label: "تعلم تفاعلي",
    icon: <TbDeviceDesktopCode />,
    mainIcon: <TbSparkles />,
    images: centerImages,
    text: "في هذا اليوم شاركنا نحن الزملاء في بناء محطات تعليمية تفاعلية تعكس مضامين علوم الحاسوب بصورة حسية وتجريبية، شبيهة بأيام العلوم والتجارب. وقد أتاح المركز للطلاب فرصة لمس المفاهيم البرمجية والتقنية من خلال اللعب، التجربة، التفكير، والعمل الجماعي.",
  },
  {
    title: "تكريم الطاقم المرافق",
    label: "وفاء وامتنان",
    icon: <TbGift />,
    mainIcon: <TbPhoto />,
    images: honorImages,
    text: "تقديرًا للدعم والمرافقة المهنية خلال فترة التطبيقات العملية، قمنا بتكريم الأستاذين أحمد ومهند والمرشدة فاطمة بكلمة شكر بسيطة وهدية رمزية، تعبيرًا عن امتناننا لجهودهم الدؤوبة وتوجيهاتهم التي تركت أثرًا مهمًا في تجربتنا التعليمية.",
  },
];

function Activities() {
  return (
    <section className="activities-page">
      <div className="activities-floating-title">
        <span>أنشطة مدرسية</span>
        <strong>التعلّم حين يغادر حدود الصف</strong>
      </div>

      <div className="activities-timeline">
        {activities.map((activity, index) => (
          <article className="activity-story" key={index}>
            <div className="activity-number">
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>

            <div className="activity-content">
              <div className="activity-gallery">
                {activity.images.slice(0, 9).map((image, imgIndex) => (
                  <div
                    className={`activity-photo photo-${imgIndex + 1}`}
                    key={imgIndex}
                  >
                    <img src={image} alt={`${activity.title} ${imgIndex + 1}`} />
                  </div>
                ))}
              </div>

              <div className="activity-text-card">
                <div className="activity-card-head">
                  <span className="activity-icon">{activity.icon}</span>

                  <div>
                    <span className="activity-label">{activity.label}</span>
                    <h2>{activity.title}</h2>
                  </div>
                </div>

                <p>{activity.text}</p>

                <div className="activity-meta">
                  <span>{activity.images.length} صورة توثيقية</span>
                  <span className="activity-main-icon">{activity.mainIcon}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Activities;