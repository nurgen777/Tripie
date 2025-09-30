import React from 'react'
import Tours from './pages/ToursPage/Tours'
import BlogPage from "./pages/BlogPage/BlogPage";
import ContactPage from './pages/ContactPage/ContactPage'

const App = () => {
  return (
    <div>
        <Tours />
        <ContactPage />
        <BlogPage />
    </div>
  )
}

export default App;
