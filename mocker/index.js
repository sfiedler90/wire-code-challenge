const delay = require("mocker-api/delay");
const LibraryItems = require("./LibraryItems");
const noProxy = process.env.NO_PROXY === "true";

const BASE_URL = "/api/search";

const proxy = {
  withFullUrlPath: true,

  [`GET ${BASE_URL}(.*)`]: (req, res) => {
    let { sort = "NAME", q = "" } = req.query;
    q = q.toLowerCase();

    let items = [...LibraryItems];

    if (q.length > 0) {
      items = filterBySearchString(items, q);
    }

    if (sort == "NAME") {
      items = sortItemsByName(items);
    }

    if (sort == "OWNER") {
      items = sortItemsByOwner(items);
    }

    if (sort == "RATING") {
      items = sortItemsByRating(items);
    }

    return res.json(items);
  },
};

const filterBySearchString = (items, searchString) =>
  items.filter(
    (item) =>
      item.name.toLowerCase().includes(searchString) ||
      item.owner.toLowerCase().includes(searchString)
  );

const sortItemsByName = (items) =>
  items.sort((a, b) => (a.name > b.name ? 1 : -1));

const sortItemsByOwner = (items) =>
  items.sort((a, b) => (a.owner > b.owner ? 1 : -1));

const sortItemsByRating = (items) =>
  items.sort((a, b) => (a.rating < b.rating ? 1 : -1));

module.exports = noProxy ? {} : delay(proxy, 400);
