export const paginationMiddlewares = (req, res, next) => {
  const page = Math.max(1, parseInt(req?.query.page) || 1);

  const limit = Math.max(1, parseInt(req?.query.limit) || 10);
  const model = req?.model;
  if (!Array.isArray(model)) {
    return res.status(400).json({ error: "No data to paginate" });
  }

  model.sort((a, b) => {
    const parseDate = (str) => {
      const [datePart, timePart] = str.split(", ");
      const [day, month, year] = datePart.split(".").map(Number);
      const [hours, minutes] = timePart.split(":").map(Number);
      return new Date(year, month - 1, day, hours, minutes);
    };

    const dateA = parseDate(a.dateForCreated);
    const dateB = parseDate(b.dateForCreated);
    return dateB - dateA; // descending order
  });

  // last add data is first

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const paginatedUsers = model.slice(startIndex, endIndex);

  const sanitizedUsers = paginatedUsers.map(({ password, ...rest }) => rest);

  const result = {
    page,
    limit,
    totalUsers: model.length,
    totalPages: Math.ceil(model.length / limit),
    data: sanitizedUsers,
  };

  res.paginatedResult = result;
  next();
};
