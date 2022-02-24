module.exports = {
  FIELD_PROJECTION: "$project",
  FIELD_FACET: "$facet",
  FIELD_ARRAY_ELEMAT: "$arrayElemAt",
  FIELD_MATCH: "$match",
  FIELD_LOOKUP: "$lookup",
  FIELD_UNWIND: "$unwind",
  FIELD_PUSH: "$push",
  FIELD_PULL: "$pull",
  FIELD_ROOT: "$$ROOT",
  FIELD_SUM: "$sum",
  FIELD_FROM: "from",
  FIELD_GROUP: "$group",
  FIELD_ORDERED: "ordered",
  FIELD_NEW: "new",
  FIELD_N: "n",
  FIELD_MULTI: "multi",
  FIELD_NMODIFIED: "nModified",
  FIELD_FOREIGN_FIELD: "foreignField",
  FIELD_LOCAL_FIELD: "localField",
  FIELD_AS: "as",
  FIELD_INPUT: "input",
  FIELD_COND: "cond",
  FIELD_PATH: "path",
  FIELD_PRESERVE_NULL_AND_EMPTY_ARRAYS: "preserveNullAndEmptyArrays",
  FIELD_CASE_INSENSITIVE: "i",
  FIELD_OPTIONS: "$options",

  OP_EQUAL: "$eq",
  OP_NOT_EQUAL: "$ne",
  OP_GTE: "$gte",
  OP_LTE: "$lte",
  OP_GT: "$gt",
  OP_AND: "$and",
  OP_All: "$all",
  OP_IN: "$in",
  OP_SET: "$set",
  OP_OR: "$or",
  OP_ELEM_MATCH: "$elemMatch",
  OP_REGEX: "$regex",
  OP_NIN: "$nin",
  OP_SORT: "$sort",
  OP_FILTER: "$filter",
  OP_SKIP: "$skip",
  OP_LIMIT: "$limit",
  OP_COUNT: "$count",
  FIELD_INLINE: "inline",
  OP_MR_SORT: "sort",
  OP_MR_LIMIT: "limit",
  FIELD_QUERY: "query",
  FIELD_REDUCE: "reduce",
  FIELD_MAP: "map",
  FIELD_OUT: "out",
  FIELD_SCOPE: "scope",
  OP_EXISTS: "$exists",
};
