import React, { useEffect } from 'react'
import { useState } from 'react'

import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { getMovies } from '../Services/ListService'
import ReactPaginate from 'react-paginate';


export function MovieList() {
    const [movieItemList, setMovieItemList] = useState([])
    const [pagination, setPagination] = useState({ page: 1, limit: 10, search: 'Bat' })
    // const [movieItemList, setMovieItemList] = useState([])


    // const [data, setData] = useState([])
    const history = useHistory()

    useEffect(() => {
        getMoviesList()
    }, [])

    useEffect(() => {
        if (pagination.reset) {
            getMoviesList()
        }
    }, [pagination])

    const getMoviesList = (page = pagination.page) => {
        let params = { s: pagination.search, page: page, apikey: "fe66bfa7" }
        if (pagination.type) {
            params.type = pagination.type
        }
        getMovies(params).then(res => {
            if (res.Response === 'True') {
                setMovieItemList(res.Search)
                setPagination({ ...pagination, totalResults: res.totalResults, reset: false })
            }
        })
    }

    const handlePageChange = (selectedObject) => {
        getMoviesList(selectedObject.selected + 1);
    };

    const resetFilter = () => {
        setPagination({ ...pagination, search: '', type: '', reset: true })
    }

    return (
        <section className="testimonial">
            <div className="container h-100">
                <div className="row">
                    <div className="table-responsive bg-light py-2">
                        <div className="d-flex justify-content-between my-3">
                            <div>

                                <h3>Movie List</h3>
                            </div>
                            <div className="filterinput mr-3">
                                <input
                                    type="text"
                                    className="form-control w-200"
                                    onChange={(e) => setPagination({ ...pagination, search: e.target.value })}
                                    value={pagination.search}
                                    placeholder="Search"
                                />
                            </div>
                            <div>
                                <select
                                    className="form-control w-200"
                                    onChange={(e) => setPagination({ ...pagination, type: e.target.value })}
                                    value={pagination.type}
                                >
                                    <option value="" selected disabled>select</option>
                                    <option value="movie">movie</option>
                                    <option value="series">series</option>
                                    <option value="episode">episode</option>
                                </select>
                            </div>
                            <button className="btn btn-success btn-lg" onClick={() => getMoviesList()}>Search</button>
                            <button className="btn btn-danger btn-lg" onClick={() => resetFilter()}>Reset</button>
                        </div>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Poster</th>
                                    <th>Title</th>
                                    <th>Type</th>
                                    <th>Year</th>
                                </tr>
                            </thead>
                            <tbody>
                                {movieItemList.length > 0 && movieItemList.map((list, key) =>
                                    <tr key={key} className="pointer" onClick={()=>history.push('/movie-details?id='+list.imdbID )}>
                                        <td>
                                            <a href=""><img src={list.Poster} height="60" width="40" /></a>
                                        </td>
                                        <td>
                                            <p className="mb-0">{list.Title}</p>
                                        </td>
                                        <td>{list.Type}</td>
                                        <td>{list.Year}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        <div className="paginateArea">
                            {movieItemList.length > 0 && pagination.totalResults > pagination.limit ? (
                                <ReactPaginate
                                    initialPage={pagination.page - 1}
                                    pageCount={pagination.totalResults / pagination.limit}
                                    pageRange={2}
                                    marginPagesDisplayed={2}
                                    onPageChange={(e) => handlePageChange(e)}
                                    containerClassName={'container'}
                                    previousLinkClassName={'page'}
                                    breakClassName={'page'}
                                    nextLinkClassName={'page'}
                                    pageClassName={'page'}
                                    disabledClassName={'disabled'}
                                    activeClassName={'active'}
                                />
                            ) : (
                                null
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
