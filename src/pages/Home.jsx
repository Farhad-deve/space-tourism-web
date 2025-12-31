import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <section className="home-sec back-needs d-flex just-c-sb align-i-center gap-2r s-pad flex-column-tab just-c-center-tab text-center-tab-mob">
                <div className="d-flex flex-column gap-1-5r">
                    <h1 className="color-blue-300 font-f-Bar-Con font-w-400 lett-sp-4 font-s-2r">SO, YOU WANT TO TRAVEL TO</h1>
                    <h1 className="color-w font-f-Belle font-s-9r font-w-400">SPACE</h1>
                    <p className="color-blue-300 font-f-Bar font-s-1-1r line-height-1-7">
                        Let's face it; if you want to go to space, you might as well genuinely go<br className='hide-mob'></br>
                        to outer space and not hover kind of on the edge of it. Well sit back,<br className='hide-mob'></br>
                        and relax because we'll give you a truly out of this world experience!
                    </p>
                </div>

                <div>
                    <Link to="/destination">
                        <button className='bg-w bor-rad-50p font-f-Belle color-blue-900 font-s-2r tr-a-03s-ea cursor-p explore-btn'>
                            EXPLORE
                        </button>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default Home