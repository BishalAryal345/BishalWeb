import { Component } from "react";
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
class Artist extends Component {
    state = {
        artist: [],
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }
    componentDidMount() {
        axios.get("http://localhost:900/artist/show")
            .then((response) => {
                console.log(response.data)
                this.setState({
                    artist: response.data.data
                })

            })
            .catch()
    }
    deleteArtist = (aid) => {
        axios.delete("http://localhost:900/artist/delete/" + aid, this.state.config)
            .then((response) => {
                console.log(response.data.message)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    render() {
        return (
            <div class="contact_form_section">
                <div class="container">
                    <div class="row">
                        <div class="col">

                            <div class="contact_form_container">

                                <h3 className="bg-light p-4" id="projectAnchor">!! Pick Up The Suitable And Best Artists From Here !!</h3>
                                <div className="card-deck p-2">

                                    {
                                        this.state.artist.map((myartist) => {
                                            return (
                                                // <p>{myartist.FullName}</p>
                                                <div className="col-md-4 p-3">
                                                    <div className="card">

                                                        <div className="card-body p-0 ">
                                                            <img class="card-img-top" src={"http://localhost:900/" + myartist.Pimage} />
                                                            <h4 className="card-title p-2">{myartist.Profession}</h4>
                                                            <h3 className="card-title p-2">{myartist.FullName}</h3>
                                                            <h5 className="card-title p-3">
                                                                {myartist.Description}
                                                            </h5>

                                                            <div className="text-center p-0">
                                                                {/* <p class="gold-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star black-star" aria-hidden="true"></i>
                        </p> */}
                                                                <h4>{myartist.PriceRate}</h4>



                                                                <p> <Link to={"/myprofile/" + myartist._id}> Learn More </Link>
                                                                    <a className="btn btn-outline-info p-3" href="/hire">!! Hire Now !!</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Artist