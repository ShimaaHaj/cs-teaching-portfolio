import "../styles/finalView.css";

import {
  TbSparkles,
  TbSunrise,
  TbSunset2,
  TbSchool,
  TbHeartHandshake,
  TbFlag,
} from "react-icons/tb";

const finalCards = [
  {
    title: "أول يوم في التطبيقات",
    tag: "البداية",
    icon: <TbSunrise />,
    text: "كان اليوم الأول مزيجًا من الترقب والحماس والرهبة. دخلتُ التجربة وأنا أحمل الكثير من الأسئلة حول الصف، والطلاب، وطبيعة الدور الذي سأقوم به كمعلمة متدربة. ومع أول تفاعل داخل البيئة المدرسية بدأت ملامح الطريق تتضح، وبدأت أفهم أن التطبيقات العملية ليست مجرد حضورٍ ومشاهدة، بل بداية حقيقية لبناء الهوية المهنية.",
  },
  {
    title: "آخر يوم في التطبيقات",
    tag: "الأثر",
    icon: <TbSunset2 />,
    text: "في آخر يوم، لم تكن التجربة مجرد محطة تنتهي، بل مساحة أعود إليها بالكثير من الامتنان. شعرتُ أنني خرجتُ أكثر وعيًا، وأكثر قربًا من معنى التعليم، وأكثر إدراكًا لقيمة العلاقة الإنسانية داخل المدرسة. كان الختام لحظة مراجعة صادقة لكل ما تعلمته، ولكل موقف ترك في داخلي أثرًا مهنيًا وإنسانيًا.",
  },
];

function FinalView() {
  return (
    <section className="final-page">
      <div className="final-wrapper">
        <section className="final-summary">
          <div className="final-summary-content">
            <span className="final-kicker">
              <TbSparkles />
              إجمال العام الدراسي
            </span>

            <h1>
              عامٌ من التجربة،
              <span> والنمو، والأثر</span>
            </h1>

            <p>
              مثّل هذا العام الدراسي محطةً مهمة في رحلتي المهنية، انتقلتُ فيها
              من حدود المعرفة النظرية إلى عمق التجربة الواقعية داخل المدرسة.
              بين المشاهدات الصفية، والتخطيط، والتفاعل مع الطلاب، والمشاركة في
              الأنشطة، بدأتُ أرى التعليم بوصفه رسالةً تحتاج إلى وعي، صبر،
              مرونة، وحضور إنساني صادق.
            </p>

            <p>
              لقد علّمتني التطبيقات العملية أن المعلم لا يُبنى في يومٍ واحد،
              بل يتشكل عبر المواقف، والتأمل، والتغذية الراجعة، والمحاولة
              المستمرة. ومن خلال هذه التجربة، أدركتُ أن الأثر الحقيقي يبدأ من
              التفاصيل الصغيرة: سؤال طالب، ابتسامة فهم، موقف تربوي، أو لحظة
              شعور بأن التعلم قد وصل إلى مكانه الصحيح.
            </p>
          </div>

          <div className="final-summary-side">
            <div className="final-year-mark">
              <span>2025</span>
              <strong>2026</strong>
            </div>

            <div className="final-mini-card">
              <TbSchool />
              <p>التطبيقات العملية في تدريس علوم الحاسوب</p>
            </div>
          </div>
        </section>

        <section className="final-journey">
          {finalCards.map((card, index) => (
            <article className="final-card" key={index}>
              <div className="final-card-icon">{card.icon}</div>

              <span className="final-card-tag">{card.tag}</span>

              <h2>{card.title}</h2>

              <p>{card.text}</p>
            </article>
          ))}
        </section>

        <section className="final-closing">
          <TbHeartHandshake />

          <p>
            وفي ختام هذه السنة، أحمل معي خبرةً أعمق، وثقةً أكبر، وإيمانًا
            متجددًا بأن التعليم رحلة أثرٍ لا تنتهي بانتهاء العام الدراسي، بل
            تبدأ من كل تجربة صادقة وتكبر بكل موقفٍ يعلّمنا شيئًا جديدًا.
          </p>

          <span>
            <TbFlag />
            ختام الرحلة
          </span>
        </section>
      </div>
    </section>
  );
}

export default FinalView;