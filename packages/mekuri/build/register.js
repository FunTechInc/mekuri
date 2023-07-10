const n = ({
  path: e,
  children: r
}) => {
  if (e.length !== r.length)
    throw new Error(
      "Please make sure the length of the path and children match."
    );
  return e.map((t, h) => ({
    path: t,
    children: r[h]
  }));
};
export {
  n as register
};
//# sourceMappingURL=register.js.map
