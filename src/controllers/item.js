exports.getItems = async (req, res, next) => {
  res.json([
    {
      id: 1,
      name: "Item 1",
      date: "2022-07-13"
    },
    {
      id: 2,
      name: "Item 2",
      date: "2022-07-01"
    }
  ]);
};