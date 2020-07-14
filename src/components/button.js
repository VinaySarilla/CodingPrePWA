import React from "react"
import Loadable from "@loadable/component"
import M from "materialize-css"

export const Modal = Loadable(() => import("react-materialize/lib/Modal"))
