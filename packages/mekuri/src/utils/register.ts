export const register = ({
   path,
   children,
}: {
   path: string[];
   children: React.ReactNode[];
}) => {
   if (path.length !== children.length) {
      throw new Error(
         "Please make sure the length of the path and children match."
      );
   }
   return path.map((path, i) => {
      return {
         path: path,
         children: children[i],
      };
   });
};
