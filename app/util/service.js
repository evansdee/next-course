// "use server"


export async function addUser(inp) {
    const {username,email,password} = inp
    const newObj = {
        username,
        email,
        password,
    };

    try {
        const newUser = await fetch("/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newObj),
        });

        if (!newUser.ok) {
            throw new Error("Failed to add user");
        }

        const result = await newUser.json();
        console.log("User added successfully:", result);
    } catch (error) {
        console.error("Error adding user:", error);
    }
}

export const  deleteUser = async (id) => {
    const response = await fetch("/api/users/:id", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
  
    const data = response.json()
    // console.log(data,"data")
    if (!response.ok) {
      throw new Error(data.error || "Failed to delete user");
    }
  
    return data;
  };