import { createBrowserHistory } from "history";

export default function forwardTo(location) {
  createBrowserHistory.push(location);
}
