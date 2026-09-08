/**
 * Slug d'URL d'un article : champ frontmatter `url` s'il est défini,
 * sinon l'id (nom de fichier).
 */
export function articleSlug(article: { id: string; data: { url?: string } }) {
  const url = article.data.url?.trim().replace(/^\/+|\/+$/g, '');
  return url || article.id;
}
