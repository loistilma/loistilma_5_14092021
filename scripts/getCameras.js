const str = window.location.href;
const url = new URL(str);
const idParams = url.searchParams.get("id");

function getCameras() {

    if(window.location.pathname == '/index.html'){
        serverAPI.get("/cameras")
        .then(cameras => {
            cameras.map(camera => createCard(camera))
        })

    }else if (idParams){
        serverAPI.get(`/cameras/${idParams}`)
        .then(camera => {
            createCard(camera)
        })
    }
}

window.onload = () => {
    getCameras();
}