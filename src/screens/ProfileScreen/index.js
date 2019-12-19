import React from 'react';

import Container from '../../components/Container/Container';
import { ProfileNav, ProfileHeader, ProfileTabs } from '../../components/Profile';
import { withAuthorisation } from '../../components/Auth';

const ProfileScreen = () => {
  return (
    <Container className="flex-col py-8">
      <ProfileHeader />
      <ProfileNav />
      <ProfileTabs />
    </Container>
  );
};

export default withAuthorisation(ProfileScreen);
