//import { useState } from "react";
import Card from "./Card";
import tech from "../../utils/tech";

const Technologies = () => {
    return (
        <>
            <section className="w-full h-auto flex flex-col items-center justify-center">
                <h1 className="text-3xl text-white">Technologies</h1>
                <div className="w-full h-auto flex flex-wrap items-center justify-center">
                    {tech.map((techItem) => {
                        if (techItem.id % 2 === 0) {
                        console.log(`Technology with even ID: ${techItem.title}`);

                        }
                        return (
                        <Card
                            key={techItem.id}
                            className={techItem.id % 2 === 0 ? 'animate__animated animate__fadeInRight' : 'animate__animated animate__fadeInLeft'}
                            title={techItem.title}
                            image={techItem.image}
                            description={techItem.description}
                        />
                        );
                    })}
                </div>
            </section>
        </>
    )
}

export default Technologies;