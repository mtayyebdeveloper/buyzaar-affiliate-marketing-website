import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Shop from './pages/Shop.jsx'
import Blog from './pages/Blog.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import FAQ from './pages/FAQ.jsx'
import Deals from './pages/Deals.jsx'
import AffiliateDisclosure from './pages/AffiliateDisclosure.jsx'


const router = createBrowserRouter([
    {
        path: "",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/shop",
                element: <Shop />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/privacy-policy",
                element: <PrivacyPolicy />
            },
            {
                path: "/faq",
                element: <FAQ />
            },
            {
                path: "/deals",
                element: <Deals />
            },
            {
                path: "/affiliate-disclosure",
                element: <AffiliateDisclosure />
            },
        ]
    }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}>
        <App />
    </RouterProvider>
)
