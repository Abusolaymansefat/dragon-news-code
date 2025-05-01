import React from 'react';
import SocialLogin from '../../SocialLogin/SocialLogin';
import FindUs from '../../FindUs/FindUs';
import QZone from '../../QZone/QZone';

const RighAside = () => {
    return (
        <div className='space-y-8'>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <QZone></QZone>
        </div>
    );
};

export default RighAside;