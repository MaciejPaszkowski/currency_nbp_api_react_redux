import React from "react";
import { connect } from "react-redux";
import "../Currencies/Currencies.scss";
import FavouritesList from "../../components/FavouritesList";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

const Favourites = ({ favourites }) => {
  return (
    <section className="currencies">
      <h1>jestem tu</h1>
      <FavouritesList data={favourites} icon={faWindowClose} />
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    favourites: state.currencies.favourites,
  };
};

export default connect(mapStateToProps)(Favourites);
