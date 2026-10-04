// ว่าง — ⌨️ พิมพ์สดบล็อก 2.2 (SSR — ราคาหุ้นสมมติ)
// 💥 เริ่มจาก fetch("http://localhost:3000/api/stock") แบบ cache → ราคาค้าง → แก้เป็น { cache: "no-store" }

const StockPage = async () => {
    const res = await fetch("http://localhost:3000/api/stock", { cache: "no-store" });
    const { price, symbol } = await res.json();
    return <p>{symbol}: {price}</p>
};

export default StockPage;