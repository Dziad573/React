import { Item } from "../Item/Item";

const emojis = ["🚀", "🎶", "🎁", "🎉", "✨"];

export function List() {
    return (
        <>  
            <button className={`bg-transparent border border-solid border-rose-800 p-3 rounded cursor-pointer w-[120px] text-primary transition m-8 hover:text-white hover:bg-teal-400`}>
                test
            </button>

            <ul className="flex flex-col gap-[32px] p-7">
                {emojis.map((emoji) => (
                    <Item key={emoji} emoji={emoji} />
                    ))}
            </ul>
        </>
    );
}
