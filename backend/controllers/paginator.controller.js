export const paginationController = (req, res) => {
  const { paginatedResult } = res;

  if (!paginatedResult) {
    return res.status(401).send("Pagination do not work correctly");
  }

  res.status(200).send(paginatedResult);
};
