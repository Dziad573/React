export function PersonInfo({ person }){

    return (
        <address>
            {person.name &&(
                <div>
                        <span>
                            {person.name} {person.lastName}
                        </span>
                    </div>
            )}
            {person.mail === undefined ? null : (
                <div>
                    E-mail: <a href={`mailto:${person.mail}`}>{person.mail}</a>
                </div>
            )}
            {person.tel &&(
                <div>
                        Tel: <a href={`tel:${person.tel}`}>{person.tel}</a>
                </div>
            )}
            
        </address>
    )
}