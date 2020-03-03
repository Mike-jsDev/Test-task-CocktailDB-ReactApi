import React from 'react';
import './main.scss'
import {connect} from "react-redux";

const Main = ({
    coctails
}) => {
    return (
        <div className="main">
            
            <div className="main-wrapper">
            <p className="main-text">Ordinary Drinks</p>
               {
                  coctails.coctailsList.drinks 
                  && coctails.coctailsList.drinks.map((e, index) => {
                      console.log(e.strDrink)
                      return (
                            <div className="main-wrapper-item">
                            <img src={e.strDrinkThumb} alt=""/>
                            <h3 className="main-wrapper-item-text" 
                                key={e + index}
                                >
                                {e.strDrink}
                            </h3>
                        </div>
                    )
                  })
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        coctails: state.coctails
    };
};
export default connect(mapStateToProps, null)(Main)