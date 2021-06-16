import React, { useEffect, useState } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'
import { getMoviesDetail } from '../Services/ListService';
export function MovieDetails() {

    const [details, setDetails] = useState({})
    const history = useHistory()

    useEffect(() => {
        Aos.init({ duration: 1000, delay: 500, });
        getMoviesDetails()
    }, []);

    const getMoviesDetails = () => {
        let param = new URLSearchParams(history.location.search)
        let params = { i: param.get('id'), apikey: "fe66bfa7" }

        getMoviesDetail(params).then(res => {

            setDetails(res)
        })
    }

    return (
        <>
            <section className="testimonial">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2 className="text-center text-white section_heading" data-aos="fade-up">Product</h2>
                        </div>
                        <div className="col-md-12 mx-auto" data-aos="fade-down">
                            <div className="white_box h-100 row">
                                <div className="col-6">
                                    <img src={details.Poster} />
                                </div>
                                <div className="col-6">
                                    <div className="text-left">
                                        <h5 className="fw-bold text-primary py-3">{details.Title}</h5>
                                        <p className="text-muted">
                                            {details.Plot}
                                        </p>
                                    </div>
                                    <div>
                                        <label className="px-1">Production :</label>
                                      <p>{details.Production}</p>
                                    </div>
                                    <div className="d-flex flex-column mt-3">
                                        <label className="m-1">Awards</label>
                                        <p>{details.Awards}</p>
                                    </div>
                                    <div className="add-cart mt-4">
                                        <label className="m-1">Language: </label>

                                       <p>{details.Language}</p>
                                    </div>
                                    <div className="d-flex justify-content-between mt-3">
                                       
                                        <button className="btn btn-warning"
                                            onClick={()=>history.push('/movie-list')}

                                        >
                                            go Back
                                        </button>

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
