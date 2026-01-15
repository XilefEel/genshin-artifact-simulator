export type MainStat = {
  name: string;
  value: number;
};

export type Substat = {
  name: string;
  value: number;
  rolls: number;
};

export type RollHistoryItem = {
  substat: string;
  value: number;
  roll_value: number;
};

export type ArtifactState = {
  type: string;
  main_stat: MainStat;
  substats: Substat[];
  crit_value?: number;
};

export type ArtifactResponse = {
  before: ArtifactState;
  after: ArtifactState;
  roll_history: RollHistoryItem[];
};
