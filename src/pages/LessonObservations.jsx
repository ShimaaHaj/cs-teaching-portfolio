import "../styles/lessonObservations.css";
import { TbExternalLink, TbFileText } from "react-icons/tb";

const reportLink =
  "https://docs.google.com/document/d/1cBvpRGzzcfq6W5hwBYb4oXwiTnZXrn4c3zdG_YmfbnY/edit?tab=t.0";

const observationMonths = [
  {
    month: "2025. سبتمبر-09",
    reports: [
      {
        date: "00/00/00",
        description: "شرح بسيط لتقرير المشاهدة الصفية.",
      },
      {
        date: "00/00/00",
        description: "شرح بسيط لتقرير المشاهدة الصفية.",
      },
      {
        date: "00/00/00",
        description: "شرح بسيط لتقرير المشاهدة الصفية.",
      },
      {
        date: "00/00/00",
        description: "شرح بسيط لتقرير المشاهدة الصفية.",
      },
      {
        date: "00/00/00",
        description: "شرح بسيط لتقرير المشاهدة الصفية.",
      },
      {
        date: "00/00/00",
        description: "شرح بسيط لتقرير المشاهدة الصفية.",
      },
      {
        date: "00/00/00",
        description: "شرح بسيط لتقرير المشاهدة الصفية.",
      },
      {
        date: "00/00/00",
        description: "شرح بسيط لتقرير المشاهدة الصفية.",
      },
    ],
  },
  {
    month: "2025. أكتوبر-10",
    reports: Array.from({ length: 8 }, () => ({
      date: "00/00/00",
      description: "شرح بسيط لتقرير المشاهدة الصفية.",
    })),
  },
  {
    month: "2025. نوفمبر-11",
    reports: Array.from({ length: 8 }, () => ({
      date: "00/00/00",
      description: "شرح بسيط لتقرير المشاهدة الصفية.",
    })),
  },
  {
    month: "2025. ديسمبر-12",
    reports: Array.from({ length: 8 }, () => ({
      date: "00/00/00",
      description: "شرح بسيط لتقرير المشاهدة الصفية.",
    })),
  },
  {
    month: "2026. يناير-01",
    reports: Array.from({ length: 8 }, () => ({
      date: "00/00/00",
      description: "شرح بسيط لتقرير المشاهدة الصفية.",
    })),
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
              {group.reports.map((report, index) => (
                <a
                  className="report-card"
                  href={reportLink}
                  target="_blank"
                  rel="noreferrer"
                  key={`${group.month}-${index}`}
                >
                  <span className="report-number">
                    {report.date}
                  </span>

                  <span className="report-icon">
                    <TbFileText />
                  </span>

                  <span className="report-title">
                    تقرير مشاهدة صفية
                  </span>

                  <span className="report-description">
                    {report.description}
                  </span>

                  <span className="report-open">
                    عرض التقرير
                    <TbExternalLink />
                  </span>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

export default LessonObservations;