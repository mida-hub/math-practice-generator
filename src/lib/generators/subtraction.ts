import { MatrixPageData } from "./index";

/**
 * 引き算マトリクスを生成する。
 * 計算結果が 0 未満（マイナス）になるマスは回答不可として "ー" を設定する。
 */
export function generateSubtraction(
  rowHeaders: number[],
  colHeaders: number[]
): MatrixPageData {
  const cells: string[][] = rowHeaders.map((row) =>
    colHeaders.map((col) => {
      const diff = row - col;
      return diff >= 0 ? "" : "ー";
    })
  );

  return {
    title: "ひきざんの れんしゅう",
    operator: "−",
    rowHeaders,
    colHeaders,
    cells,
  };
}
