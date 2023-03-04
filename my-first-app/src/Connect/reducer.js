import { init } from "./init";

export const myReducer=(currData=init,newData)=>{

    currData={
        ...currData,
        name:newData.name
    }
    return currData;
}