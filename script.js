// 1 recupero gli elementi dal DOM
// 2 creo l'array di oggetti
// 3 creo una variabile vuota che conterrà tot di volte i miei dati
// 4 creo un ciclo sul quale girare tot volte 
// 5 creo una variabile e gli assegno gli elementi dell'array
// 6 tramite il templateliteral creo tot elementi che contengono nomi, ruoli, immagini e link
// 7 inserisco gli elementi nel dom

// 1
const asd = document.getElementById('asd')
// 2
const team = [
    {name: 'Wayne Barnett',  role: 'Founder & CEO', pic: `<img src="img/wayne-barnett-founder-ceo.jpg" alt="">`, link: '<a href="#">WayneBarnett@team.com</a>'},
    {name: 'Angela Caroll',  role: 'Chief Editor', pic: `<img src="img/angela-caroll-chief-editor.jpg" alt="">`, link: '<a href="#">AngelaCaroll @team.com</a>'},
    {name: 'Walter Gordon',  role: 'Office Manager', pic: `<img src="img/walter-gordon-office-manager.jpg" alt="">`, link: '<a href="#">WalterGordon@team.com</a>'},
    {name: 'Angela Lopez',  role: 'Social Media Manager', pic: `<img src="img/angela-lopez-social-media-manager.jpg" alt="">`, link: '<a href="#">AngelaLopez@team.com</a>'},
    {name: 'Scott Estrada',  role: 'Developer', pic: `<img src="img/scott-estrada-developer.jpg" alt="">`, link: '<a href="#">ScottEstrada@team.com</a>'},
    {name: 'Barbara Ramos',  role: 'Graphic Designer', pic: `<img src="img/barbara-ramos-graphic-designer.jpg" alt="">`, link: '<a href="#">BarbaraRamos@team.com</a>'}
]
// 3
let items = ''
// 4
for (let i = 0; i < team.length; i++){
    // 5
    const currentTeam = team[i]
    // 6
    items += `    
        <div class="col">
            <div>${currentTeam.pic}</div>
            <div>
                <ul>
                    <li>${currentTeam.name}</li> 
                    <li>${currentTeam.role}</li>
                    <li>${currentTeam.link}</li>    
                </ul>
            </div>    
        </div>
    `
}
// 7
asd.innerHTML += items        

        
        