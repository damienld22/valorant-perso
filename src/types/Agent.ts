export type Agent = {
  uuid: string;
  description: string;
  displayName: string;
  displayIcon: string;
  displayIconSmall: string;
  role: AgentRole;
};

export type AgentRole = {
  uuid: string;
  displayName: string;
};
