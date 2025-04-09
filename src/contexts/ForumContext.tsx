import React, { createContext, useContext, useState } from "react";

interface ForumThread {
  id: string;
  title: string;
  content: string;
  category: string;
  lastActivity: string;
}

interface ForumContextProps {
  threads: ForumThread[];
  addThread: (thread: ForumThread) => void;
}

const ForumContext = createContext<ForumContextProps | undefined>(undefined);

export const ForumProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [threads, setThreads] = useState<ForumThread[]>([]);

  const addThread = (thread: ForumThread) => {
    setThreads((prevThreads) => [thread, ...prevThreads]);
  };

  return (
    <ForumContext.Provider value={{ threads, addThread }}>
      {children}
    </ForumContext.Provider>
  );
};

export const useForum = () => {
  const context = useContext(ForumContext);
  if (!context) {
    throw new Error("useForum must be used within a ForumProvider");
  }
  return context;
};