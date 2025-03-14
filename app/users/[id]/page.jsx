import { getUser } from "@/app/util/serverAction";
import UpdateUser from "../Specificuser";



export default async function User({params}) {

    const {id} = await params
    const user = await getUser(id)
    // console.log(user)

  return (
    <div>
        <div>

        <h1>User</h1>
        <div>{user.username}</div>
        <div>{user.email}</div>
        </div>
        <UpdateUser id={id}/>

    </div>
  );
}
