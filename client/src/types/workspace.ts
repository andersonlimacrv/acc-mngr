export interface Workspace {
  name: string;
  logo_url: string | null;
  team: string;
}

export interface WorkspaceContextType {
  workspaces: Workspace[];
  activeWorkspace: Workspace | null;
  setActiveWorkspace: (workspace: Workspace) => void;
  addWorkspace: (workspace: Workspace) => void;
}
