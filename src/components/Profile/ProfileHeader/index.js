import React from 'react';
import { Link } from 'react-router-dom';

import User from './User';
import LABELS from '../../../constants/buttonLabels';


export default function ProfileHeader() {
  return (
    <div className="flex justify-between items-center mb-6">
      <User username="Username" src="/">
        <Link to="/" className="btn-primary text-xs uppercase px-2 py-1 rounded">
          {LABELS.EDIT_PROFILE}
        </Link>
      </User>
      <ul className="flex h-12">
        <li className="text-xs border-l border-solid border-gray-500 px-2 leading-tight">
          <span className="text-2xl font-light">0</span>
          <br />
          Watched
        </li>
        <li className="text-xs border-l border-solid border-gray-500 px-2 leading-tight">
          <span className="text-2xl font-light">0</span>
          <br />
          Following
        </li>
        <li className="text-xs border-l border-solid border-gray-500 px-2 leading-tight">
          <span className="text-2xl font-light">0</span>
          <br />
          Followers
        </li>
      </ul>
    </div>
  );
}
