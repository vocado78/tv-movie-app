import React from 'react';

// import Container from '../../components/Layout/Container/Container';
import { ProfileNav, ProfileHeader, ProfileTabs } from '../../components/Profile';
import { withAuthorisation } from '../../components/Auth';

const ProfileScreen = () => {
  return (
    <>
      <ProfileHeader />
      <ProfileNav />
      <ProfileTabs />
    </>
  );
};

export default withAuthorisation(ProfileScreen);
