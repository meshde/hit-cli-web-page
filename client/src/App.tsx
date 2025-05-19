import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Introduction from "./pages/docs/Introduction";
import Installation from "./pages/docs/Installation";
import GettingStarted from "./pages/docs/GettingStarted";
import Usage from "./pages/docs/Usage";
import RouteParams from "./pages/docs/RouteParams";
import EnvironmentVariables from "./pages/docs/EnvironmentVariables";
import EphemeralEnvironmentVariables from "./pages/docs/EphemeralEnvironmentVariables";
import RequestHeaders from "./pages/docs/RequestHeaders";
import NestedSubcommands from "./pages/docs/NestedSubcommands";
import InspectingResponse from "./pages/docs/InspectingResponse";
import Postscripts from "./pages/docs/Postscripts";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/docs" component={Introduction} />
      <Route path="/docs/installation" component={Installation} />
      <Route path="/docs/getting-started" component={GettingStarted} />
      <Route path="/docs/usage" component={Usage} />
      <Route path="/docs/route-params" component={RouteParams} />
      <Route path="/docs/environment-variables" component={EnvironmentVariables} />
      <Route path="/docs/ephemeral-environment-variables" component={EphemeralEnvironmentVariables} />
      <Route path="/docs/request-headers" component={RequestHeaders} />
      <Route path="/docs/nested-subcommands" component={NestedSubcommands} />
      <Route path="/docs/inspecting-response" component={InspectingResponse} />
      <Route path="/docs/postscripts" component={Postscripts} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
