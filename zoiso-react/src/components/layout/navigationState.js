/** True when the item (or one of its children) points at the current path. */
export function isItemActive(item, pathname) {
  if (item.to === pathname) return true;
  return item.children?.some((child) => child.to === pathname) ?? false;
}
