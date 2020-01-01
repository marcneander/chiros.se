import React from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';

const Employee = ({ data }) => (
    <div className="employee">
        <div className="employee-image">
            <Image fixed={data.image.childImageSharp.fixed} />
        </div>
        <div className="employee-data">
            <h3>{data.name}</h3>
            <h4>{data.title}</h4>
            <div className="employee-link">
                <a href={`tel:${data.phone.replace(/ /g, '')}`}>{data.phone}</a>
            </div>
            <div className="employee-link">
                <a href={`mailto:${data.email}`}>{data.email}</a>
            </div>
        </div>
    </div>
);

Employee.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string,
        title: PropTypes.string,
        email: PropTypes.string,
        phone: PropTypes.string,
        image: PropTypes.object
    }).isRequired
};

export default Employee;
