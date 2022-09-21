export interface fecthConfig {
  method: string;
  path: string;
  data?: object | null;
  isBasic?: boolean;
  token?: string;
}
export interface ResStatus {
  code: string;
  message: string;
}
export interface LaneItem {
  laneId: number;
  laneName: string;
  status: string;
  percentCpu: string;
  percentRam: string;
  percentHdd: string;
  uptime: string;
  appRunning: string;
  log: string;
  outboxFile: number;
  lastSent: string;
  tariffVersion: number;
  tariffNext: number;
  staffVersoin: number;
  statusListVersion: number;
  statusListRec: number;
  statusStatus: number;
  percentCpuStatus: number;
  percentRamStatus: number;
  percentHddStatus: number;
  uptimeStatus: number;
  appRunningStatus: number;
  logStatus: number;
  outboxFileStatus: number;
  lastSentStatus: number;
  tariffVersionStatus: number;
  tariffNextStatus: number;
  staffVersoinStatus: number;
  statusListVersionStatus: number;
  statusListRecStatus: number;
}
export interface UpsItem {
  upsName: string;
  status: string;
  up: string;
  batt: string;
}
export interface DriveItem {
  diver: string;
  spaceGb: string;
  usageGB: string;
  freeGb: string;
  percentUesd: string;
}
export interface DeviceItem {
  diviceName: string
  status: string
  percentCpu: string;
  percentRam: string;
  percentHdd: string
  uptime: string;
  appRunning: string;
  log: string;
  appRunningStatus: number;
  statusStatus: number;
  percentCpuStatus: number;
  percentRamStatus: number;
  percentHddStatus: number;
  uptimeStatus: number;
  logStatus: number;
  driveList?: DriveItem[]
}
export interface DataResponse {
  tsbId: number;
  tsbName: string;
  tsbAbbreviation: string;
  upsList: UpsItem[];
  deviceList: DeviceItem[];
  laneList: LaneItem[];
  status: ResStatus
}