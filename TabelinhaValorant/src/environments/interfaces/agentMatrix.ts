import { agent } from "./agent";

export interface agentMatrixService {
    agentMatrix: agent[][];
}
export const agentService: agentMatrixService = {
    agentMatrix: [[], [], [], []],
}