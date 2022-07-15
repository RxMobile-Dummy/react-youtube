import React, { useState } from 'react'
import Headers from './components/header/Header'
import SideBar from './components/sideBar/SideBar'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/homeScreen/HomeScreen'
import LoginScreen from './screens/loginScreen/loginScreen'
import './_app.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

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
        return <Router>
                <Route path='/'>
                        <Layout>
                                <HomeScreen></HomeScreen>
                        </Layout>
                </Route>
                <Route path='/auth'>
                        <LoginScreen></LoginScreen>
                </Route>
                <Route path='/search'>
                        <Layout>
                                <h1>Search Result</h1>
                        </Layout>
                </Route>
        </Router>
}
export default App
