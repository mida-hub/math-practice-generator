"use client";

import { useState } from "react";
import MatrixPrint from "@/components/MatrixPrint";
import { OperationType, OrderType } from "@/lib/generators";
import { generateAddition } from "@/lib/generators/addition";
import { generateSubtraction } from "@/lib/generators/subtraction";

const SEQUENTIAL: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function shuffle(arr: number[]): number[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Home() {
  const [operation, setOperation] = useState<OperationType>("addition");
  const [order, setOrder] = useState<OrderType>("sequential");
  const [rowHeaders, setRowHeaders] = useState<number[]>(SEQUENTIAL);
  const [colHeaders, setColHeaders] = useState<number[]>(SEQUENTIAL);
  const [maxSum, setMaxSum] = useState<number>(10);

  const handleOrderChange = (newOrder: OrderType) => {
    setOrder(newOrder);
    if (newOrder === "sequential") {
      setRowHeaders(SEQUENTIAL);
      setColHeaders(SEQUENTIAL);
    } else {
      setRowHeaders(shuffle(SEQUENTIAL));
      setColHeaders(shuffle(SEQUENTIAL));
    }
  };

  const handleGenerate = () => {
    setOrder("random");
    setRowHeaders(shuffle(SEQUENTIAL));
    setColHeaders(shuffle(SEQUENTIAL));
  };

  const handlePrint = () => {
    window.print();
  };

  const data =
    operation === "addition"
      ? generateAddition(rowHeaders, colHeaders, maxSum)
      : generateSubtraction(rowHeaders, colHeaders);

  return (
    <main className="min-h-screen bg-gray-50 print:bg-white">
      {/* 設定パネル（印刷時は非表示） */}
      <div className="print:hidden bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <h1 className="text-xl font-bold text-gray-800 mb-3">
            🔢 算数プリント自動生成
          </h1>
          <div className="flex flex-wrap gap-4 items-center">
            {/* 演算選択 */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-600">えんざん：</span>
              <button
                onClick={() => setOperation("addition")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  operation === "addition"
                    ? "bg-blue-500 text-white shadow"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                たしざん
              </button>
              <button
                onClick={() => setOperation("subtraction")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  operation === "subtraction"
                    ? "bg-blue-500 text-white shadow"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                ひきざん
              </button>
            </div>

            {/* 並び順選択 */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-600">ならびかた：</span>
              <button
                onClick={() => handleOrderChange("sequential")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  order === "sequential"
                    ? "bg-blue-500 text-white shadow"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                じゅんばん
              </button>
              <button
                onClick={() => handleOrderChange("random")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  order === "random"
                    ? "bg-blue-500 text-white shadow"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                ランダム
              </button>
            </div>

            {/* 足し算の上限 */}
            {operation === "addition" && (
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-600">こたえの上限：</span>
                <input
                  type="number"
                  min={2}
                  max={18}
                  value={maxSum}
                  onChange={(e) => setMaxSum(Math.min(18, Math.max(2, Number(e.target.value))))}
                  className="w-16 px-2 py-2 rounded-lg text-sm border border-gray-300 text-center"
                />
              </div>
            )}

            {/* 問題生成ボタン */}
            <button
              onClick={handleGenerate}
              className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600 transition-colors shadow"
            >
              もんだいをつくる
            </button>

            {/* 印刷ボタン */}
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors shadow"
            >
              🖨 印刷する
            </button>
          </div>
        </div>
      </div>

      {/* プリントプレビュー */}
      <div className="py-8 print:py-0 flex justify-center">
        <MatrixPrint data={data} />
      </div>
    </main>
  );
}
