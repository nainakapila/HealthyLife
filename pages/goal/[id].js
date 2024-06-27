import React from 'react';
import { useRouter } from 'next/router';

const GoalDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Goal Details for {id}</h1>
    </div>
  );
};

export default GoalDetails;
