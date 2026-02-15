import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import GalleryFilter from './GalleryFilter'
import GalleryItem from './GalleryItem'
import { galleryItems } from '@/data/galleryData'

export default function GalleryGrid({ initialFilter = '*', showFilter = true }) {
  const [filter, setFilter] = useState(initialFilter)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const filteredItems = filter === '*'
    ? galleryItems
    : galleryItems.filter((item) => item.category === filter)

  const slides = filteredItems.map((item) => ({ src: item.src, alt: item.alt }))

  const handleItemClick = (item) => {
    const idx = filteredItems.findIndex((i) => i.src === item.src)
    setLightboxIndex(idx >= 0 ? idx : 0)
    setLightboxOpen(true)
  }

  return (
    <>
      {showFilter !== false && (
        <GalleryFilter activeFilter={filter} onFilter={setFilter} />
      )}
      <div className="gallery-grid">
        {filteredItems.map((item, idx) => (
          <GalleryItem
            key={`${item.src}-${idx}`}
            item={item}
            onClick={handleItemClick}
          />
        ))}
      </div>
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={slides}
      />
    </>
  )
}
