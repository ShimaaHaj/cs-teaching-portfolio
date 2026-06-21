import "../styles/reflection.css";
import reflectionImage from "../assets/images/placeholder.jpg";

import {
  TbMoodHeart,
  TbArrowDownRight,
  TbArrowUpRight,
  TbChecklist,
  TbRefresh,
  TbUserCheck,
  TbCompass,
  TbMessageCircle,
  TbScale,
  TbSun,
  TbFlag,
} from "react-icons/tb";

const reflectionItems = [
  {
    title: "أشعر بـ",
    icon: <TbMoodHeart />,
    text: "أشعر أن تجربة التطبيقات العملية منحتني فرصة حقيقية لاكتشاف ذاتي المهنية، وفهم طبيعة الصف، والتعامل مع الطلاب في مواقف تعليمية واقعية.",
  },
  {
    title: "نقاط ضعف",
    icon: <TbArrowDownRight />,
    text: "أحتاج إلى تطوير قدرتي على إدارة الوقت داخل الحصة، وتنويع أساليب الشرح، ومنح الطلاب مساحة أوسع للتفكير والمشاركة.",
  },
  {
    title: "نقاط قوة",
    icon: <TbArrowUpRight />,
    text: "أمتلك قدرة جيدة على تبسيط المفاهيم، الإصغاء للطلاب، التعامل بهدوء، وبناء علاقة محترمة داخل الصف.",
  },
  {
    title: "أشياء أود فعلها",
    icon: <TbChecklist />,
    text: "أود تجربة أنشطة تعليمية أكثر تفاعلًا، وتوظيف أدوات رقمية تساعد الطلاب على فهم المادة بصورة ممتعة وواضحة.",
  },
  {
    title: "أشياء أود تحسينها",
    icon: <TbRefresh />,
    text: "أود تحسين طريقة طرح الأسئلة، وتطوير أساليب التقويم، والعمل على جعل الدرس أكثر مشاركة وتوازنًا بين الشرح والتطبيق.",
  },
  {
    title: "ملاحظات المعلم المدرب",
    icon: <TbUserCheck />,
    text: "ساعدتني ملاحظات المعلم المدرب على رؤية تفاصيل دقيقة في التخطيط والتنفيذ، وفهم أهمية الاستعداد الجيد قبل دخول الصف.",
  },
  {
    title: "ملاحظات المرشد",
    icon: <TbCompass />,
    text: "منحتني ملاحظات المرشد رؤية أوسع لأدائي، ووجهتني إلى نقاط مهنية مهمة تتعلق بإدارة الصف، وضوح الأهداف، وتسلسل الدرس.",
  },
  {
    title: "تغذية مرتدة",
    icon: <TbMessageCircle />,
    text: "كانت التغذية المرتدة وسيلة للتعلم والتطور، لأنها ساعدتني على تحويل الملاحظات إلى خطوات عملية لتحسين أدائي.",
  },
  {
    title: "مواقف واعتبارات",
    icon: <TbScale />,
    text: "تعلمت أن المواقف الصفية تحتاج إلى وعي ومرونة، وأن التعامل مع الطلاب لا يعتمد على المعرفة فقط، بل على الفهم والاحتواء.",
  },
  {
    title: "مواقف إيجابية",
    icon: <TbSun />,
    text: "من أكثر المواقف التي أثرت بي لحظات تفاعل الطلاب، وأسئلتهم، وشعورهم بالإنجاز عند فهم فكرة جديدة.",
  },
  {
    title: "الختام",
    icon: <TbFlag />,
    text: "أرى أن هذه التجربة كانت محطة مهمة في بناء هويتي المهنية، فقد علمتني أن التعليم رحلة مستمرة من التعلم، التأمل، والتطوير.",
  },
];

function Reflection() {
  return (
    <section className="reflection-page">
      <div className="reflection-wrapper">
        <section className="reflection-intro">
          <div className="reflection-visual">
            <div className="reflection-image-wrap">
              <img src={reflectionImage} alt="تأملات من التجربة المهنية" />
            </div>

            <div className="reflection-image-note">
              <span>مساحة تأمل</span>
              <p>بين الموقف والتعلّم، تتشكّل الخبرة المهنية.</p>
            </div>
          </div>

          <div className="reflection-intro-content">
            <p>
              في هذه الصفحة أوثق تأملاتي خلال سنة التطبيقات العملية، من خلال
              مراجعة ما شعرت به، وما تعلمته، وما أطمح إلى تطويره في مساري
              المهني كمعلمة علوم حاسوب.
            </p>
          </div>
        </section>

        <section className="reflection-sections">
          {reflectionItems.map((item, index) => (
            <article className="reflection-item" key={index}>
              <div className="reflection-item-head">
                <span className="reflection-icon">{item.icon}</span>

                <div>
                  <span className="reflection-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2>{item.title}</h2>
                </div>
              </div>

              <p>{item.text}</p>
            </article>
          ))}
        </section>
      </div>
    </section>
  );
}

export default Reflection;