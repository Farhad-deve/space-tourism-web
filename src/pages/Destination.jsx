import { useState } from 'react'
import { destinations } from '/src/data.json'


const Destination = () => {
    const [active, setActive] = useState(0)
    const planet = destinations[active]

    return (
        <>
            <section className='destination-sec back-needs'>
                <div className='d-flex flex-column just-c-sb gap-5r s-pad text-center-mob'>
                    <h1 className='color-w font-f-Bar-Con font-w-400 lett-sp-4 font-s-2r word-sp-2'><b className='color-blue-300'>01</b> PICK YOUR DESTINATION</h1>

                    <div className='d-flex just-c-sb flex-column-tab align-i-center-tab text-center-tab-mob'>
                        <div className='width-50 d-flex align-i-center just-c-center'>
                            <img src={planet.images.png} alt={planet.name} className='tr-a-03s-ea width-100-mob' />
                        </div>

                        <div className='d-flex flex-column gap-2r width-50'>
                            <div>
                                <nav>
                                    <ul className='d-flex align-i-center gap-1-5r font-f-Bar-Con just-c-center-tab'>
                                        {destinations.map((item, index) => (
                                            <li key={item.name} onClick={() => setActive(index)} className={'color-blue-300 font-s-1-1r cursor-p lett-sp-2 tr-a-03s-ea pad-tb-1-5r ' + (index === active ? 'active-nav' : 'inactive-nav')}>{item.name}</li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>

                            <div className='d-flex flex-column just-c-center gap-2r'>
                                <div className='d-flex flex-column gap-1r'>
                                    <h1 className='color-w font-f-Belle font-s-5-5r font-w-400'>{planet.name}</h1>
                                    <p className='color-blue-300 line-height-1-7 font-f-Bar font-s-1-1r'>{planet.description}</p>
                                </div>

                                <div className='line-2'></div>

                                <div className='d-flex gap-5r just-c-center-tab flex-column-mob'>
                                    <div className='d-flex flex-column gap-05r'>
                                        <p className='color-blue-300 font-f-Bar-Con lett-sp-2 font-s-1-1r'>AVG. DISTANCE</p>
                                        <h2 className='color-w font-f-Belle font-w-400 text-tr-upp font-s-2r'>{planet.distance}</h2>
                                    </div>

                                    <div className='d-flex flex-column gap-05r'>
                                        <p className='color-blue-300 font-f-Bar-Con lett-sp-2 font-s-1-1r'>EST. TRAVEL TIME</p>
                                        <h2 className='color-w font-f-Belle font-w-400 text-tr-upp font-s-2r'>{planet.travel}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Destination