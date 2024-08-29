import React from "react";
import Navbar from "./Navbar";
import { Link,  useParams ,useNavigate, Navigate} from "react-router-dom";
import { useQuery,useMutation } from "@tanstack/react-query";
import { getPetById,deletePet } from "./API/pets";

const PetDetail = () => {
  const {id}= useParams();
const {data: pet}= useQuery({
  queryKey : ["getPetById"],
  queryFn:()=>getPetById(id),

})
const navigate = useNavigate();
const {mutate} = useMutation({
  mutationKey: ["deletePet"],
  mutationFn:()=>deletePet(id),
  onSuccess:()=>{
    navigate("/petlist")
  }
})
  return (
    <>
    <Navbar/>
    <div className="bg-[#F9E3BE] w-screen h-[100vh] flex justify-center items-center">
      <div className="border border-black rounded-md w-[70%] h-[70%] overflow-hidden flex flex-col md:flex-row p-5">
        <div className="h-full w-full md:w-[35%]">
          <img
            src={pet?.image}
            alt={pet?.name}
            className="object-contain w-full h-full"
          />
        </div>
        <div className="w-full md:w-[65%] h-full pt-[30px] flex flex-col p-3">
          <h1>Name: {pet?.name}</h1>
          <h1>Type: {pet?.type}</h1>
          <h1>adopted: {pet?.adopted}</h1>

          <button className="w-[70px] border border-black rounded-md  hover:bg-green-400 mb-5">
            Adobt
          </button>

          <button className="w-[70px] border border-black rounded-md  hover:bg-red-400" onClick={mutate}>
            Delete
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default PetDetail;
