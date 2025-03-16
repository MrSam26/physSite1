// alert(sessionStorage.getItem("taskID"))
const URL = "http://127.0.0.1:8000"

const getTask = () => {

    fetch(`${URL}/get_task_by_id/${sessionStorage.getItem("taskID")}`)
    .then(async(response) => await response.json())
    .then((data) => {

        const teacherP = document.getElementById("teacher")
        const themeP = document.getElementById("theme")
        const taskP = document.getElementById("task")

        if(data["status"]){
            teacherP.innerHTML += data["task_info"][1]
            themeP.innerHTML += data["task_info"][4]
            taskP.innerHTML += data["task_info"][2]
        }

    })
}

window.addEventListener("load", () => {

    getTask()

})