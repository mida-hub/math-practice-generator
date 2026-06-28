import { MatrixPageData } from "@/lib/generators";

interface MatrixPrintProps {
  data: MatrixPageData;
}

export default function MatrixPrint({ data }: MatrixPrintProps) {
  const { title, operator, rowHeaders, colHeaders, cells } = data;

  return (
    <div
      id="print-area"
      className="
        w-[210mm] min-h-[297mm] p-[15mm]
        bg-white text-black
        mx-auto shadow-lg
        print:shadow-none print:m-0 print:p-[15mm] print:w-[210mm] print:min-h-[297mm]
        font-sans
      "
    >
      {/* タイトル */}
      <h1 className="text-center text-[22pt] font-bold mb-[8mm] tracking-widest">
        {title}
      </h1>

      {/* 名前・日付欄 */}
      <div className="flex gap-[10mm] mb-[8mm] text-[11pt]">
        <div className="flex items-center gap-2">
          <span>なまえ：</span>
          <span className="inline-block w-[55mm] border-b-2 border-black" />
        </div>
        <div className="flex items-center gap-2">
          <span>日にち：</span>
          <span className="inline-block w-[40mm] border-b-2 border-black" />
        </div>
      </div>

      {/* マトリクス表 */}
      <div className="flex justify-center">
        <table className="border-collapse table-fixed">
          <thead>
            <tr>
              {/* 左上の演算子セル */}
              <th className="matrix-cell header-cell text-[16pt]">{operator}</th>
              {colHeaders.map((col, idx) => (
                <th key={idx} className="matrix-cell header-cell text-[16pt]">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rowHeaders.map((row, rowIdx) => (
              <tr key={rowIdx}>
                {/* 行ヘッダー */}
                <th className="matrix-cell header-cell text-[16pt]">{row}</th>
                {/* 解答セル */}
                {cells[rowIdx].map((cell, colIdx) => (
                  <td
                    key={colIdx}
                    className={`matrix-cell answer-cell text-[16pt] ${
                      cell === "ー" ? "na-cell" : ""
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
