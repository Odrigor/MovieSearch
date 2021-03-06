import PropTypes from "prop-types";

function Movie(props) {
    const {poster, title, year} = props
    return(
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                <img src={poster} alt={title} />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                <div className="media-content">
                    <p className="title is-4">{title}</p>
                    <p className="subtitle is-6">{year}</p>
                </div>
                </div>
            </div>
        </div>

        );
}

Movie.propTypes = {
    title: PropTypes.string,
    year: PropTypes.string,
    poster: PropTypes.string,
};
export default Movie;