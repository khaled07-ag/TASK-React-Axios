import instance from ".";

const getAllPets = async ()=>{
    const response = await instance.get("/pets")
    return response.data
}
const getPetById = async (id)=>{
    const res = await instance.get(`/pets/${id}`)
    return res.data
}
export {getAllPets,getPetById}