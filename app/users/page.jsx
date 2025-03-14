import { getUsers } from "@/app/util/serverAction";

import sty from "./users.module.css";
import Link from "next/link";
import AccordionUi from "@/components/AccordionUi";
import Specificuser from "./Specificuser";
import CreateUser from "./CreateUser";
import DeleteUser from "./DeleteUser";

export default async function Users() {

  const users = await getUsers();

  if(!users) return <p>No user found</p>

  // console.log(users)
  return (
    <div className={sty.container}>
      <AccordionUi
        title={"All users"}
        options={{
          data: users,
          render: (ele) => <p key={ele._id}>{ele.username}</p>,
        }}
      />
      <AccordionUi
        title={"Specific user"}
        options={{
          details:<Specificuser/>
        }}
      />
      <AccordionUi
        title={"Create user"}
        options={{
          details:<CreateUser/>
        }}
      />
      <AccordionUi
        title={"Delete user"}
        options={{
          details:<DeleteUser/>
        }}
      />
    </div>
  );
}
