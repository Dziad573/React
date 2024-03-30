import style from "./Layout.module.css";
const Layout = ({ children }) => {
    return <div className={style["flex-container"]}>{children}</div>;
};

export default Layout;
