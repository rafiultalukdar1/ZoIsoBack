/**
 * Inner content column (max 1220px). By default it keeps the original
 * left indent that aligns text with the hero card on larger screens.
 */
export default function ContentWrapper({ indent = true, className = '', children }) {
  const indentClasses = indent ? 'md:pl-[100px] lg:pl-[175px]' : '';

  return (
    <div className={`mx-auto w-full max-w-[1220px] ${indentClasses} ${className}`}>{children}</div>
  );
}
