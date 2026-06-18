import "../styles/about.css";
import placeholderImage from "../assets/images/placeholder.jpg";

import {
  TbUser,
  TbSchool,
  TbBriefcase,
  TbHeart,
  TbChalkboard,
  TbTarget,
  TbCompass,
  TbBuildingCommunity,
  TbUsers,
  TbCalendarStar,
} from "react-icons/tb";

const aboutSections = [
  {
    title: "من أنا",
    icon: <TbUser />,
    text: "أنا شيماء حاج، أخوض تجربة التطبيقات العملية في تدريس علوم الحاسوب، وأسعى إلى بناء شخصية مهنية تجمع بين المعرفة، الهدوء، والمسؤولية التربوية.",
  },
  {
    title: "التعليم",
    icon: <TbSchool />,
    text: "أرى أن التعليم مساحة لبناء الفهم، وليس مجرد نقل للمعلومات. لذلك أسعى إلى تقديم المعرفة بطريقة واضحة، قريبة من الطالب، ومتصلة بواقعه.",
  },
  {
    title: "الخبرة",
    icon: <TbBriefcase />,
    text: "تمنحني التطبيقات العملية فرصة لاكتساب خبرة حقيقية في التخطيط، إدارة الصف، التعامل مع الطلاب، وتحويل الدرس من فكرة إلى موقف تعليمي فعّال.",
  },
  {
    title: "الاهتمامات",
    icon: <TbHeart />,
    text: "أهتم بعلوم الحاسوب، التصميم، التكنولوجيا التعليمية، وبكل ما يساعد على جعل التعلم أكثر بساطة وتفاعلًا وارتباطًا بحياة الطلاب.",
  },
  {
    title: "لماذا اخترت مهنة التعليم",
    icon: <TbChalkboard />,
    text: "اخترت التعليم لأنه مهنة أثر ورسالة، ولأن المعلم يستطيع أن يترك بصمة في تفكير الطالب، ثقته بنفسه، ونظرته إلى التعلم.",
  },
  {
    title: "توقعاتي من نفسي",
    icon: <TbTarget />,
    text: "أتوقع من نفسي الالتزام، التطور، تقبّل الملاحظات، وبذل الجهد لأكون أكثر وعيًا بدوري المهني والإنساني داخل الصف.",
  },
  {
    title: "توقعاتي من المرشدة",
    icon: <TbCompass />,
    text: "أتوقع من المرشدة أن تكون داعمة وموجهة، تساعدني على رؤية نقاط القوة ومجالات التحسين، وتمنحني تغذية راجعة واضحة وصادقة.",
  },
  {
    title: "توقعاتي من المدرسة",
    icon: <TbBuildingCommunity />,
    text: "أتوقع من المدرسة أن توفر بيئة تعليمية آمنة ومحفزة، تتيح لي التعلم من الواقع المدرسي والمشاركة في التجربة التربوية بصورة فعالة.",
  },
  {
    title: "توقعاتي من المعلم المدرب",
    icon: <TbUsers />,
    text: "أتوقع من المعلم المدرب أن يرافقني بخبرته، يوجهني في التخطيط والتنفيذ، ويمنحني مساحة للتجربة والتعلم من المواقف الصفية المختلفة.",
  },
  {
    title: "توقعاتي من السنة الدراسية الأكاديمية",
    icon: <TbCalendarStar />,
    text: "أتوقع أن تكون هذه السنة محطة نضج مهني وتربوي، أتعلم فيها كيف أحوّل المعرفة إلى ممارسة، والممارسة إلى أثر داخل الصف.",
  },
];

function About() {
  return (
    <section className="about-page">
      <div className="about-hero">
        <span className="about-kicker">نبذة مهنية</span>
        <h1>رحلتي نحو التعليم</h1>
        <p>
          هذه الصفحة توثّق ملامح من شخصيتي المهنية، ودوافعي، وتوقعاتي خلال
          تجربة التطبيقات العملية في تدريس علوم الحاسوب.
        </p>
      </div>

      <div className="about-sections">
        {aboutSections.map((item, index) => (
          <article
            className={`about-card ${index % 2 !== 0 ? "reverse" : ""}`}
            key={index}
          >
            <div className="about-card-image">
              <img src={placeholderImage} alt={item.title} />
            </div>

            <div className="about-card-content">
              <div className="about-title-row">
                <span className="about-icon">{item.icon}</span>
                <h2>{item.title}</h2>
              </div>

              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default About;