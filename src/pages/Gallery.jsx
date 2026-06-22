import "../styles/gallery.css";
import { TbPhoto, TbGridDots, TbX, TbVideo } from "react-icons/tb";
import { useMemo, useState } from "react";

const allMedia = import.meta.glob("../assets/images/*.{jpg,jpeg,png,mp4}", {
  eager: true,
  import: "default",
});

const categories = [
  { key: "all", label: "الكل" },
  { key: "activities", label: "أنشطة ومبادرات", prefixes: ["a", "mak", "hemam"] },
  { key: "classes", label: "مشاهدات صفية", prefixes: ["d1C", "d2C", "d3C"] },
  { key: "learning", label: "مركز التعلم", prefixes: ["imgMrkez", "mrkz", "mrkzCo"] },
  { key: "teaching", label: "تجارب تعليمية", prefixes: ["imgT", "imgF", "dTCo"] },
  { key: "personal", label: "محطات شخصية", prefixes: ["h", "me", "q", "SH"] },
];

function getFileName(path) {
  return path.split("/").pop();
}

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);

  const mediaItems = useMemo(() => {
    return Object.entries(allMedia).map(([path, src]) => {
      const name = getFileName(path);
      const isVideo = name.endsWith(".mp4");

      return {
        name,
        src,
        type: isVideo ? "video" : "image",
      };
    });
  }, []);

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return mediaItems;

    const category = categories.find((item) => item.key === activeCategory);

    return mediaItems.filter((item) =>
      category.prefixes.some((prefix) => item.name.startsWith(prefix))
    );
  }, [activeCategory, mediaItems]);

  return (
    <section className="gallery-page">
      <div className="gallery-hero">
        <span className="gallery-kicker">
        </span>
      </div>

      <div className="gallery-wrapper">
        <div className="gallery-toolbar">
          <div className="gallery-title">
            <TbGridDots />
            <span>الألبومات</span>
          </div>

          <div className="gallery-filters">
            {categories.map((category) => (
              <button
                key={category.key}
                className={activeCategory === category.key ? "active" : ""}
                onClick={() => setActiveCategory(category.key)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="gallery-grid">
          {filteredItems.map((item, index) => (
            <button
              className={`gallery-card ${index % 7 === 0 ? "large" : ""}`}
              key={item.name}
              onClick={() => setSelectedItem(item)}
            >
              {item.type === "video" ? (
                <>
                  <video src={item.src} muted />
                  <span className="gallery-video-badge">
                    <TbVideo />
                  </span>
                </>
              ) : (
                <img src={item.src} alt={item.name} loading="lazy" />
              )}

              <span className="gallery-card-overlay">
                <strong>عرض التوثيق</strong>
                <small>{item.name}</small>
              </span>
            </button>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div className="gallery-lightbox" onClick={() => setSelectedItem(null)}>
          <button className="gallery-close" aria-label="إغلاق">
            <TbX />
          </button>

          <div className="gallery-lightbox-content" onClick={(e) => e.stopPropagation()}>
            {selectedItem.type === "video" ? (
              <video src={selectedItem.src} controls autoPlay />
            ) : (
              <img src={selectedItem.src} alt={selectedItem.name} />
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;