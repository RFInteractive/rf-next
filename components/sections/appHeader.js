const AppHeader = ({ leftColumnContent, rightColumnContent }) => {
    return (
        <header className="header">
            <div className="header__leftColumnContent">{leftColumnContent}</div>
            <div className="header__rightColumnContent">
                {rightColumnContent}
            </div>
        </header>
    );
};

export default AppHeader;
