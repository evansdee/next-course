import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addUser, deleteUser } from "../util/service";
import { toast } from "react-toastify";



export function useUser(){

    const queryClient = useQueryClient();

    const { mutate, isPending, isError } = useMutation({
      mutationFn: (inp) => addUser(inp),
      onSuccess: () => {
        queryClient.invalidateQueries(["users"]); // Refetch posts after deletion
      },
    });
    
    return { mutate, isPending, isError };

}
export function useDeleteUser(){

    const queryClient = useQueryClient();

    const { mutate, isPending, isError,error } = useMutation({
      mutationFn: deleteUser,
      onSuccess: () => {
        queryClient.invalidateQueries(["users"]); // Refetch posts after deletion
        toast.success("User deleted successfully");
      },
      onError: () => {
        toast.error(error.message || error);
      },
    });
    
    return { mutate, isPending, isError,error };

}