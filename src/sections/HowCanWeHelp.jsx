export function HowCanWeHelp(){
    const data = [
        {
            img: '/img/help/icon1.png',
            title: 'Search Engine Optimization',
            description: 'Maecenas elementum sapien in metus placerat finibus. Lorem ipsum dolor sit amet, vix an natum labitur eleif.',
        },
        {
            img: '/img/help/icon2.png',
            title: 'Social Media Strategy',
            description: 'Maecenas elementum sapien in metus placerat finibus. Lorem ipsum dolor sit amet, vix an natum labitur eleif.',
        },
        {
            img: '/img/help/icon3.png',
            title: 'Real Time and Data',
            description: 'Maecenas elementum sapien in metus placerat finibus. Lorem ipsum dolor sit amet, vix an natum labitur eleif.',
        },
        {
            img: '/img/help/icon4.png',
            title: 'Online Media Management',
            description: 'Maecenas elementum sapien in metus placerat finibus. Lorem ipsum dolor sit amet, vix an natum labitur eleif.',
        },
        {
            img: '/img/help/icon5.png',
            title: 'Reporting & Analysis',
            description: 'Maecenas elementum sapien in metus placerat finibus. Lorem ipsum dolor sit amet, vix an natum labitur eleif.',
        },
        {
            img: '/img/help/icon6.png',
            title: 'Penalty Recovery',
            description: 'Maecenas elementum sapien in metus placerat finibus. Lorem ipsum dolor sit amet, vix an natum labitur eleif.',
        },
    ];

    return(
        <div className="container px-4 py-5" id="featured-3">
            <h2 className="pb-2 border-bottom">Columns with icons</h2>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                {
                    data.map((service, idx) => (
                        <div key={idx} className=" col">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                        <img src={service.img} alt="icon" />
                    </div>
                <h3 className="fs-2 text-body-emphasis">{service.title}</h3>
                <p>{service.description}</p>
                </div>
                ))
                }
            </div>
        </div>
    );
}