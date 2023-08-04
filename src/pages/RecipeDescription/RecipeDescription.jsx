import React from 'react';
import './reciepeDescription.css';
import { useParams } from 'react-router-dom';
import { useDataContext } from '../../constext/DataContext';
import SearchNavber from '../../components/nav/searchNavber';
import EditForm from '../../components/EditForm/EditForm';

function RecipeDescription() {
  const [food, setFood] = React.useState(null);
  const { id } = useParams();
  const { editValues, openEdit, deleteRecipe } = useDataContext();

  React.useEffect(() => {
    const foodItem = JSON.parse(localStorage.getItem('item'))?.find(
      (item) => +item.id === +id
    );
    if (foodItem) setFood({ ...foodItem });
  }, [id]);

  return (
    <div className="reciepeDescription">
      {openEdit && <EditForm />}
      <SearchNavber />
      <div className="banner">
        <div className="banner__inner">
          <p className="foods">
            HomePage <i className="fa-sharp fa-solid fa-caret-right" />
          </p>
          <p className="foods">
            Create <i className="fa-sharp fa-solid fa-caret-right" />
          </p>
          <p className="foods">
            Food <i className="fa-sharp fa-solid fa-caret-right" />
          </p>
          <p className="foods__names">{food?.name}</p>
        </div>
      </div>
      {food && (
        <div className="fooder">
          <div className="fooder__container">
            <div className="food__imgcont">
              <img src={food?.imageUrl} alt="food" />
            </div>
            <div className="food__detail">
              <div className="fooder_name">
                <h1> {food?.name}</h1>
              </div>
              <div className="stars">
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
              </div>
              <div className="food__description">
                <p>{food?.description}</p>
              </div>
              <div className="food__origin">
                <p>Origin: {food?.Origin}</p>
              </div>
              <div className="progressBar">
                <div className="progress" />
              </div>
              <div className="favourites">
                <div className="favourites__inner">
                  <p>
                    Add To Wishlist
                    <i className="fa-solid fa-heart" />
                  </p>
                  <p>
                    <i className="fa-solid fa-shuffle" />
                    Compare
                  </p>
                  <span className="cart">Add To Cart</span>
                </div>
              </div>
              <div className="actions-cont">
                <div className="actons__inner">
                  <button
                    type="button"
                    className="edit__food"
                    onClick={() => editValues(food)}
                  >
                    <i className="fa-solid fa-pen-to-square" />
                  </button>
                  <button type="button" className="delete__recipe">
                    <i
                      className="fa-solid fa-trash"
                      aria-hidden
                      onClick={() => deleteRecipe(food?.id)}
                    />
                  </button>
                  <span className="cart">Share</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RecipeDescription;
