import { v4 as uuid } from 'uuid'
export const postData = (path, name) => {
  fetch(`http://localhost:3000/${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      id: uuid(),
    }),
  })
}
