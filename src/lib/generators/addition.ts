import { MatrixPageData } from "./index";

/**
 * 足し算マトリクスを生成する。
 * 計算結果が maxSum を超えるマスは回答不可として "ー" を設定する。
 */
export function generateAddition(
  rowHeaders: number[],
  colHeaders: number[],
  maxSum: number = 10
): MatrixPageData {
  const cells: string[][] = rowHeaders.map((row) =>
    colHeaders.map((col) => {
      const sum = row + col;
      return sum <= maxSum ? "" : "ー";
    })
  );

  return {
    title: "たしざんの れんしゅう",
    operator: "+",
    rowHeaders,
    colHeaders,
    cells,
  };
}
