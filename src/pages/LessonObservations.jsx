import "../styles/lessonObservations.css";
import { TbExternalLink, TbFileText } from "react-icons/tb";

const observationMonths = [
  {
    month: "2025. سبتمبر-09",
    reports: [
      {
        title: "HTML: النماذج والروابط",
        date: "16/09/25",
        description: "تعرّف الطلاب خلال الدرس إلى أساسيات التفاعل مع صفحات الويب باستخدام JavaScript، من خلال التعامل مع عناصر الصفحة عبر DOM، واستخدام النماذج لإدخال البيانات، والروابط للتنقل بين الصفحات. وقد دُعمت المفاهيم بأنشطة تطبيقية عززت الفهم وربطت الجانب النظري بالممارسة العملية.",
        link: "https://docs.google.com/document/d/19pilFVw_tU2cdy8Tgt9QrB32zygO6I9oL8l4vbFQOfE/edit?tab=t.0",
      },
      {
        title: "C#: العمليات الحسابية",
        date: "16/09/25",
        description: "تعرّف الطلاب إلى العمليات الحسابية الأساسية في لغة C#، مع التركيز على عمليتي القسمة (/) وباقي القسمة (%)، وتطبيقهما في مسائل برمجية متنوعة. وقد ساهمت الأمثلة العملية والتطبيقات المباشرة في تعزيز فهم المفاهيم وتنمية مهارات حل المشكلات.",
        link: "https://docs.google.com/document/d/1UFhkXm-tgScJEafX9T6wFXgn5yNel9KTVsKO243e8RU/edit?tab=t.0",
      },
      {
        title: "HTML & JavaScript",
        date: "18/09/25",
        description: "تعرّف الطلاب إلى أساسيات JavaScript داخل صفحات HTML، من خلال استخدام المتغيرات var وحلقة for والتمييز بينهما، مع توظيف أمثلة تطبيقية ساعدت على فهم طريقة كتابة أوامر برمجية تفاعلية وتنمية التفكير المنطقي لدى الطلاب.",
        link: "https://docs.google.com/document/d/1AzNAhwnd00aff_m0IT8TF9Tq-T_CThgMsXA8kaQCrx4/edit?tab=t.0",
      },
      {
        title: "C#: مصفوفة الكائنات",
        date: "18/09/25",
        description: "تعرّف الطلاب إلى مفهوم مصفوفة الكائنات في لغة C# من خلال مراجعة المصفوفات وربطها بمفهوم الكائنات، مع تطبيقات عملية أوضحت كيفية تخزين مجموعة من الكائنات والتعامل معها بصورة منظمة داخل البرنامج.",
        link: "https://docs.google.com/document/d/1Sk4E7K-nZBfER5dbSqvxKcFlNcKbfgjSvEaMKqy2hBY/edit?tab=t.0",
      },
      {
        title: "HTML: قواعد البيانات ",
        date: "23/09/25",
        description: "تعرّف الطلاب إلى توظيف JavaScript داخل صفحات HTML من خلال التعامل مع الأحداث وربطها بمفاهيم قواعد البيانات، مع تطبيقات عملية ساعدت على فهم آلية التفاعل مع الصفحة وتنظيم البيانات بصورة أوضح.",
        link: "https://docs.google.com/document/d/1POCzaroFOMSsPd2YwPDOWQYHKI-oUGAl/edit",
      },
      {
        title: "C#: الدوال وMath",
        date: "23/09/25",
        description: "تعرّف الطلاب إلى مفهوم الدوال في لغة C# وأهميتها في تنظيم الشيفرة البرمجية، مع التعرّف إلى دوال الفئة Math واستخدامها في إجراء العمليات الحسابية المختلفة من خلال أمثلة وتطبيقات عملية عززت الفهم.",
        link: "https://docs.google.com/document/d/1hSfZ9CeitWEAlAlKDVZxT3EiQ_-goxayRzkhxFGzE9c/edit?tab=t.0",
      },
      {
        title: "HTML: SQL وSelect",
        date: "25/09/25",
        description: "تعرّف الطلاب إلى أساسيات SQL داخل بيئة صفحات الويب، مع التركيز على أمر Select ودوره في استرجاع البيانات، من خلال أمثلة تطبيقية ساعدت على فهم طريقة التعامل مع قواعد البيانات وتنظيم المعلومات.",
        link: "https://docs.google.com/document/d/1Zcip0Z9JJ-fIWijdDfqkHlNj7V9ESiTDfPuFVt3kZq8/edit?tab=t.0",
      },
      {
        title: "C#: SELECT وFROM",
        date: "25/09/25",
        description: "تعرّف الطلاب إلى استخدام الأمرين SELECT وFROM لاسترجاع البيانات من قواعد البيانات، مع تطبيقات عملية أوضحت كيفية اختيار الحقول المطلوبة واستخراج المعلومات من الجداول بصورة منظمة ودقيقة.",
        link: "https://docs.google.com/document/d/1Xn5Kd7cvpwBiEOeiYDsuQNMw9bB2WNVgnINW2mePpTM/edit?tab=t.0",
      },
      {
        title: "HTML: أساسيات SQL",
        date: "30/09/25",
        description: "تعرّف الطلاب إلى أساسيات SQL ودورها في التعامل مع قواعد البيانات، من خلال أمثلة عملية تساعد على فهم كيفية تنظيم البيانات واسترجاعها بطريقة واضحة ومنهجية.",
        link: "https://docs.google.com/document/d/1mEEeYxAEDyk3-u7zklU8sp79Pkqk0D-Z8PAZQrzF88c/edit?tab=t.0",
      },
      {
        title: "C#: الطباعة والاستقبال",
        date: "30/09/25",
        description: "تعرّف الطلاب إلى أساسيات الطباعة والاستقبال في لغة C# باستخدام المتغيرات، من خلال تطبيقات عملية أوضحت كيفية عرض البيانات للمستخدم واستقبال المدخلات ومعالجتها داخل البرنامج.",
        link: "https://docs.google.com/document/d/1TnGMNDOnUJGCWQ1bb9uMQYYJ2eOKJnw_ppxIA4-oy6E/edit?tab=t.0",
      },
    ],
  },
  {
    month: "2025. أكتوبر-10",
    reports: [
      {
        title: "عطلة يوم الغفران",
        date: "02/10/25",
        description: "🚫",
        link: "https://docs.google.com/document/d/1-RlySDLs5VBV7h1135wZMTQUzGypCwoMdnlZ_33euT0/edit?usp=sharing",
      },
      {
        title: "عطلة يوم الغفران",
        date: "02/10/25",
        description: "🚫",
        link: "رابط",
      },
      {
        title: "C#: الريكورسيا",
        date: "07/10/25",
        description: "تعرّف الطلاب إلى مفهوم الريكورسيا في لغة C# وكيفية استخدام الدوال الاستدعائية لحل المشكلات البرمجية، من خلال تحليل أمثلة متنوعة والتدرّب على حل أسئلة تساعد على فهم آلية عمل الريكورسيا وتطبيقها بصورة صحيحة.",
        link: "https://docs.google.com/document/d/1eafHO_vExRUqy79SlZoxytlztMBGKmfzRmHClBJblAI/edit?tab=t.0",
      },
      {
        title: "C#: حلقة For",
        date: "07/10/25",
        description: "تعرّف الطلاب إلى استخدام حلقة For في لغة C# لتنفيذ الأوامر المتكررة بطريقة منظمة، من خلال أمثلة وتطبيقات عملية أوضحت آلية عمل الحلقة ودورها في تبسيط الحلول البرمجية ومعالجة التكرار بكفاءة.",
        link: "https://docs.google.com/document/d/1wZXAGSapad74s0oMuv4zAgylBQaWw6aj9fWPQjSDx78/edit?tab=t.0",
      },
      {
        title: "HTML: مناقشة المشاريع",
        date: "09/10/25",
        description: "خُصصت الحصة لمناقشة مشاريع الطلاب ومتابعة مراحل إنجازها، حيث قدّم المعلم توجيهات وملاحظات بنّاءة ساعدت على تطوير الأعمال وتحسينها، مع تشجيع الطلاب على عرض أفكارهم ومناقشة التحديات التي واجهتهم أثناء التنفيذ.",
        link: "https://docs.google.com/document/d/1_ubhNWZUPB3ANn9LZFQUiGaKD3cOqpRvS2YhtexvcYw/edit?tab=t.0",
      },
      {
        title: "C#: الريكورسيا",
        date: "09/10/25",
        description: "تدرّب الطلاب على حل أسئلة الريكورسيا في لغة C# من خلال نماذج وأسئلة بجروت، مع التركيز على تحليل آلية الاستدعاء الذاتي للدوال وفهم خطوات التنفيذ للوصول إلى حلول برمجية دقيقة ومنظمة.",
        link: "https://docs.google.com/document/d/1dq6ndaGATM0INId0enM0NxyAeDW7w-c9XRzNYIRJOOE/edit?tab=t.0",
      },
      {
        title: "سماح كرمان",
        date: "14/10/25",
        description: "🚫",
        link: "https://docs.google.com/document/d/1qUy3Cq5AAfliy8f3OVCDkEiL4xtGem2uSo7k6S_G6Xc/edit?tab=t.0",
      },
      {
        title: "اعفاء",
        date: "14/10/25",
        description: " 🚫تم أخذ الطلاب .. لم يكن حصص تعليمية",
        link: "https://docs.google.com/document/d/1urqM9GzaVGDOxKsGJDSIBRtfBlpQvEI2kUk_fneivCA/edit?tab=t.0",
      },
      {
        title: "C#: الدوال الخارجية وRef",
        date: "16/10/25",
        description: "راجع الطلاب مفاهيم أساسية في لغة C# من خلال التعرّف إلى الدوال الخارجية واستخدام الكلمة المفتاحية ref لتمرير المتغيرات بالمرجع، مع تطبيقات عملية دعمت فهم هذه المفاهيم وساعدت في توظيفها داخل مشاريعهم البرمجية.",
        link: "https://docs.google.com/document/d/12grnJ9WlA2Wh1zxHbHg7WyMJwx9KTHoVCnfeDcRSQPc/edit?tab=t.0",
      },
      {
        title: "C#: Queue (الطابور)",
        date: "16/10/25",
        description: "تعرّف الطلاب إلى بنية البيانات Queue في لغة C# وآلية عملها وفق مبدأ الأول دخولًا هو الأول خروجًا (FIFO)، من خلال أمثلة وتطبيقات عملية أوضحت كيفية إضافة العناصر وإزالتها واستخدامها في تنظيم البيانات ومعالجة المشكلات البرمجية المختلفة.",
        link: "https://docs.google.com/document/d/1AwsABJLiEll5DJj1eNHpm-WnEvMScEYtJwqy-iBmvyE/edit?tab=t.0",
      },
      {
        title: "HTML: عرض مشاريع Database",
        date: "21/10/25",
        description: "خُصصت الحصة لعرض مشاريع الطلاب في موضوع قواعد البيانات، وتبادل الملاحظات حولها بهدف تطويرها وتحسينها. أتاح الدرس للطلاب التعلم من تجارب زملائهم، ومناقشة الأفكار البرمجية بصورة عملية تعزز الفهم والاستعداد للتسليم النهائي.",
        link: "https://docs.google.com/document/d/1qwRlnHlPmdMVcUjkJpPZ_bQvvVsMRpccw4hGaxvSdeU/edit?tab=t.0",
      },
      {
        title: "C#: Clone والحلقات والشروط",
        date: "21/10/25",
        description: "تعرّف الطلاب إلى استخدام الدالة Clone في لغة C# وارتباطها بالمصفوفات، مع مراجعة توظيف الجملة الشرطية if وحلقة for في بناء حلول برمجية منظمة. وقد ساهمت التطبيقات العملية في تعزيز الفهم وربط المفاهيم السابقة بالمهارات الجديدة.",
        link: "https://docs.google.com/document/d/1DKnVXcAk7uSRJqAk8vACOelyK27McaPbUn5St9ofcI4/edit?tab=t.0",
      },
      {
        title: "HTML: وظيفة المشروع",
        date: "23/10/25",
        description: "خُصصت الحصة لمتابعة وظيفة المشروع وتعزيز مهارات التعلم الذاتي لدى الطلاب، من خلال التجربة العملية والبحث عن حلول مناسبة أثناء العمل. وقد ساعدت التوجيهات والأسئلة الصفية على تنظيم خطوات الإنجاز وتطوير قدرة الطلاب على التفكير والاستقلالية.",
        link: "https://docs.google.com/document/d/1J-7WPK48ABd2NzNjj6jRBvFaE2xbLNDsNDEzMPyuOUI/edit?tab=t.0",
      },
      {
        title: "C#: عمليات Queue",
        date: "23/10/25",
        description: "تعرّف الطلاب إلى العمليات الأساسية لبنية البيانات Queue في لغة C#، مثل الوصول إلى العنصر الأول (Head)، وإزالة العناصر (Remove)، وفحص ما إذا كان الطابور فارغًا (IsEmpty). وقد دعمت الأمثلة العملية فهم آلية التعامل مع الطوابير وتوظيفها في حل المشكلات البرمجية.",
        link: "https://docs.google.com/document/d/1WLCryTn-hg5ISWNwBrBPnMClOM3qvVVyRR6hukGMrR8/edit?tab=t.0",
      },
      {
        title: "HTML: توعية تربوية",
        date: "28/10/25",
        description: "خُصصت الحصة لتوعية الطلاب تربويًا حول خطورة جرائم القتل وآثارها على الفرد والمجتمع، بعد تغيير خطة الدرس استجابةً لحدث طارئ. وقد ركّز اللقاء على ترسيخ قيم الحوار، ضبط النفس، احترام الحياة، وتحمل المسؤولية المجتمعية.",
        link: "https://docs.google.com/document/d/1WGzO8rmSfKu46u8dXOWmPdH0pzX04Et_r_1DYtKhi1E/edit?tab=t.0",
      },
      {
        title: "C#: الأعداد العشوائية (Random)",
        date: "28/10/25",
        description: "تعرّف الطلاب إلى استخدام الفئة Random في لغة C# لتوليد الأعداد العشوائية، من خلال أمثلة وتطبيقات عملية أوضحت كيفية الاستفادة منها في بناء برامج تفاعلية ومحاكاة مواقف برمجية متنوعة. وقد ساعدت الأنشطة التطبيقية على ترسيخ المفهوم وتنمية مهارات التفكير البرمجي لدى الطلاب.",
        link: "https://docs.google.com/document/d/1NIAByrVumxN7Gokh8ewQOWfQXDhM2FMHilWDiopDq7I/edit?tab=t.0",
      },
      {
        title: "رحلة مدرسية",
        date: "30/10/25",
        description: "🚫",
        link: "https://docs.google.com/document/d/1D0IZ17cGv9XEpL16m63L61cw12BoLlVazgwubwskXzE/edit?tab=t.0",
      },
      {
        title: "C#: مراجعة وتطبيقات برمجية",
        date: "30/10/25",
        description: "خُصصت الحصة لمراجعة مفاهيم برمجية متنوعة في لغة C# من خلال أسئلة وتطبيقات عملية هدفت إلى تعزيز الفهم وتثبيت المهارات السابقة، مع إتاحة الفرصة للطلاب لمناقشة الحلول ومعالجة الصعوبات التي واجهتهم أثناء التعلم.",
        link: "https://docs.google.com/document/d/1cBvpRGzzcfq6W5hwBYb4oXwiTnZXrn4c3zdG_YmfbnY/edit?tab=t.0",
      },
    ],
  },
];

function LessonObservations() {
  return (
    <section className="observations-page">
      <div className="observations-wrapper">
        {observationMonths.map((group) => (
          <section className="observation-month" key={group.month}>
            <div className="month-heading">
              <h2>{group.month}</h2>
              <span>{group.reports.length} تقارير</span>
            </div>

            <div className="reports-grid">
              {group.reports.map((report, index) => {
                const isNoLesson = report.description.includes("🚫");

                return (
                  <a
                    className={`report-card ${isNoLesson ? "no-lesson-card" : ""}`}
                    href={report.link}
                    target="_blank"
                    rel="noreferrer"
                    key={`${group.month}-${index}`}
                  >
                    <span className="report-number">{report.date}</span>

                    <span className="report-icon">
                      <TbFileText />
                    </span>

                    <span className="report-title">{report.title}</span>

                    <span className="report-description">
                      {isNoLesson
                        ? "لم تُعقد حصة تعليمية في هذا اليوم."
                        : report.description}
                    </span>

                    <span className="report-open">
                      {isNoLesson ? "عرض التوثيق" : "عرض التقرير"}
                      <TbExternalLink />
                    </span>
                  </a>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

export default LessonObservations;