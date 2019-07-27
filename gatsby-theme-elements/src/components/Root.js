/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useLayoutEffect } from "react"
import { measure } from "../context/MeasureContext"
import { Global } from "@emotion/core"
// import styles from "../config/styles"
import reset from "../utils/reset"

function inspectWindow() {
  if (typeof window !== `undefined`) {
    return [window.innerWidth, window.innerHeight]
  }
}

const Root = props => {
  const { setViewportXY } = measure()

  // Component Lifecycle

  useLayoutEffect(() => {
    setViewportXY(inspectWindow())
    window.addEventListener(`resize`, handleResize)
    return () => window.removeEventListener(`resize`, handleResize)
  }, [])

  // Event Handlers

  const handleResize = () => {
    setViewportXY(inspectWindow())
  }

  return (
    <>
      <Global styles={reset} />
      <div
        id="__elements"
        sx={{ bg: "background", color: "text", fontFamily: "body" }}
        {...props}
      />
    </>
  )
}

export default Root
