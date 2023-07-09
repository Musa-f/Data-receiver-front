
let body = document.getElementById("content");
let newDatas = {};

fetch("http://127.0.0.1:8000/api/ecritures/achats", {
    method: 'GET',
})
.then(response => response.json())
.then(datas => {
    for(let i=0; i<datas.length;i++){
        let data = datas[i];
        const id_piece = data.id_piece;
        if (!newDatas[id_piece]) {
            newDatas[id_piece] = {
              date_ecriture: data.date_ecriture,
              journal: data.journal,
              piece: data.id_piece,
              lignes: []
            };
        }
        newDatas[id_piece].lignes.push({
            debit: data.debit,
            credit: data.credit,
            compte: data.compte
        });
    }

    for(let key in newDatas){
        let datas = newDatas[key];
        let lignes = datas.lignes;
        let date = new Date(datas.date_ecriture);

        let table = document.createElement("table");
        table.classList.add("table");
        body.appendChild(table);
    
        let thead = document.createElement("thead");
        table.appendChild(thead);

        let tbody = document.createElement("tbody");
        table.appendChild(tbody);
    
        let tr = document.createElement("tr");
        thead.appendChild(tr);
    
        let th1 = document.createElement("th");
        th1.innerText = "Comptes";
        tr.appendChild(th1);
  
        let th2 = document.createElement("th");
        th2.innerText = date.getDate() + "-" + (date.getMonth() +1) + "-" + date.getFullYear();
        tr.appendChild(th2);
    
        let th3 = document.createElement("th");
        th3.innerText = "Debit"
        tr.appendChild(th3);
    
        let th4 = document.createElement("th");
        th4.innerText = "Credit";
        tr.appendChild(th4);

        for (let i = 0; i < lignes.length; i++) {
            let data = lignes[i];
            //console.log(data);
            let tr = document.createElement("tr");
            tbody.appendChild(tr);

            let td1 = document.createElement("td");
            td1.innerText = data.compte.id;
            tr.appendChild(td1);

            let td2 = document.createElement("td");
            td2.innerText = data.compte.intitule_compte;
            tr.appendChild(td2);

            if(data.debit){
                let td3 = document.createElement("td");
                td3.innerText = data.debit;
                tr.appendChild(td3);

                let td4 = document.createElement("td");
                td4.innerText = "";
                tr.appendChild(td4);
            }else{
                let td3 = document.createElement("td");
                td3.innerText = "";
                tr.appendChild(td3);

                let td4 = document.createElement("td");
                td4.innerText = data.credit;
                tr.appendChild(td4);
            }
        }
        let trBody = document.createElement("tr");
        tbody.appendChild(trBody);

        let tdRef = document.createElement("td");
        tdRef.innerText = "Facture d'achat N° "+datas.piece;
        tdRef.colSpan = 4;
        tdRef.style.fontStyle = "italic";
        trBody.appendChild(tdRef);
    }
})
.catch(error => {
    console.log("Une erreur est survenue: "+error);
});

