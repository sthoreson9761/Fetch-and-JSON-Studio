// TODO: add code here
window.addEventListener("load",function(){
    const fetchPromise = this.fetch("https://handlers.education.launchcode.org/static/astronauts.json");
    fetchPromise.then(function(response){
        
        response.json().then( function(json){
            let div = document.getElementById("container");
            let index = 0;
            for(index = 0; index<json.length;index++){
            div.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${json[index].firstName} ${json[index].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[index].hoursInSpace}</li>
                            <li>Active: ${json[index].active}</li>
                            <li>Skills: ${json[index].skills}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${json[index].picture}">
                </div>
            `;
            // index = (index + 1) % json.length;
            }
        });
        // }
    });
});