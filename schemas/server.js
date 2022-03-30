const mongoose= require('mongoose')
const Equip= require("../models/equipment")
mongoose.connect("mongodb://localhost/equipment")
runserve()
//Weights, Benches, Machines, Supplements, Misc
async function runserve(){
    Equip.deleteMany({})
    Equip.count({}, async function (err,count){
        if (count<12){
            let x = await Equip.findOne({name:"5-pound Dumbell"})
            if (x==null){
                const equipment= await Equip.create({ name:"5-pound Dumbell", price:10, inventory:100, category: ["Weights"] })
            }
            let x1 = await Equip.findOne({name:"10-pound Dumbell"})
            if (x1==null){
                const equipment1= await Equip.create({ name:"10-pound Dumbell", price:12, inventory:100, category: ["Weights"] })
            }
            let x2= await Equip.findOne({name:"20-pound Dumbell"})
            if (x2==null){
                const equipment1= await Equip.create({ name:"20-pound Dumbell", price:25, inventory:100, category: ["Weights"] })
            } let x3= await Equip.findOne({name:"30-pound Dumbell"})
            if (x3==null){
                const equipment1= await Equip.create({ name:"30-pound Dumbell", price:40, inventory:100, category: ["Weights"] })
            }let x4= await Equip.findOne({name:"Barbell"})
            if (x4==null){
                const equipment4= await Equip.create({ name:"Barbell", price:60, inventory:100, category: ["Weights"] })
            }let x5= await Equip.findOne({name:"Bench"})
            if (x5==null){
                const equipment5= await Equip.create({ name:"Bench", price:120, inventory:100, category: ["Bench"] })
            }let x6= await Equip.findOne({name:"10-pound weight"})
            if (x6==null){
                const equipment6= await Equip.create({ name:"10-pound weight", price:20, inventory:100, category: ["Weights"] })
            }let x7= await Equip.findOne({name:"25-pound weight"})
            if (x7==null){
                const equipment7= await Equip.create({ name:"25-pound weight", price:50, inventory:100, category: ["Weights"] })
            }let x8= await Equip.findOne({name:"35-pound weight"})
            if (x8==null){
                const equipment8= await Equip.create({ name:"35-pound weight", price:60, inventory:100, category: ["Weights"] })
            }let x9= await Equip.findOne({name:"45-pound weight"})
            if (x9==null){
                const equipment9= await Equip.create({ name:"45-pound weight", price:80, inventory:100, category: ["Weights"] })
            }let x10= await Equip.findOne({name:"Squat Rack"})
            if (x10==null){
                const equipment10= await Equip.create({ name:"Squat Rack", price:150, inventory:100, category: ["Machines"] })
            }let x11= await Equip.findOne({name:"Jump Rope"})
            if (x11==null){
                const equipment10= await Equip.create({ name:"Jump Rope", price:15, inventory:100, category: ["Misc"] })
            }
            console.log(x)
        }
    })

    //console.log(equipment)
}