"use client";

import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import { CourseList } from "./course/list";
import { CourseCreate } from "./course/create";
import { CourseEdit } from "./course/edit";
import { UnitList } from "./unit/list";

const dataProvider = simpleRestProvider("/api");

const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="courses"
        list={CourseList}
        recordRepresentation="title"
        edit={CourseEdit}
        create={CourseCreate}
      />

      <Resource
        name="units"
        list={UnitList}
        recordRepresentation="title"
        edit={CourseEdit}
        create={CourseCreate}
      />
    </Admin>
  );
};

export default App;
