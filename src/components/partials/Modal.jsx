import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

const MovieModal = ({ movie, show, setShow }) => {
  const handleClose = () => setShow(false);

  return (
    <div className="modal">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="font4">{movie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="font2">Rating: {movie.vote_average}</Modal.Body>
        <Modal.Body className="font1">{movie.overview}</Modal.Body>
        <Modal.Footer>
          <Link
            to={`/movie/${movie.id}`}
            variant="secondary"
            onClick={handleClose}
            className="more font2"
          >
            More
          </Link>
          <Button
            variant="secondary"
            className="font2 close"
            onClick={handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MovieModal;
