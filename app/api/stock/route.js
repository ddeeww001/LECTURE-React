// ว่าง — ⌨️ พิมพ์สดบล็อก 2.2 · export async function GET() คืนราคาสุ่ม { symbol: "DEMO", price }
// ว่าง — ⌨️ พิมพ์สดบล็อก 1.3 · export async function GET() คืนเวลาปัจจุบันเป็น JSON
export const GET = () => {
    const price = (Math.random() * 100 + 900).toFixed(2);
    return Response.json({ symbol: "DEMO", price });
}