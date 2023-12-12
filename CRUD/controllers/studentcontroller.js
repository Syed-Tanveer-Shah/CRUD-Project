import studentmodel from "../models/student.js"


class studentcontroller{
    
    // create data
     static createDoc = async(req,res) =>{
        try {
            const {name,age,fees} = req.body
            const doc = new studentmodel({
               name:name,
               age:age,
               fees:fees 
            })
            // saving document
            const result = await doc.save()
            res.redirect('/student')
        } catch (error) {
            console.log(eror);
        }
        
     }

    
    //Get dtat
    
    static getAllDoc = async (req, res) =>{
        try {
            const result = await studentmodel.find()
            res.render("index",{data:result})
        } catch (error) {
            console.log(erro);
        }

    }

    // Edit Data

    static editDoc = async (req, res) =>{
       // console.log(req.params.id)
       try {
        const result = await studentmodel.findById(req.params.id)
        res.render("edit",{data: result})
       } catch (error) {
        console.log(erro)
       }
    }


        // Update Data
      static updateDocById = async(req,res)=>{

    try {
        const result = await studentmodel.findByIdAndUpdate(req.params.id, req.body)
    } catch (error) {
        console.log(error);
    }
}

        // Delete Data
        static deleteDocById = async(req, res) =>{
            try {
                const result = await studentmodel.findByIdAndDelete(req.params.id)
                res.redirect("/student")
            } catch (error) {
                console.log(error);
            }
           
        }



}
export default studentcontroller