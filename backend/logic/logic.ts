import dal from "../dal/dal"


const getAllSomeThing = async():Promise<someModal[]>=>{
const sql = "select * from someTable"
return await dal.execute(sql)
}

const getById = async(id:number):Promise<someModal>=>{
    const sql = "select * from someTable WHERE id ="+id;
    return await dal.execute(sql)
}

const addNewSomeThing = async(newSomeThing:someModal):Promise<someModal>=>{
    const sql = `unsert into someTable VALUES (default,)`
    const result:okPacket = await dal.execute(sql);
    newSomeThing.id = result.
    return newSomeThing;
}

const deleteSomeThing = (id:number):Promise<void>=>{
    const sql = "delete from someTable where id="+id;
    return await dal.execute(sql);
}


export default {
    getAllSomeThing,
    getById,
    addNewSomeThing,
    deleteSomeThing,
    updateSomeThing
}