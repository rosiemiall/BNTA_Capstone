import NavBar from './NavBar'
import LandingPage from './LandingPage/LandingPage'
import { Outlet } from 'react-router-dom'
import CounterButton from './CounterButton';



const Template = ({route}) => {
    return (<>
        <section className="landing-title">
            <h1 className="title">PitStop</h1>
            <CounterButton />
            <NavBar route = {route}/>
        </section>

        <Outlet />

        <footer>
            <p>this is the footer</p>
        </footer>
    </>
    );
}

export default Template;