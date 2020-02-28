import React from 'react';
import './main.scss'
import {connect} from "react-redux";

const Main = ({
                  coctails
              }) => {
    return (
        <div className="main">
            {
                coctails.coctailsList.drinks
                && coctails.coctailsList.drinks.map((e, index) => {
                    console.log(e.strDrink)
                    return (
                        <div className='main-item'>
                            <img src={e.strDrinkThumb} alt=""/>
                            <h1
                                className='main-item-text'
                                key={e + index}
                            >
                                {e.strDrink}
                            </h1>
                        </div>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        coctails: state.coctails
    };
};
export default connect(mapStateToProps, null)(Main)