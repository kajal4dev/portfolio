import './Skill.css';
const Skill =() =>{
return(
    <div >
        <span style={{fontSize: '27px',color: 'rgb(71, 235, 235)',fontWeight: 100,padding:'10px 0px'}}>Skills</span>
        <div className="skill-details">
        <div className='skill-set-header'>Graphic Design & Creative Direction</div>
       <div style={{    lineHeight: '1.6' ,color:'#b9b9b9'}}>
        <div>• Building Responsive UI/UX Design for Web and Mobile. Creating Brand Strategy and Design Systems</div>
        <div>• Wireframing User Flows and delivering High-fidelity Prototypes for Developer Hand-off</div>
       </div>
        </div>
    </div>
);
}
export default Skill;