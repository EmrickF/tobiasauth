
const users = [
  { id: 100, username: "bob", password: "password123", admin: false },

]

export async function POST(req: Request) {
  const { username, password } = await req.json()
  const user = users.find(
    (u) => u.username === username && u.password === password
  )
}
 