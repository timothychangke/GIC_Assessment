import { useCreateCafe } from "../services/mutations";
import { useGetCafesByLocation } from "../services/queries";

const CafePage = () => {
  const { data: cafes, isLoading, isError } = useGetCafesByLocation();
  const createCafeMutation = useCreateCafe()
  const handleCreateCafeSubmit = (newCafe) => {
    createCafeMutation.mutate(newCafe)
  }

  return (
    <div>
        <form>

        </form>
      {cafes?.map((cafe) => (
        <p key={cafe.id}>{cafe.name}</p> 
      ))}
    </div>
  );
};

export default CafePage;

