export const coctailsActionNames = {
  FETCH_ALL_COCTAILS_FINISHED: 'FETCH_ALL_COCTAILS_FINISHED',
  FETCH_COCTAILS_BY_CATEGORY_FINISHED: 'FETCH_COCTAILS_BY_CATEGORY_FINISHED'
}

export const fetchAllCoctailsCategoryFinished = (data) => {
  return {
      type: coctailsActionNames.FETCH_ALL_COCTAILS_FINISHED,
      payload: data
  }
}

export const fetchCoctailsByCategoryFinished = (data) => {
  return {
      type: coctailsActionNames.FETCH_COCTAILS_BY_CATEGORY_FINISHED,
      payload: data
  }
}
