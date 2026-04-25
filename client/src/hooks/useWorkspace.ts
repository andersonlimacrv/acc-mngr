import { useContext } from "react";
import { WorkspaceContext } from "@/contexts/workspace-context";
import { type WorkspaceContextType } from "@/types/workspace";

const useWorkspace = (): WorkspaceContextType => {
  const context = useContext(WorkspaceContext);
  if (context === undefined) {
    throw new Error("useWorkspace must be used within a WorkspaceProvider");
  }
  return context;
};

export { useWorkspace };
