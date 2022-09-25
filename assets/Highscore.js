let highScoreDiv = document.getElementById("highScoreDiv");

window.onload = (event) => {
   let localStorageData=localStorage.getItem("highscore");
   console.log(localStorageData);
   let tableEl = document.createElement("table")
   let tableRow;
   for (let i=0; i< localStorageData.length; i++){
    tableRow = document.createElement("tr");
    let nametd = document.createElement("td");
    nametd.innerHTML=localStorageData[i].name;
    let scoretd = document.createElement("td");
    scoretd.innerHTML=localStorageData[i].score;
    tableRow.append(nametd, scoretd);
   }
   tableEl.append(tableRow);
   highScoreDiv.append(tableEl);
  };
  console.log()