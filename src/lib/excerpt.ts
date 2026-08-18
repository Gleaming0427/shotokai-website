export function getExcerpt(body: string | undefined, max = 155) {
  if (!body) return '';
  const text = body
    .replace(/!\[.*?\]\(.*?\)/g, '')
    .replace(/\[([^\]]*)\]\(.*?\)/g, '$1')
    .replace(/[#*>`_~]/g, '')
    .replace(/<[^>]*>/g, '')
    .replace(/\n+/g, ' ')
    .trim();
  if (text.length <= max) return text;
  return text.substring(0, text.lastIndexOf(' ', max)) + '…';
}
