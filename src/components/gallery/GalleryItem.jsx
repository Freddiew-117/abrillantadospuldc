export default function GalleryItem({ item, onClick }) {
  return (
    <div className="gallery-item">
      <button
        type="button"
        className="gallery-item__btn"
        onClick={() => onClick(item)}
        aria-label={`Ver ${item.title}`}
      >
        <img
          src={item.thumb}
          alt={item.alt}
          loading="lazy"
          width={400}
          height={300}
        />
        <div className="gallery-item__overlay">
          <span>{item.title}</span>
        </div>
      </button>
    </div>
  )
}
