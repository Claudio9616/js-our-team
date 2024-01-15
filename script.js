// Wayne Barnett |	Founder & CEO        |	wayne-barnett-founder-ceo.jpg
// Angela Caroll |	Chief Editor         |	angela-caroll-chief-editor.jpg
// Walter Gordon |	Office Manager       |	walter-gordon-office-manager.jpg
// Angela Lopez  |	Social Media Manager |	angela-lopez-social-media-manager.jpg
// Scott Estrada |	Developer            |	scott-estrada-developer.jpg
// Barbara Ramos |	Graphic Designer     |	barbara-ramos-graphic-designer.jpg
const team = [
    {name: 'Wayne Barnett',  role: 'Founder & CEO', pic: `<img src="img/wayne-barnett-founder-ceo.jpg" alt="">`},
    {name: 'Angela Caroll',  role: 'Chief Editor', pic: `<img src="img/angela-caroll-chief-editor.jpg" alt="">`},
    {name: 'Walter Gordon',  role: 'Office Manager', pic: `<img src="img/walter-gordon-office-manager.jpg" alt="">`},
    {name: 'Angela Lopez',  role: 'Social Media Manager', pic: `<img src="img/angela-lopez-social-media-manager.jpg" alt="">`},
    {name: 'Scott Estrada',  role: 'Developer', pic: `<img src="img/scott-estrada-developer.jpg" alt="">`},
    {name: 'Barbara Ramos',  role: 'Graphic Designer', pic: `<img src="img/barbara-ramos-graphic-designer.jpg" alt="">`}
]
for (let i = 0; i < team.length; i++){
    const currentTeam = team[i]
    console.log(currentTeam.name)
    console.log(currentTeam.role)
    console.log(currentTeam.pic)
}