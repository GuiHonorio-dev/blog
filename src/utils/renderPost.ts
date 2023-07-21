export function renderPost(title: string, content: string) {
  const post = `
    <h1>${title}</h1>
    <p>${content}</p>  
  `
  return post

}