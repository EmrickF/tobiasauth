
const users = [
  { id: 100, username: "bob", password: "password123", admin: false }
]

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get("id")

  const user = users.find((u) => String(u.id) === String(id))



}
