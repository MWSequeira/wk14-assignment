const practiceData = [ // use this to test the react code
    {
        "id": 4,
        "task": "charge cords",
        "due": "June 5",
        "category": "Packing List"
      },
      {
        "id": 5,
        "task": "dishwasher monthly clean",
        "due": "June 2",
        "category": "Home Maintenance"
      },
      {
        "id": 6,
        "task": "replace A/C filters",
        "due": "June 1",
        "category": "Home Maintenance"
      },
      {
        "id": 10,
        "task": "electric",
        "due": "June 18",
        "category": "Pay Bills"
      },
]

export default async function GetData() {
    // Data location -- dB from where to fetch the data 
    const dataURL = "http://localhost:3000/tasksList" 
    
    // Get the data. Wait for it; don't do anything until we have it.
    let response = await fetch(dataURL) // wait for the json data
    let data = response.json() // create a JS object from the json data
    
    // let data = practiceData;

    return data
}

// Notes to Me:
// consider using <> to return data
