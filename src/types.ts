export type PageMode = 'landing' | 'demo';

export type MobileScreenId = 
  | 'home'         // 00/05
  | 'camera'       // camera capture
  | 'photo'        // 01/05
  | 'analysis'     // 02/05
  | 'diagnosis'    // 03/05
  | 'instructions' // 04/05
  | 'complete';    // 05/05

export interface RepairState {
  productName: string;
  problemDesc: string;
  photoUrl: string;
  timeEstimate: string;
  costEstimate: string;
  toolsNeeded: string[];
  partsNeeded: string;
  completedSteps: number[];
  tightenProgress: number; // 0 to 100%
}
