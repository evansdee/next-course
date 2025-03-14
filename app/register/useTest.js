import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addUser } from "@/app/util/service";

export function useTest() {
  const queryClient = useQueryClient();

  const { mutate, isPending, isError } = useMutation({
    mutationFn: (inp) => addUser(inp),
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]); // Refetch posts after deletion
    },
  });

  return { mutate, isPending, isError };
}
