"use client";
import dynamic from "next/dynamic";

const NoiseDemo = dynamic(
  () => import("../components/ui/demo").then(mod => mod.NoiseDemo),
  { ssr: false }
);

export default function TestPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Test Page</h1>
      <NoiseDemo />
      {/* 三個卡片，每個卡片下只顯示一個按鈕 */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        {[1,2,3].map((card) => (
          <div
            key={card}
            className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 flex flex-col items-center min-h-[160px] min-w-[120px] md:min-w-[160px]"
          >
            <h2 className="text-base font-bold mb-4 text-gray-900 dark:text-white">卡片 {card}</h2>
            <div className="flex-1 w-full" />
            <button
              className="w-12 h-12 rounded-lg bg-blue-600 text-base text-white font-semibold hover:bg-blue-700 transition mt-auto flex items-center justify-center"
              style={{ aspectRatio: '1 / 1' }}
            >
              按鈕
            </button>
          </div>
        ))}
      </section>
    </div>
  );
} 