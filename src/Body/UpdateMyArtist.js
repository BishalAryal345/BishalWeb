import { render } from "@testing-library/react"
import axios from "axios"
import { Component } from "react"
import '../styles/contact_styles.css'
import '../styles/contact_responsive.css'
import '../plugins/font-awesome-4.7.0/css/font-awesome.min.css'

class UpdateMyArtist extends Component {
    state = {
        FullName: "",
        Profession: "",
        PriceRate:"",
        id: this.props.match.params.id
    }
    componentDidMount() {
        console.log(this.state.id)
        axios.get("http://localhost:900/artist/single/" + this.state.id)

            .then((response) => {
                console.log(response)
                this.setState({
                    FullName: response.data.FullName,
                    Profession: response.data.Profession,
                    PriceRate: response.data.PriceRate
                })

            })
            .catch((err) => {

            })

    }
    ChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    updateArtist = (e) => {
        e.preventDefault()
        axios.put("http://localhost:900/artist/update", this.state)
            .then((response) => {
                console.log(response)
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

                                <h3 className="bg-light p-4" id="projectAnchor">!! Updating Artist !!</h3>
                                <form class="contact_title text-center">
                                    <h4>
                                        Artist Name:
    <input type="text"
                                            value={this.state.FullName}
                                            name="FullName" onChange={this.ChangeHandler} />
                                    </h4>
                                    <h4>
                                        Profession:
    <input type="text"
                                            value={this.state.Profession}
                                            name="Profession" onChange={this.ChangeHandler} />
                                    </h4>
                                    <h4>
                                        PriceRate:
    <input type="text"
                                            value={this.state.PriceRate}
                                            name="PriceRate" onChange={this.ChangeHandler} />
                                    </h4>
                                    <button type="submit" onClick={this.updateArtist}>Update</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default UpdateMyArtist