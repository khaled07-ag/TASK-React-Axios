import instance from ".";

const getAllPets = async ()=>{
    const response = await instance.get("/pets")
    return response.data
}
const getPetById = async (id)=>{
    const res = await instance.get(`/pets/${id}`)
    return res.data
}
const createPet = async(name, type,image,available)=>{
    const res = await instance.post("/pets",
        {
            name:name,
            type:type,
            image:image,
            adopted:available,
        }
    )
    return res.data
}
const deletePet = async (id)=>{
    const res = await instance.delete(`/pets/${id}`)
    return res.data
}
export {getAllPets,getPetById,createPet,deletePet}