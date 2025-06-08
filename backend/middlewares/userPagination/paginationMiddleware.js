// export const paginationMiddleware = async (req, res, next) => {
//   const allUsers = await db.find({});

//   const page = Math.max(1, parseInt(req.query.page) || 1);
//   const limit = Math.max(1, parseInt(req.query.limit) || 10);

//   const startIndex = (page - 1) * limit;
//   const endIndex = page * limit;
//   const paginatedUsers = allUsers.slice(startIndex, endIndex);

//   const result = {
//     page,
//     limit,
//     totalUsers: allUsers.length,
//     totalPages: Math.ceil(allUsers.length / limit),
//     data: paginatedUsers,
//   };
//   res.send(result);
//   next();
// };

export const paginationMiddlewares = (req, res, next) => {
  const page = Math.max(1, parseInt(req?.query.page) || 1);

  const limit = Math.max(1, parseInt(req?.query.limit) || 10);
  const model = req?.model;
  if (!Array.isArray(model)) {
    return res.status(400).json({ error: "No data to paginate" });
  }

    model.sort((a, b) => {
    const dateA = new Date(a.dateForCreated);
    const dateB = new Date(b.dateForCreated);
    return dateB - dateA; // descending order
  });
  // last add data is first

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const paginatedUsers = model.slice(startIndex, endIndex);

  const result = {
    page,
    limit,
    totalUsers: model.length,
    totalPages: Math.ceil(model.length / limit),
    data: paginatedUsers,
  };

  res.paginatedResult = result;
  next();
};
