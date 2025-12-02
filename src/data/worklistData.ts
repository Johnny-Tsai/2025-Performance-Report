import { WorkItem } from '../types/worklist';
import { parseCSV } from '../utils/csvParser';

// 快取載入的資料
let cachedWorklistData: WorkItem[] | null = null;

// 載入 CSV 資料的函數
export async function loadWorklistData(): Promise<WorkItem[]> {
  // 如果已經有快取資料，直接回傳
  if (cachedWorklistData) {
    return cachedWorklistData;
  }

  try {
    const response = await fetch('/worklist.csv');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const csvText = await response.text();
    const allData = parseCSV(csvText);
    
    // 篩選 2025 年的資料（IterationPath 包含 \2025\ 或 /2025/）
    const filtered2025Data = allData.filter(item => 
      item.path2?.includes('\\2025\\') || 
      item.path2?.includes('/2025/')
    );
    
    // 快取資料
    cachedWorklistData = filtered2025Data;
    return filtered2025Data;
  } catch (error) {
    console.error('載入工作清單資料失敗:', error);
    // 回傳空陣列而不是拋出錯誤，讓應用程式能繼續運作
    return [];
  }
}

// 清除快取的函數（如果需要重新載入資料）
export function clearWorklistCache(): void {
  cachedWorklistData = null;
}