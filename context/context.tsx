"use client";

import { createContext, useCallback, useContext, useReducer, ReactNode } from "react";

// ─── Action Type Constants ────────────────────────────────────────────────────

const ActionTypes = {
  MODAL: "MODAL",
  PORTFOLIOMODAL: "PORTFOLIOMODAL",
  BLOGMODAL: "BLOGMODAL",
  GALLERY: "GALLERY",
} as const;

type ActionType = (typeof ActionTypes)[keyof typeof ActionTypes];

// ─── State & Action Types ─────────────────────────────────────────────────────

interface AppState {
  modal: boolean;
  portfolioModal: boolean;
  blogModal: boolean;
  gallery: boolean;
}

type AppAction =
  | { type: typeof ActionTypes.MODAL; payload: boolean }
  | { type: typeof ActionTypes.PORTFOLIOMODAL; payload: boolean }
  | { type: typeof ActionTypes.BLOGMODAL; payload: boolean }
  | { type: typeof ActionTypes.GALLERY; payload: boolean };

// ─── Context Value Type ───────────────────────────────────────────────────────

interface AppContextValue {
  modal: boolean;
  modalToggle: (value: boolean) => void;
  portfolioModal: boolean;
  setPortfolioModal: (value: boolean) => void;
  blogModal: boolean;
  setBlogModal: (value: boolean) => void;
  gallery: boolean;
  setGallery: (value: boolean) => void;
}

// ─── Context ──────────────────────────────────────────────────────────────────

const AppContext = createContext<AppContextValue | undefined>(undefined);

// ─── Reducer ─────────────────────────────────────────────────────────────────

const reducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case ActionTypes.MODAL:
      return { ...state, modal: action.payload };
    case ActionTypes.PORTFOLIOMODAL:
      return { ...state, portfolioModal: action.payload };
    case ActionTypes.BLOGMODAL:
      return { ...state, blogModal: action.payload };
    case ActionTypes.GALLERY:
      return { ...state, gallery: action.payload };
    default:
      return state;
  }
};

// ─── Provider Component ───────────────────────────────────────────────────────

interface AppStateProps {
  children: ReactNode;
}

const AppStateProvider = ({ children }: AppStateProps) => {
  const initialState: AppState = {
    modal: false,
    portfolioModal: false,
    blogModal: false,
    gallery: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const modalToggle = useCallback((value: boolean) => {
    dispatch({ type: ActionTypes.MODAL, payload: value });
  }, []);

  const setPortfolioModal = useCallback((value: boolean) => {
    dispatch({ type: ActionTypes.PORTFOLIOMODAL, payload: value });
  }, []);

  const setBlogModal = useCallback((value: boolean) => {
    dispatch({ type: ActionTypes.BLOGMODAL, payload: value });
  }, []);

  const setGallery = useCallback((value: boolean) => {
    console.log(value);
    dispatch({ type: ActionTypes.GALLERY, payload: value });
  }, []);

  const { modal, portfolioModal, blogModal, gallery } = state;

  return (
    <AppContext.Provider
      value={{
        modal,
        modalToggle,
        portfolioModal,
        setPortfolioModal,
        blogModal,
        setBlogModal,
        gallery,
        setGallery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// ─── Custom Hook ──────────────────────────────────────────────────────────────

export const useAppContext = (): AppContextValue => {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("useAppContext must be used within an AppStateProvider");
  }
  return ctx;
};

// ─── Exports ──────────────────────────────────────────────────────────────────

export default AppStateProvider;
export { AppContext };
export type { AppState, AppContextValue, AppAction, ActionType };