import GetData from "./GetData"
let dataArray = await GetData()
let categories = dataArray.map(item => item.category)
let deDupedCats = categories.filter ((category, index) => categories.indexOf(category) === index)

export default function GetCats() { 
    return(
        <div>
            <ul>
                {deDupedCats.map(category => <li>
                    {category}
                    <button>Select</button>
                </li>)}
            </ul>
        </div>
    )
    //return categories // returns a string array of the categories
}


    