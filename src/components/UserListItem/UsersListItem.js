import React from 'react';
import PropTypes from 'prop-types';

const UsersListItem = ({userData: {average, name, attendance ='0%'}}) => (
    <li>
                <div>{average}</div>
                <div>
                    <p>{name}</p>
                    <p>{attendance}</p>
                </div>
                <button>
                    X
                </button>
            </li>
);
UsersListItem.propTypes={
    userData: PropTypes.shape({
        average: PropTypes.string,
        name: PropTypes.string,
        attendance: PropTypes.string,
    }),

};
export default UsersListItem;