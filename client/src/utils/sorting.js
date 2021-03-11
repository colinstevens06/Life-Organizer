const Sorter = {
  aToZName: function (input) {
    return input.sort(function (a, b) {
      if (b.name.toLowerCase() < a.name.toLowerCase()) {
        return 1
      } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1
      } else {
        return 0
      }
    })
  },
  zToAName: function (input) {
    return input.sort(function (a, b) {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return 1
      } else if (b.name.toLowerCase() < a.name.toLowerCase()) {
        return -1
      } else {
        return 0
      }
    })
  },
  aToZCategory: function (input) {
    return input.sort(function (a, b) {
      if (b.category.toLowerCase() < a.category.toLowerCase()) {
        return 1
      } else if (a.category.toLowerCase() < b.category.toLowerCase()) {
        return -1
      } else {
        return 0
      }
    })
  },
  zToACategory: function (input) {
    return input.sort(function (a, b) {
      if (a.category.toLowerCase() < b.category.toLowerCase()) {
        return 1
      } else if (b.category.toLowerCase() < a.category.toLowerCase()) {
        return -1
      } else {
        return 0
      }
    })
  },
  aToZUpDate: function (input) {
    return input.sort(function (a, b) {
      if (b.lastUpdated.toLowerCase() < a.lastUpdated.toLowerCase()) {
        return 1
      } else if (a.lastUpdated.toLowerCase() < b.lastUpdated.toLowerCase()) {
        return -1
      } else {
        return 0
      }
    })
  },
  zToAUpDate: function (input) {
    return input.sort(function (a, b) {
      if (a.lastUpdated.toLowerCase() < b.lastUpdated.toLowerCase()) {
        return 1
      } else if (b.lastUpdated.toLowerCase() < a.lastUpdated.toLowerCase()) {
        return -1
      } else {
        return 0
      }
    })
  },
  keyWord: function (sortType, ascending) {
    if (sortType === "name" && ascending === true) {
      return "name-ascending"
    } else if (sortType === "name" && ascending === false) {
      return "name-descending";
    } else if (sortType === "category" && ascending === true) {
      return "category-ascending"
    } else if (sortType === "category" && ascending === false) {
      return "category-descending";
    } else if (sortType === "date" && ascending === true) {
      return "date-ascending"
    } else {
      return "date-descending";
    }
  },
}




export default Sorter



