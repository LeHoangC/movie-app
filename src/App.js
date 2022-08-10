import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import Layout from './Layout'
import { routers } from './Router'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {routers.map((route) => {
                    const Page = route.element
                    return (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    )
                })}
            </Routes>
        </BrowserRouter>
    )
}

export default App
