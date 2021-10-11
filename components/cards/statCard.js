/** @jsxImportSource theme-ui */

const StatCard = ({ statistic, subheading }) => {
    return (
        <div
            sx={{
                padding: '30px',
                backgroundColor: 'muted',
                borderRadius: '5px',
                boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.08)',
            }}
        >
            <h3
                sx={{
                    variant: 'text.h3',
                    textAlign: 'center',
                    marginBottom: '10px',
                    color: 'primaryDark',
                    fontSize: '30px',
                    fontWeight: 'mediumBold',
                }}
            >
                {statistic}
            </h3>
            <h4
                sx={{
                    variant: 'text.h4',
                    textAlign: 'center',
                    fontSize: '20px',
                    textTransform: 'uppercase',
                }}
            >
                {subheading}
            </h4>
        </div>
    );
};

export default StatCard;
