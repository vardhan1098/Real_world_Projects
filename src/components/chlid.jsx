import React from 'react';

const Chlid = ({count}) => {
    return (
        <div>
            <h3 data-testid="count">{count}</h3>
        </div>
    );
};

export default Chlid;