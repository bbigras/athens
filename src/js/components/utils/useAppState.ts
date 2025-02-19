import React from 'react';
import { mockDatabases as databaseMenuData } from '@/concept/DatabaseMenu/mockData';
import * as presenceData from '@/PresenceDetails/mockData';

const mockData = {
  connectionStatus: 'connected',
  currentUser: {
    personId: '1',
    username: 'John Doe',
    color: '#007e51',
  },
  hostAddress: '192.169.0.1',
  activeDatabase: databaseMenuData[0],
  inactiveDatabases: databaseMenuData.slice(1),
  currentPageMembers: presenceData.currentPageMembers,
  differentPageMembers: presenceData.differentPageMembers,
}

export const useAppState = () => {

  // Session
  const [currentUser, setCurrentUser] = React.useState<Person | null>(mockData.currentUser);
  const [hostAddress, setHostAddress] = React.useState<string | null>(mockData.hostAddress);
  const [currentPageMembers, setCurrentPageMembers] = React.useState<PersonPresence[]>(mockData.currentPageMembers);
  const [differentPageMembers, setDifferentPageMembers] = React.useState<PersonPresence[]>(mockData.differentPageMembers);

  // Database
  const [activeDatabase, setActiveDatabase] = React.useState<Database | null>(mockData.activeDatabase);
  const [inactiveDatabases, setInactiveDatabases] = React.useState<Database[] | null>(mockData.inactiveDatabases);
  const [isSynced, setIsSynced] = React.useState<boolean>(null);
  const [connectionStatus, setConnectionStatus] = React.useState<ConnectionStatus>(mockData.connectionStatus as ConnectionStatus);

  // Preferences
  const [isThemeDark, setIsThemeDark] = React.useState<boolean>(false);

  // App properties
  const [route, setRoute] = React.useState<string>('');
  const [isOnline, setIsOnline] = React.useState<boolean>(false);

  // Window properties
  const [isWinFullscreen, setIsWinFullscreen] = React.useState<boolean>(false);
  const [isWinFocused, setIsWinFocused] = React.useState<boolean>(true);
  const [isWinMaximized, setIsWinMaximized] = React.useState<boolean>(false);
  const [isElectron, setIsElectron] = React.useState<boolean>(true);

  // Layout components
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = React.useState<boolean>(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = React.useState<boolean>(false);
  const [isCommandBarOpen, setIsCommandBarOpen] = React.useState<boolean>(false);

  // Dialogs and Workflows
  const [isMergeDialogOpen, setIsMergeDialogOpen] = React.useState<boolean>(false);
  const [isDatabaseDialogOpen, setIsDatabaseDialogOpen] = React.useState<boolean>(false);
  const [isSettingsOpen, setIsSettingsOpen] = React.useState<boolean>(false);

  return {
    currentUser,
    setCurrentUser,
    isOnline,
    setIsOnline,
    route,
    currentPageMembers,
    setCurrentPageMembers,
    differentPageMembers,
    setDifferentPageMembers,
    activeDatabase,
    setActiveDatabase,
    inactiveDatabases,
    isSettingsOpen,
    setIsSettingsOpen,
    setInactiveDatabases,
    isSynced,
    setIsSynced,
    isElectron,
    setIsElectron,
    setRoute,
    hostAddress,
    setHostAddress,
    isThemeDark,
    setIsThemeDark,
    isWinFullscreen,
    setIsWinFullscreen,
    isWinFocused,
    setIsWinFocused,
    isWinMaximized,
    setIsWinMaximized,
    isLeftSidebarOpen,
    setIsLeftSidebarOpen,
    isRightSidebarOpen,
    setIsRightSidebarOpen,
    isCommandBarOpen,
    setIsCommandBarOpen,
    isMergeDialogOpen,
    setIsMergeDialogOpen,
    isDatabaseDialogOpen,
    setIsDatabaseDialogOpen,
    connectionStatus,
    setConnectionStatus
  }
}