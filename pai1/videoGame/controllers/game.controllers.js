
const addgames= async (req,res)=>{
    try {
        let game = await gameModelModel.create(req.body)
        res.json("gameer is created", game)
    } catch (error) {
         res.status(500).json({ msg: "Something went wrong.." });   
    }
}


const getAllgames =   async (req,res)=>{
    try {
        let allgamers= await gameModel.find({}).populate("publisher")
        res.json("all gameers", allgamers)
    } catch (error) {
        res.status(500).json({ msg: "Something went wrong.." });   
    }
}

const getgamesById = async (req,res)=>{
    let {id} = req.params
    try {
        if(!id){
            res.json("id is not inapproriate")
        }
        let game = await  gameModel.find({publisher:id}).populate("publisher")
        res.json("gameers by Id", game)
        
    } catch (error) {
        console.log("error", error)
        res.status(500).json({ msg: "Something went wrong.." });   

    }
}

const updategamesById = async (req,res)=>{
    const {id}= req.params
    try {
        let newgame = req.body
        let update = await gameModel.findByIdAndUpdate(id, newgame, {new:true})
        res.json("updated list", update)

    } catch (error) {
    res.status(500).json({ msg: "Something went wrong.." });   

    }
}

const deletegamesById =  async (req,res)=>{
        let {id} = req.params
    try {
        let deletedpub = await gameModel.findByIdAndDelete(id,{new:true})
        res.json({msg:"gameer deleted sucessfully"}, deletedpub)
    } catch (error) {
        console.log("error", error)
        res.status(500).json({ msg: "Something went wrong.." });   
    }
}




module.exports = {
    addgames,
  getAllgames,
  getgamesById,
  updategamesById,
  deletegamesById,
};