/**
 * Centered page container (same max-widths as the original grid).
 * `fluid` uses the narrow gutter, `flushOnMobile` drops the side padding below 768px.
 */
export default function Container({
  fluid = false,
  flushOnMobile = false,
  className = '',
  children,
}) {
  let padding =
    'px-5 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px]';
  if (fluid) padding = 'px-3';
  if (flushOnMobile)
    padding =
      'px-0 md:px-5 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px]';

  return <div className={`mx-auto w-full ${padding} ${className}`}>{children}</div>;
}
