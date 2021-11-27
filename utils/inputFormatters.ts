
export function addGaps(str: string) {
  return str
    .replace(/\s/g, "")
    .replace(/(\d{4})/g, "$1 ")
    .trim();
}

export function addSlash(str) {
  return str;
}
