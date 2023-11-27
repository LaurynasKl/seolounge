import ufo from '../assets/ufo .webp'

export function NoPage(){
    return (
        <>
            <section className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 offset-lg-2">
                        <h2>404</h2>
                        <p>Page not Found</p>
                    </div>
                    <div className="col-12 col-sm-6 col-md-8">
                        <img src={ufo} alt="UFO" />
                    </div>
                </div>
            </section>
        </>
    );
}