export const checkIdIsValid = (id: string): boolean => {
  return id.length === 9 && id.startsWith("tt");
};

export const RewriteGroupName = (name: string): string => {
  if (!name) return name;

  return name[0].toUpperCase() + name.slice(1).replaceAll("_", " ");
};
