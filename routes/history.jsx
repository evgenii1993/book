// history.js
import createBrowserHistory from 'history/createBrowserHistory';
import createMemoryHistory from 'history/createMemoryHistory';
// export default createBrowserHistory({
//     /* pass a configuration object here if needed */
// })

export default (typeof(window) !== 'undefined') ? createBrowserHistory() : createMemoryHistory();