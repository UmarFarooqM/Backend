
const addpublishers= async (req,res)=>{

    try {
        let published = await publisherModel.create(req.body)
        res.json("publisher is created", published)
    } catch (error) {
         res.status(500).json({ msg: "Something went wrong.." });   
    }
}

const getAllpublishers= async (req,res)=>{

    try {
        let allpublishers= await publisherModel.find({})
        res.json("all publishers", allpublishers)
    } catch (error) {
        res.status(500).json({ msg: "Something went wrong.." });   
    }
}

const getpublishersById = async (req,res)=>{
    let {id} = req.params
    try {
        if(!id){
            res.json("id is not inapproriate")
        }
        let publish = await  publisherModel.findById(id)
        res.json("publishers by Id", publish)
        
    } catch (error) {
        console.log("error", error)
        res.status(500).json({ msg: "Something went wrong.." });   

    }
}

const updatepublishersById= async (req,res)=>{
    const {id}= req.params
    try {
        let newpublish = req.body

        let update = await publisherModel.findByIdAndUpdate(id, newpublish, {new:true})
        res.json("updated list", update)

    } catch (error) {
    res.status(500).json({ msg: "Something went wrong.." });   

    }
}

const deletepublishersById= async (req,res)=>{
        let {id} = req.params
    try {
        let deletedpub = await publisherModel.findByIdAndDelete(id,{new:true})
        res.json({msg:"publisher deleted sucessfully"}, deletedpub)
    } catch (error) {
        console.log("error", error)
        res.status(500).json({ msg: "Something went wrong.." });   
    }
}

module.exports = {
  getAllpublishers,
  addpublishers,
  updatepublishersById,
  deletepublishersById,
  getpublishersById,
};