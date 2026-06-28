// 将来的な問題形式の追加にも耐えられる共通の型定義
export interface MatrixPageData {
  title: string; // プリントのタイトル（例: "たしざんの れんしゅう"）
  operator: string; // 左上のマスに表示する記号（例: "+", "-"）
  rowHeaders: number[]; // 縦の数字（1~9の配列）
  colHeaders: number[]; // 横の数字（1~9の配列）
  cells: string[][]; // 9x9のマス目の値。空欄は "", 回答不可は "ー"
}

export type OperationType = "addition" | "subtraction";
export type OrderType = "sequential" | "random";
