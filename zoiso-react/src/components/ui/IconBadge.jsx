/** Round green badge that holds a small icon image. */
export default function IconBadge({ src, className = '', imageClassName = '' }) {
  return (
    <div className={`flex items-center justify-center rounded-full bg-primary ${className}`}>
      <img src={src} alt="" className={imageClassName} />
    </div>
  );
}
