import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Layout } from './layouts/Layout'
import ArticleList from './pages/ArticlePage/ArticleList'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
// import { ArticleDetail } from './pages/ArticleDetail/ArticleDetail'

function App() {
  const [count, setCount] = useState(0)

  return (

      <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ArticleList />} />
          {/* <Route path="/article/:id" element={<ArticleDetail />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
        
}

export default App
