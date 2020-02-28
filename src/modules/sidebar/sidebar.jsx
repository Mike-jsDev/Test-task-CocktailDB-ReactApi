import React, {useEffect, useState} from 'react'
import {connect} from "react-redux";
import './sidebar.scss'
import {fetchAllCoctailsCategory, fetchCoctailsByCategory} from "../../store/coctails/coctails.thunk";
import {coctailsConstants} from "../../constants/coctails-category.constants";

const Sidebar = ({
                     fetchAllCoctailsCategory,
                     fetchCoctailsByCategory,
                     coctails
                 }) => {
    const [categories, setCategories] = useState()
    const [selectedCategories, setSelectedCategories] = useState([])

    useEffect(() => {
        fetchAllCoctailsCategory()
    }, [])

    useEffect(() => {
        setCategories(coctails.coctailsCategory.drinks)
    }, [coctails])

    useEffect(() => {
        console.log(selectedCategories);
    }, [selectedCategories])

    const toggleSelect = (e) => {
        const foundItem = selectedCategories.find(item => item === e)
        const categoriesList = foundItem
            ? selectedCategories.filter(el => el !== e)
            : [...selectedCategories, e]
        setSelectedCategories(categoriesList)
    }

    const handleSubmit = () => {
        Object.keys(coctailsConstants).filter(e => selectedCategories.includes(e)).map(item => fetchCoctailsByCategory(coctailsConstants[item]))
    }

    return (
        <div className='sidebar'>
            <form className="sidebar-form">
                {
                    categories && categories.map((e, index) => {
                        return (
                            <label key={index} htmlFor={e.strCategory}>
                                <input
                                    key={index}
                                    className="sidebar-form-input"
                                    type="checkbox"
                                    name={e.strCategory}
                                    value={e.strCategory}
                                    onClick={(e) => toggleSelect(e.target.value)}
                                />
                                {e.strCategory}
                            </label>
                        )
                    })
                }
            </form>
            <button
                className="sidebar-submitBtn"
                onClick={handleSubmit}
            >
                Apply
            </button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        coctails: state.coctails
    };
};
const mapDispatchToProps = {fetchAllCoctailsCategory, fetchCoctailsByCategory};
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
