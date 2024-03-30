import style from "./Title.module.css";

const Title = ({ children }) => <p className={style.title}>{children}</p>;

export { Title };
