export const BLOG_LIST_QUERY = `
*[_type == "blog"] | order(_createdAt desc) {
  _id,
  title,
  "imageUrl": image.asset->url,
  _createdAt,
  slug
}
`

export const BLOG_DETAIL_QUERY = `
*[_type == "blog" && slug.current == $slug][0] {
  title,
  "imageUrl": image.asset->url,
  body,
  author,
  _createdAt
}
`

export const BLOG_SLUGS_QUERY = `
*[_type == "blog" && defined(slug.current)] {
  "slug": slug.current
}
`

export const PROJECT_LIST_QUERY = `
*[_type == "project"] | order(_createdAt desc) {
  _id,
  title,
  "imageUrl": image.asset->url,
  description,
  _createdAt,
  technologies,
  slug
}
`
