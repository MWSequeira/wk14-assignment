import GetData from "./GetData"
let dataArray = await GetData()
let tasks = dataArray.map(item => [item.category, " - ", item.task, "  "])
console.log(tasks)

export default function MyTaskList () {
    return [
        <div>
            <ol>
                {tasks.map(task => <li>
                    {task}
                    <button>Select</button>
                </li>)}
            </ol>
        </div>
    ]
}