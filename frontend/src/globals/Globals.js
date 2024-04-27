const importAll = (r) => r.keys().map(r);

export const filesInFolder = (path, pattern) => {
  return importAll(
    require.context(
      path,
      false,
      pattern
    )
  );
};
