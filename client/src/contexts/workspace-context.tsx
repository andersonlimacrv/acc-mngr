import { createContext, useState, type ReactNode } from "react";
import type { Workspace, WorkspaceContextType } from "@/types/workspace";

export const WorkspaceContext = createContext<WorkspaceContextType | undefined>(undefined);

const initialWorkspaces: Workspace[] = [
  {
    name: "Workspace Name",
    logo_url: null,
    team: "Team 1",
  },
  {
    name: "Workspace Name 2",
    logo_url: null,
    team: "Team 2",
  },
];

export const WorkspaceProvider = ({ children }: { children: ReactNode }) => {
  const [workspaces, setWorkspaces] = useState<Workspace[]>(initialWorkspaces);
  const [activeWorkspace, setActiveWorkspace] = useState<Workspace | null>(initialWorkspaces[0] || null);

  const addWorkspace = (workspace: Workspace) => {
    setWorkspaces((prev) => [...prev, workspace]);
  };

  return (
    <WorkspaceContext.Provider
      value={{
        workspaces,
        activeWorkspace,
        setActiveWorkspace,
        addWorkspace,
      }}
    >
      {children}
    </WorkspaceContext.Provider>
  );
};
