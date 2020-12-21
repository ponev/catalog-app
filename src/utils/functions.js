export function setFiltersAndSearch(data, saveCats, searchStr) {
  let dataFilter = [...data]

  if (saveCats.length > 0) {
    dataFilter = dataFilter.filter(item => saveCats.indexOf(item.category) > -1)
  }
  if (searchStr.length > 0) {
    dataFilter = dataFilter.filter(
      item => item.title.toLowerCase().indexOf(searchStr.toLowerCase()) > -1
    )
  }

  return dataFilter
}

export function checkedCategories(cats, value) {
  const index = cats.indexOf(value)

  if (index === -1) {
    cats.push(value)
  } else {
    cats.splice(index, 1)
  }

  return cats
}
