import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './layouts/Layout'
import ArticleList from './pages/ArticlePage/ArticleList'
import ArticleDetail from './pages/ArticleDetailPage/ArticleDetail'
import Contact from './pages/Contact/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ArticleList />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
