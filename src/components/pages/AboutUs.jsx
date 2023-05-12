import React from 'react';
import { useNavigate } from "react-router";
import { ImCross } from "react-icons/im";

function AboutUs() {

    const navigate = useNavigate();

    return (
        <>
            <div className="about-container">
            <ImCross className="iconCross" onClick={() => navigate(-1)}/>
                <div className="about-image">
                    <img className='img-machine' src="src\assets\img\machine.jpeg" alt="The Time Machine" />
                    </div>
                    <div className="text-container-about">
                    <p className="about-text">
                    Notre estimé fondateur Aldebert Brown a toujours été un rêveur, particulièrement attentif aux frontières de l’impossible. Quand au fil de ses expériences il met accidentellement au point la technologie de transsubstantation spatio-temporelle, Aldebert constate avec étonnement avoir tout à la fois vieilli de quelques années et être resté dans son garage, lequel est étrangement à l’état neuf, il réalise avoir bafoué quelques limitations de la physique et accomplit l’impossible. A ce jour Mr Brown est le seul à savoir comment fonctionne sa technologie.Aujourd’hui, c’est avec fierté que Time Travel Agency met au service de sa clientèle privilégiée et de qualité la science et le génie d’Aldebert Brown. Convenez-en, Monaco, Chamonix ou les Barbades sont désormais si bassement prolétaires. Vous en avez les moyens, vous en avez le chic, accomplissez vos rêves les plus fous grâce à la Time Travel Agency, n’hésitez plus. Car nous savons, comme vous, que voyager, c’était mieux avant.
                    </p>
                    </div>


                
            </div>
        </>
    );
}

export default AboutUs;