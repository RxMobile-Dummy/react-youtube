import React, { useState } from 'react'
import Headers from './components/header/Header'
import SideBar from './components/sideBar/SideBar'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/homeScreen/HomeScreen'
import LoginScreen from './screens/loginScreen/loginScreen'
import './_app.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const Layout = ({ children }) => {
        const [sidebar, toggleSidebar] = useState(false);

        const handleSidebar = () => toggleSidebar(value => !value);
        return (
                <>
                        <Headers handleSidebar={handleSidebar} />
                        <div className='app__container'>

                                <SideBar sidebar={sidebar} handleSidebar={handleSidebar} />
                                <Container fluid className='app__main'>
                                        {children}
                                </Container>
                        </div>

                </>
        )

}
const App = () => {
        return (
                <Router>
                        <Routes>
                                <Route path="/" exext element={<Layout>
                                        <HomeScreen />
                                </Layout>}></Route>
                                <Route path='/auth' element={<LoginScreen />}>
                                </Route>
                                <Route path='/search' element={<Layout>
                                        <h1>Search Results</h1>
                                </Layout>}>
                                </Route>
                        </Routes>
                </Router >)
}
export default App
