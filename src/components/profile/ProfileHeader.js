import React from 'react';
import { Link } from 'react-router-dom';

import User from './User';


export default function ProfileHeader() {
  return (
    <div className="flex justify-between mb-8">
      <User username="Username" src="/">
        <Link to="/" className="btn btn-primary">Edit Profile</Link>
      </User>
      <div>Some number stats</div>
    </div>
  );
}
