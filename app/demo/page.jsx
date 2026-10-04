// ว่าง — ⌨️ พิมพ์สดบล็อก 1.3 (ใช้ต่อถึง 1.4 no-store และ 1.5 revalidate)
// Server Component: async function DemoPage() → await fetch("http://localhost:3000/api/time") → แสดง "เวลาที่ดึงมา: ..."
// ⚠️ Next.js 15: บล็อก 1.3 ต้องใส่ { cache: "force-cache" } ให้ชัด ไม่งั้นเวลาไม่ค้าง (ดูแผนสำรองแถวสุดท้ายในสคริปต์)
const DemoPage = async () => {
    const res = await fetch("http://localhost:3000/api/time", { cache: "no-store", });
    const { time } = await res.json();
    return <p>Time now: {time}</p>
};

export default DemoPage;