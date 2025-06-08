import GetCats from './GetCats'
import MyTaskList from './MyTaskList'

export default function MyLayout() {
    return [
        <div className="container">
            <div className="row text-center">
                <div className="col-10">
                    <h1>My Task List</h1>
                    <p>Week 14 Assignment</p>
                </div>
            </div>
            <div className="row">
                <div className="col-4 col-sm-3">
                    
                <div style={{
                    border: "solid",
                    borderColor: "blue",
                    padding: "1rem"
                    }}>
                    <h2>My Categories</h2>
                    <GetCats />
                </div>

                </div>
                <div className="col">

                <div style={{
                    border: "solid",
                    borderColor: "red",
                    padding: "1rem"
                    }}>
                    <h2>My Tasks</h2>
                    <MyTaskList />
                </div>

                </div>
            </div>
        </div>
    ]
}
