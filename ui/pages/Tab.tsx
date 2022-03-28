import React, { ReactElement } from "react"
import { Provider } from "react-redux"
import { HashRouter, Route, Switch } from "react-router-dom"
import { Store } from "redux"
import Ledger from "./Ledger/Ledger"
import TabNotFound from "./TabNotFound"

/**
 * Entry point for UI shown in browser tabs.
 */
export default function Tab({ store }: { store: Store }): ReactElement {
  return (
    <>
      <Provider store={store}>
        {/* HashRouter seems the only choice supporting safe page reloads. */}
        <HashRouter>
          <Switch>
            <Route path="/ledger" exact>
              <Ledger />
            </Route>
            <Route>
              <TabNotFound />
            </Route>
          </Switch>
        </HashRouter>
      </Provider>
      <>
        <style jsx global>
          {`
            body,
            #tally-root {
              height: 100%;
            }
          `}
        </style>
      </>
    </>
  )
}
