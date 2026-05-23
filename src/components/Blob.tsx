interface BlobImageProps {
  src: string
  alt?: string
  className?: string
}

export function BlobImage({ src, alt = '', className = 'w-72 h-72' }: BlobImageProps) {
  return (
    <div className={`relative ${className}`}>
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="blob" clipPathUnits="objectBoundingBox">
            <path d="M 0,1 L 0,0.4 A 0.5,0.4 0 1 1 1,0.4 L 1,1 Z" />
          </clipPath>
        </defs>
      </svg>

      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover object-center [clip-path:url(#blob)]"
      />
    </div>
  )
}