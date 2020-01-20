import React, { useState, useContext } from "react"
// import merge from "deepmerge"

import defaultOptions from "../utils/default-options"

const ElementsStateContext = React.createContext()
const ElementsUpdateContext = React.createContext()

const ElementsProvider = ({ children }) => {
  const [elements, setElements] = useState({
    options: defaultOptions,
    menuActive: false,
    sideNav: true,
    layout: "content",
  })

  return (
    <ElementsStateContext.Provider value={elements}>
      <ElementsUpdateContext.Provider value={setElements}>
        {children}
      </ElementsUpdateContext.Provider>
    </ElementsStateContext.Provider>
  )
}

// Usage Hooks
// TODO - refactor functions as a reducer

function useOptions() {
  const { options } = useContext(ElementsStateContext)

  if (typeof options === undefined) {
    throw new Error("useOptions must be used within an ElementsProvider")
  }

  return options
}

function useOptionsUpdater() {
  const setElements = useContext(ElementsUpdateContext)

  if (typeof options === undefined) {
    throw new Error("useOptionsUpdater must be used within an ElementsProvider")
  }

  function setOptions(options) {
    setElements(state => ({
      ...state,
      options,
    }))
  }

  return setOptions
}

function useMenu() {
  const { menuActive } = useContext(ElementsStateContext)
  const setElements = useContext(ElementsUpdateContext)

  if (typeof menuActive === undefined) {
    throw new Error("useMenu must be used within an ElementsProvider")
  }

  function toggleMenu() {
    setElements(state => ({
      ...state,
      menuActive: !state.menuActive,
    }))
  }

  return [menuActive, toggleMenu]
}

function useLayout() {
  const { layout } = useContext(ElementsStateContext)
  const setElements = useContext(ElementsUpdateContext)

  if (typeof layout === undefined) {
    throw new Error("useLayout must be used within an ElementsProvider")
  }

  function setLayout(value) {
    setElements(state => ({
      ...state,
      layout: value,
    }))
  }

  return [layout, setLayout]
}

// function useTopbar() {
//   const setElements = useContext(ElementsUpdateContext)

//   if (typeof setElements === undefined) {
//     throw new Error("useTopbar must be used within an ElementsProvider")
//   }

//   function setTopbar(value) {
//     setElements(state =>
//       merge(state, { options: { topbar: { sticky: value } } })
//     )
//   }

//   return setTopbar
// }

function useSideNav() {
  const { sideNav } = useContext(ElementsStateContext)
  const setElements = useContext(ElementsUpdateContext)

  if (typeof sideNavActive === undefined) {
    throw new Error("useSideNav must be used within an ElementsProvider")
  }

  function setSideNav() {
    setElements(state => ({
      ...state,
      sideNavActive: !state.sideNavActive,
    }))
  }

  return [sideNav, setSideNav]
}

export {
  ElementsProvider,
  useOptions,
  useOptionsUpdater,
  useMenu,
  useLayout,
  useSideNav,
  // useTopbar,
}