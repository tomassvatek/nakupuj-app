export function getTitle(title?: string) {
  if (title) {
    return `${title} | Nakupuj`;
  }
  return 'Nakupuj';
}