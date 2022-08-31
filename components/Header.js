import headerStyles from "../styles/Header.module.css";

const Header = () => {
  const x = 5;
  return (
    <div>
      {/* <h1 className="title"> */}
      <h1 className={headerStyles.title}>
        <span>WebDev</span> News
      </h1>
      <p className={headerStyles.description}>
        Keep up tp date with the latest web dev news
      </p>

      <style jsx>
        {`
          .title {
            color: ${x > 2 ? "red" : "orange"};
          }
        `}
      </style>
    </div>
  );
};

export default Header;
