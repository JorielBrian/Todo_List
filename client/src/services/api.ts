export const API_URL = "http://localhost:5000"

export async function getTodos() {
  const res = await fetch(`${API_URL}/todos`)
  return res.json()
}