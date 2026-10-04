// ว่าง — ⌨️ พิมพ์สดบล็อก 1.3 · export async function GET() คืนเวลาปัจจุบันเป็น JSON
export const GET = () => {
    return Response.json({ time: new Date().toLocaleTimeString("th-TH") })
}