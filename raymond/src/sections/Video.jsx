import vids from "../components/vids";
import Videos from "../components/Videos";

const Video = () => {
    return (
        <>
            <section className="vid" id="webcasts">
                <div className="SectionHeading">
                    <h1>webcasts</h1>
                </div>

                <div className="row row-cols-1 row-cols-md-3">
                    {vids.map((watch) => {
                        return (
                            <div className="col mb-4">
                                <Videos key={watch.id} {...watch}/>
                            </div>
                        )
                    })}
                </div>
            </section>
            <hr/>
        </>
    )
}

export default Video;