import { crew } from '/src/data.json'
import { useState } from 'react'

const Crew = () => {
    const [active, setActive] = useState(0)
    const member = crew[active]

    return (
        <>
            <section className="crew-sec back-needs d-flex flex-column gap-5r s-pad text-center-mob">
                <h1 className="color-w font-f-Bar-Con font-w-400 font-s-2r lett-sp-4 word-sp-2"><b className='color-blue-300'>02</b> MEET YOUR CREW</h1>

                <div className='d-flex align-i-center just-c-sb gap-5r flex-column-tab text-center-tab-mob'>
                    <div className='d-flex flex-column just-c-sb gap-5r width-50'>
                        <div className='d-flex flex-column gap-1-5r'>
                            <h1 className='color-blue-300 font-w-400 font-f-Belle text-tr-upp font-s-2r'>{member.role}</h1>
                            <h1 className='color-w font-w-400 font-f-Belle font-s-3-5r text-tr-upp'>{member.name}</h1>
                            <p className='color-blue-300 line-height-1-7 font-f-Bar font-s-1-1r'>{member.bio}</p>
                        </div>

                        <div>
                            <nav>
                                <ul className='d-flex align-i-center gap-2r just-c-center-tab'>
                                    {crew.map((item, index) => (
                                        <div key={item.name} onClick={() => setActive(index)} className={'dot cursor-p bor-rad-50p tr-a-03s-ea' + (index === active ? ' bg-w' : ' bg-blue-300 opacity-05 inactive-dot')}></div>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div className='width-50'>
                        <img src={member.images.png} alt={member.name} className='width-100-mob' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Crew