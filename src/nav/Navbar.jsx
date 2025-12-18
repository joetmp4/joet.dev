import './navbar.css'
import parentalAdvisory from '../assets/imgs/japaneseparentaladvisory.jpg'

function Nav(){
    return(
        <nav className='nav-bar'>
            <div className='options'>
                <div className='close'></div>
                <div className='min'></div>
                <div className='full'></div>
            </div>
            <img src={parentalAdvisory} alt='japanese parental advisory' />
            <h1 className='name'>joet.dev</h1>
            <ul className='list-wrapper'>
                <li>home</li>
                <li>resume</li>
                <li>skills</li>
            </ul>
        </nav>
    )
}

export default Nav