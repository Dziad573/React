export function PersonInfo({ person }){

    let telSection =(
        <div>
                Tel: <a href={`tel:${person.tel}`}>{person.tel}</a>
        </div>
    );

    if(person.tel === undefined) {
        telSection = null;
    }

    let nameSection =(
        <div>
                <span>
                    {person.name} {person.lastName}
                </span>
            </div>
    );

    if(person.name === undefined) {
        nameSection = null;
    }

    let mailSection =(
        <div>
            E-mail: <a href={`mailto:${person.mail}`}>{person.mail}</a>
        </div>
    );

    if(person.mail === undefined) {
        mailSection = null;
    }

    return (
        <>
            {nameSection}
            {mailSection}
            {telSection}
    </>
    )
}