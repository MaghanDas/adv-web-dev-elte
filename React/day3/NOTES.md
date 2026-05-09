# Day 3 : learning about react routers.

1. React Router v6
So far everything lives on one page. React Router lets you build multiple "pages" in a single-page app. The URL changes, but the browser never actually navigates — React swaps components in and out.
Install it first:
bashnpm install react-router-dom
The core setup in main.jsx:
jsximport { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)