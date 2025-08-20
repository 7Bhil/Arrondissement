import { createContext, useContext, useReducer } from "react";

// État initial de l'application
const initialState = {
  // Interface utilisateur
  ui: {
    isLoading: false,
    isMobileMenuOpen: false,
    theme: "light",
    language: "fr",
  },

  // Données de l'application
  data: {
    news: [],
    projects: [],
    stats: null,
  },

  // Messages de notification
  notifications: [],

  // État d'authentification (pour l'admin)
  auth: {
    isAuthenticated: false,
    user: null,
    token: null,
  },
};

// Types d'actions
const actionTypes = {
  // UI Actions
  SET_LOADING: "SET_LOADING",
  TOGGLE_MOBILE_MENU: "TOGGLE_MOBILE_MENU",
  SET_THEME: "SET_THEME",
  SET_LANGUAGE: "SET_LANGUAGE",

  // Data Actions
  SET_NEWS: "SET_NEWS",
  ADD_NEWS: "ADD_NEWS",
  UPDATE_NEWS: "UPDATE_NEWS",
  DELETE_NEWS: "DELETE_NEWS",

  SET_PROJECTS: "SET_PROJECTS",
  ADD_PROJECT: "ADD_PROJECT",
  UPDATE_PROJECT: "UPDATE_PROJECT",
  DELETE_PROJECT: "DELETE_PROJECT",

  SET_STATS: "SET_STATS",

  // Notification Actions
  ADD_NOTIFICATION: "ADD_NOTIFICATION",
  REMOVE_NOTIFICATION: "REMOVE_NOTIFICATION",
  CLEAR_NOTIFICATIONS: "CLEAR_NOTIFICATIONS",

  // Auth Actions
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGOUT: "LOGOUT",
  SET_USER: "SET_USER",
};

// Reducer pour gérer les actions
const appReducer = (state, action) => {
  switch (action.type) {
    // UI Actions
    case actionTypes.SET_LOADING:
      return {
        ...state,
        ui: { ...state.ui, isLoading: action.payload },
      };

    case actionTypes.TOGGLE_MOBILE_MENU:
      return {
        ...state,
        ui: { ...state.ui, isMobileMenuOpen: !state.ui.isMobileMenuOpen },
      };

    case actionTypes.SET_THEME:
      return {
        ...state,
        ui: { ...state.ui, theme: action.payload },
      };

    case actionTypes.SET_LANGUAGE:
      return {
        ...state,
        ui: { ...state.ui, language: action.payload },
      };

    // Data Actions - News
    case actionTypes.SET_NEWS:
      return {
        ...state,
        data: { ...state.data, news: action.payload },
      };

    case actionTypes.ADD_NEWS:
      return {
        ...state,
        data: {
          ...state.data,
          news: [action.payload, ...state.data.news],
        },
      };

    case actionTypes.UPDATE_NEWS:
      return {
        ...state,
        data: {
          ...state.data,
          news: state.data.news.map((item) =>
            item.id === action.payload.id ? action.payload : item
          ),
        },
      };

    case actionTypes.DELETE_NEWS:
      return {
        ...state,
        data: {
          ...state.data,
          news: state.data.news.filter((item) => item.id !== action.payload),
        },
      };

    // Data Actions - Projects
    case actionTypes.SET_PROJECTS:
      return {
        ...state,
        data: { ...state.data, projects: action.payload },
      };

    case actionTypes.ADD_PROJECT:
      return {
        ...state,
        data: {
          ...state.data,
          projects: [action.payload, ...state.data.projects],
        },
      };

    case actionTypes.UPDATE_PROJECT:
      return {
        ...state,
        data: {
          ...state.data,
          projects: state.data.projects.map((item) =>
            item.id === action.payload.id ? action.payload : item
          ),
        },
      };

    case actionTypes.DELETE_PROJECT:
      return {
        ...state,
        data: {
          ...state.data,
          projects: state.data.projects.filter(
            (item) => item.id !== action.payload
          ),
        },
      };

    case actionTypes.SET_STATS:
      return {
        ...state,
        data: { ...state.data, stats: action.payload },
      };

    // Notification Actions
    case actionTypes.ADD_NOTIFICATION:
      return {
        ...state,
        notifications: [
          ...state.notifications,
          {
            id: Date.now(),
            ...action.payload,
          },
        ],
      };

    case actionTypes.REMOVE_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.filter(
          (notification) => notification.id !== action.payload
        ),
      };

    case actionTypes.CLEAR_NOTIFICATIONS:
      return {
        ...state,
        notifications: [],
      };

    // Auth Actions
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        auth: {
          isAuthenticated: true,
          user: action.payload.user,
          token: action.payload.token,
        },
      };

    case actionTypes.LOGOUT:
      return {
        ...state,
        auth: {
          isAuthenticated: false,
          user: null,
          token: null,
        },
      };

    case actionTypes.SET_USER:
      return {
        ...state,
        auth: { ...state.auth, user: action.payload },
      };

    default:
      return state;
  }
};

// Création du contexte
const AppContext = createContext();

// Provider du contexte
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Actions pour l'UI
  const setLoading = (isLoading) => {
    dispatch({ type: actionTypes.SET_LOADING, payload: isLoading });
  };

  const toggleMobileMenu = () => {
    dispatch({ type: actionTypes.TOGGLE_MOBILE_MENU });
  };

  const setTheme = (theme) => {
    dispatch({ type: actionTypes.SET_THEME, payload: theme });
    localStorage.setItem("theme", theme);
  };

  const setLanguage = (language) => {
    dispatch({ type: actionTypes.SET_LANGUAGE, payload: language });
    localStorage.setItem("language", language);
  };

  // Actions pour les données
  const setNews = (news) => {
    dispatch({ type: actionTypes.SET_NEWS, payload: news });
  };

  const addNews = (newsItem) => {
    dispatch({ type: actionTypes.ADD_NEWS, payload: newsItem });
  };

  const updateNews = (newsItem) => {
    dispatch({ type: actionTypes.UPDATE_NEWS, payload: newsItem });
  };

  const deleteNews = (id) => {
    dispatch({ type: actionTypes.DELETE_NEWS, payload: id });
  };

  const setProjects = (projects) => {
    dispatch({ type: actionTypes.SET_PROJECTS, payload: projects });
  };

  const addProject = (project) => {
    dispatch({ type: actionTypes.ADD_PROJECT, payload: project });
  };

  const updateProject = (project) => {
    dispatch({ type: actionTypes.UPDATE_PROJECT, payload: project });
  };

  const deleteProject = (id) => {
    dispatch({ type: actionTypes.DELETE_PROJECT, payload: id });
  };

  const setStats = (stats) => {
    dispatch({ type: actionTypes.SET_STATS, payload: stats });
  };

  // Actions pour les notifications
  const addNotification = (notification) => {
    dispatch({ type: actionTypes.ADD_NOTIFICATION, payload: notification });

    // Auto-supprimer la notification après 5 secondes
    setTimeout(() => {
      removeNotification(notification.id || Date.now());
    }, 5000);
  };

  const removeNotification = (id) => {
    dispatch({ type: actionTypes.REMOVE_NOTIFICATION, payload: id });
  };

  const clearNotifications = () => {
    dispatch({ type: actionTypes.CLEAR_NOTIFICATIONS });
  };

  // Actions pour l'authentification
  const login = (user, token) => {
    dispatch({
      type: actionTypes.LOGIN_SUCCESS,
      payload: { user, token },
    });
    localStorage.setItem("token", token);
  };

  const logout = () => {
    dispatch({ type: actionTypes.LOGOUT });
    localStorage.removeItem("token");
  };

  const setUser = (user) => {
    dispatch({ type: actionTypes.SET_USER, payload: user });
  };

  // Valeur du contexte
  const value = {
    // État
    state,

    // Actions UI
    setLoading,
    toggleMobileMenu,
    setTheme,
    setLanguage,

    // Actions données
    setNews,
    addNews,
    updateNews,
    deleteNews,
    setProjects,
    addProject,
    updateProject,
    deleteProject,
    setStats,

    // Actions notifications
    addNotification,
    removeNotification,
    clearNotifications,

    // Actions auth
    login,
    logout,
    setUser,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Hook pour utiliser le contexte
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp doit être utilisé dans un AppProvider");
  }
  return context;
};

export default AppContext;
