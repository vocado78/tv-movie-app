import React from 'react';

import ProfileTab from './ProfileTab';


export default function Connections() {
  return (
    <div className="flex">
      <ProfileTab className="flex-auto mr-10" title="Following">
        <p>No following yet.</p>
      </ProfileTab>
      <ProfileTab className="flex-auto ml-10" title="Followers">
        <p>No followers yet.</p>
      </ProfileTab>
    </div>
  );
}
