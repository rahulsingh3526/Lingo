import { Datagrid, List, TextField } from "react-admin";

export const CourseList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="imageSrc" />
      </Datagrid>
    </List>
  );
};
