import { GALLERY_CATEGORIES } from '@/data/galleryData'

export default function GalleryFilter({ activeFilter, onFilter }) {
  return (
    <div className="gallery-filter">
      <ul className="gallery-filter__list">
        {GALLERY_CATEGORIES.map((cat) => (
          <li key={cat.id}>
            <button
              type="button"
              className={`gallery-filter__btn ${activeFilter === cat.value ? 'gallery-filter__btn--active' : ''}`}
              onClick={() => onFilter(cat.value)}
            >
              {cat.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
