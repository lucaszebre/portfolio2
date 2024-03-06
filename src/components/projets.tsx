import React from 'react'
import galleria from '../../../public/assets/images/thumbnail-project-6-large.webp'
import LinkDev from '../../../public/assets/LinkDev.jpg'
import Kanban from '../../../public/assets/Kanban.jpg'
import Invoice from '../../../public/assets/Invoice.jpg'
import Audiophile from '../../../public/assets/Audiophile.jpg'
import Designo from '../../../public/assets/Designo.jpg'
import API from '../../../public/assets/API.png'

const Projets = (props: { onClick: React.MouseEventHandler<HTMLDivElement> | undefined }) => {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="ProjetsContainer">
                <div className="ProjetsWrapper">
                    <div className="flex justify-between w-full">
                        <h1 className="text-white text-6xl font-semibold">Projets</h1>
                        <div className="Contactme" onClick={props.onClick}>CONTACT ME</div>
                    </div>
                    <div className="flex flex-wrap justify-between w-full">
                        <div className="ProjetsCard">
                            <a href="https://linkdev2.vercel.app/" target="_blank"><img className="w-96 h-auto" src={"/assets/LinkDev.jpg"} alt="EntertainnementWeb-app" /></a>
                            <div className="ProjetsName">LINK DEV </div>
                            <div className="ProjetsTechno">REACT.JS SUPABASE POSTGRESQL MATERIAL UI </div>
                        </div>
                        <div className="ProjetsCard">
                            <a href="https://kanbanwithapi.vercel.app/" target="_blank"><img className="w-96 h-auto" src={"/assets/Kanban.jpg"} alt="KanbanTask-app" /></a>
                            <div className="ProjetsName">KANBAN TASK MANAGER V2</div>
                            <div className="ProjetsTechno">REACT.JS POSTGRESQL NEST.JS TYPESCRIPT MATERIAL UI </div>
                        </div>
                        {/* Add more ProjetsCard components for other projects */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projets
